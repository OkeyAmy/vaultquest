// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault is Ownable, ReentrancyGuard {
    struct VaultInfo {
        string name;
        address token; // address(0) for native currency (ETH/AVAX), token address for ERC20
        uint256 totalDeposits;
        uint256 creationTime;
        uint256 duration;
        uint256 interestRate; // Interest rate in basis points (e.g., 500 = 5%)
        bool active;
        address[] depositors;
        mapping(address => uint256) deposits;
    }

    mapping(uint256 => VaultInfo) public vaults;
    uint256 public vaultCount;
    address public adminWallet;

    event VaultCreated(
        uint256 indexed vaultId,
        string name,
        address token,
        uint256 duration,
        uint256 interestRate
    );
    event Deposited(
        uint256 indexed vaultId,
        address indexed depositor,
        uint256 amount
    );
    event Withdrawn(
        uint256 indexed vaultId,
        address indexed depositor,
        uint256 amount,
        uint256 interest
    );
    event VaultDeleted(uint256 indexed vaultId);
    event AdminWalletUpdated(
        address indexed oldAdmin,
        address indexed newAdmin
    );

    modifier onlyAdmin() {
        require(msg.sender == adminWallet, "Caller is not the admin");
        _;
    }

    constructor() Ownable(msg.sender) {
        adminWallet = msg.sender;
    }

    function setAdminWallet(address _adminWallet) external onlyOwner {
        require(_adminWallet != address(0), "Invalid address");
        address oldAdmin = adminWallet;
        adminWallet = _adminWallet;
        emit AdminWalletUpdated(oldAdmin, _adminWallet);
    }

    function createVault(
        string memory _name,
        address _token,
        uint256 _duration,
        uint256 _interestRate
    ) external onlyAdmin {
        require(_interestRate > 0, "Interest rate must be greater than 0");

        uint256 vaultId = vaultCount++;
        VaultInfo storage newVault = vaults[vaultId];
        newVault.name = _name;
        newVault.token = _token;
        newVault.creationTime = block.timestamp;
        newVault.duration = _duration;
        newVault.interestRate = _interestRate;
        newVault.active = true;

        emit VaultCreated(vaultId, _name, _token, _duration, _interestRate);
    }

    function deposit(
        uint256 _vaultId,
        uint256 _amount
    ) external payable nonReentrant {
        VaultInfo storage vault = vaults[_vaultId];
        require(vault.active, "Vault is not active");

        // Check if vault is still open for deposits
        require(
            block.timestamp < vault.creationTime + vault.duration,
            "Vault deposit period has ended"
        );

        uint256 depositAmount;

        if (vault.token == address(0)) {
            // Native currency (ETH/AVAX)
            require(msg.value > 0, "Cannot deposit 0");
            depositAmount = msg.value;
        } else {
            // ERC20 token
            require(_amount > 0, "Cannot deposit 0");
            require(msg.value == 0, "Don't send ETH for token deposits");
            IERC20(vault.token).transferFrom(
                msg.sender,
                address(this),
                _amount
            );
            depositAmount = _amount;
        }

        if (vault.deposits[msg.sender] == 0) {
            vault.depositors.push(msg.sender);
        }

        vault.deposits[msg.sender] += depositAmount;
        vault.totalDeposits += depositAmount;

        emit Deposited(_vaultId, msg.sender, depositAmount);
    }

    function withdraw(uint256 _vaultId, uint256 _amount) external nonReentrant {
        VaultInfo storage vault = vaults[_vaultId];
        require(vault.active, "Vault is not active");
        require(vault.deposits[msg.sender] >= _amount, "Insufficient balance");

        uint256 interest = 0;

        // Only give interest if lock period has ended
        if (block.timestamp >= vault.creationTime + vault.duration) {
            // Calculate interest only if withdrawing the full amount
            if (_amount == vault.deposits[msg.sender]) {
                // Calculate interest: principal * rate * time / (10000 * 365 days)
                // Using basis points (100 = 1%) and normalizing to annual rate
                uint256 principal = vault.deposits[msg.sender];
                interest =
                    (principal * vault.interestRate * vault.duration) /
                    (10000 * 365 days);
            } else {
                // For partial withdrawals, calculate proportional interest
                uint256 principal = vault.deposits[msg.sender];
                uint256 fullInterest = (principal *
                    vault.interestRate *
                    vault.duration) / (10000 * 365 days);
                interest = (fullInterest * _amount) / principal;
            }
        }

        vault.deposits[msg.sender] -= _amount;
        vault.totalDeposits -= _amount;

        // Remove depositor if balance becomes zero
        if (vault.deposits[msg.sender] == 0) {
            _removeDepositor(_vaultId, msg.sender);
        }

        uint256 totalAmount = _amount + interest;

        // Transfer funds based on vault token type
        if (vault.token == address(0)) {
            // Native currency (ETH/AVAX)
            require(
                address(this).balance >= totalAmount,
                "Insufficient contract balance"
            );
            (bool success, ) = msg.sender.call{value: totalAmount}("");
            require(success, "Transfer failed");
        } else {
            // ERC20 token
            require(
                IERC20(vault.token).balanceOf(address(this)) >= totalAmount,
                "Insufficient contract balance"
            );
            IERC20(vault.token).transfer(msg.sender, totalAmount);
        }

        emit Withdrawn(_vaultId, msg.sender, _amount, interest);
    }

    function deleteVault(uint256 _vaultId) external onlyAdmin {
        VaultInfo storage vault = vaults[_vaultId];
        require(vault.active, "Vault is not active");

        vault.active = false;

        // Return funds to all depositors
        for (uint256 i = 0; i < vault.depositors.length; i++) {
            address depositor = vault.depositors[i];
            uint256 amount = vault.deposits[depositor];

            if (amount > 0) {
                vault.deposits[depositor] = 0;

                uint256 interest = 0;
                // Add interest only if vault duration has passed
                if (block.timestamp >= vault.creationTime + vault.duration) {
                    interest =
                        (amount * vault.interestRate * vault.duration) /
                        (10000 * 365 days);
                }

                uint256 totalAmount = amount + interest;

                // Transfer funds based on vault token type
                if (vault.token == address(0)) {
                    // Native currency (ETH/AVAX)
                    (bool success, ) = depositor.call{value: totalAmount}("");
                    require(success, "Transfer failed");
                } else {
                    // ERC20 token
                    IERC20(vault.token).transfer(depositor, totalAmount);
                }
            }
        }

        emit VaultDeleted(_vaultId);
    }

    function _removeDepositor(uint256 _vaultId, address _depositor) private {
        VaultInfo storage vault = vaults[_vaultId];
        for (uint256 i = 0; i < vault.depositors.length; i++) {
            if (vault.depositors[i] == _depositor) {
                // Replace with the last element and then pop
                vault.depositors[i] = vault.depositors[
                    vault.depositors.length - 1
                ];
                vault.depositors.pop();
                break;
            }
        }
    }

    function getVaultInfo(
        uint256 _vaultId
    )
        external
        view
        returns (
            string memory name,
            address token,
            uint256 totalDeposits,
            uint256 creationTime,
            uint256 duration,
            uint256 interestRate,
            bool active,
            uint256 timeLeft,
            uint256 depositorCount
        )
    {
        VaultInfo storage vault = vaults[_vaultId];

        uint256 endTime = vault.creationTime + vault.duration;
        uint256 currentTime = block.timestamp;
        uint256 _timeLeft = currentTime >= endTime ? 0 : endTime - currentTime;

        return (
            vault.name,
            vault.token,
            vault.totalDeposits,
            vault.creationTime,
            vault.duration,
            vault.interestRate,
            vault.active,
            _timeLeft,
            vault.depositors.length
        );
    }

    function getDepositorBalance(
        uint256 _vaultId,
        address _depositor
    ) external view returns (uint256 principal, uint256 currentInterest) {
        VaultInfo storage vault = vaults[_vaultId];
        principal = vault.deposits[_depositor];

        // Calculate current accrued interest (only if lock period has passed)
        if (
            principal > 0 &&
            block.timestamp >= vault.creationTime + vault.duration
        ) {
            currentInterest =
                (principal * vault.interestRate * vault.duration) /
                (10000 * 365 days);
        } else {
            currentInterest = 0; // No interest before lock period expires
        }

        return (principal, currentInterest);
    }

    function getVaultDepositors(
        uint256 _vaultId
    ) external view returns (address[] memory) {
        return vaults[_vaultId].depositors;
    }

    function isDepositor(
        uint256 _vaultId,
        address _depositor
    ) external view returns (bool) {
        VaultInfo storage vault = vaults[_vaultId];
        return vault.deposits[_depositor] > 0;
    }

    // Function to fund the contract to pay interest (for native currency)
    function fundContract() external payable onlyAdmin {
        // Just receives ETH/AVAX to pay interest
    }

    // Function to fund the contract with ERC20 tokens
    function fundContractToken(
        address _token,
        uint256 _amount
    ) external onlyAdmin {
        require(_token != address(0), "Invalid token address");
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
    }

    receive() external payable {
        revert("Direct deposits not allowed, use deposit function");
    }
}
