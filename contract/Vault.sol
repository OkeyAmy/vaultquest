// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Vault is Ownable, ReentrancyGuard {
    struct VaultInfo {
        string name;
        uint256 totalDeposits;
        uint256 creationTime;
        uint256 duration;
        bool active;
        address[] depositors;
        mapping(address => uint256) deposits;
    }

    mapping(uint256 => VaultInfo) public vaults;
    uint256 public vaultCount;
    address public adminWallet;

    event VaultCreated(uint256 indexed vaultId, string name, uint256 duration);
    event Deposited(
        uint256 indexed vaultId,
        address indexed depositor,
        uint256 amount
    );
    event Withdrawn(
        uint256 indexed vaultId,
        address indexed depositor,
        uint256 amount
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

    function createVault(string memory _name, uint256 _duration)
        external
        onlyAdmin
    {
        uint256 vaultId = vaultCount++;
        VaultInfo storage newVault = vaults[vaultId];
        newVault.name = _name;
        newVault.creationTime = block.timestamp;
        newVault.duration = _duration;
        newVault.active = true;

        emit VaultCreated(vaultId, _name, _duration);
    }

    function deposit(uint256 _vaultId) external payable nonReentrant {
        require(msg.value > 0, "Cannot deposit 0");
        require(vaults[_vaultId].active, "Vault is not active");

        VaultInfo storage vault = vaults[_vaultId];

        if (vault.deposits[msg.sender] == 0) {
            vault.depositors.push(msg.sender);
        }

        vault.deposits[msg.sender] += msg.value;
        vault.totalDeposits += msg.value;

        emit Deposited(_vaultId, msg.sender, msg.value);
    }

    function withdraw(uint256 _vaultId, uint256 _amount) external nonReentrant {
        VaultInfo storage vault = vaults[_vaultId];
        require(vault.active, "Vault is not active");
        require(vault.deposits[msg.sender] >= _amount, "Insufficient balance");

        vault.deposits[msg.sender] -= _amount;
        vault.totalDeposits -= _amount;

        // Remove depositor if balance becomes zero
        if (vault.deposits[msg.sender] == 0) {
            _removeDepositor(_vaultId, msg.sender);
        }

        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Transfer failed");

        emit Withdrawn(_vaultId, msg.sender, _amount);
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
                (bool success, ) = depositor.call{value: amount}("");
                require(success, "Transfer failed");
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

    function getVaultInfo(uint256 _vaultId)
        external
        view
        returns (
            string memory name,
            uint256 totalDeposits,
            uint256 creationTime,
            uint256 duration,
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
            vault.totalDeposits,
            vault.creationTime,
            vault.duration,
            vault.active,
            _timeLeft,
            vault.depositors.length
        );
    }

    function getDepositorBalance(uint256 _vaultId, address _depositor)
        external
        view
        returns (uint256)
    {
        return vaults[_vaultId].deposits[_depositor];
    }

    function getVaultDepositors(uint256 _vaultId)
        external
        view
        returns (address[] memory)
    {
        return vaults[_vaultId].depositors;
    }

    function isDepositor(uint256 _vaultId, address _depositor)
        external
        view
        returns (bool)
    {
        VaultInfo storage vault = vaults[_vaultId];
        return vault.deposits[_depositor] > 0;
    }

    receive() external payable {
        revert("Direct deposits not allowed");
    }
}
