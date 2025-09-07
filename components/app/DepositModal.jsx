"use client";

import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DepositModal({
	isOpen,
	onClose,
	selectedVault,
	onDeposit,
	depositAmount,
	setDepositAmount,
	error,
	success,
	isPending,
}) {
	const { isConnected } = useAccount();

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
			<div className="bg-[#1A0808] rounded-xl p-6 border border-red-900/20 shadow-lg w-full max-w-md">
				<h2 className="text-xl font-bold mb-4 text-white">
					Deposit into {selectedVault?.name || "Vault"}
				</h2>

				{!isConnected ? (
					<p className="text-red-500 text-sm mb-4">
						Please connect your wallet to deposit.
					</p>
				) : (
					<>
						<div className="mb-4">
							<label className="block text-sm text-gray-300 mb-1">
								Amount
							</label>
							<Input
								type="number"
								value={depositAmount}
								onChange={(e) => setDepositAmount(e.target.value)}
								placeholder="Enter amount"
								className="bg-[#2A0A0A]/70 border-red-900/20 text-white"
							/>
						</div>

						{/* Error message */}
						{error && <p className="text-red-500 text-sm mb-2">{error}</p>}

						{/* Success message */}
						{success && (
							<p className="text-green-500 text-sm mb-2">
								Deposit successful! 🎉
							</p>
						)}

						<Button
							onClick={onDeposit}
							disabled={isPending}
							className="w-full bg-red-600 hover:bg-red-700"
						>
							{isPending ? "Processing..." : "Deposit"}
						</Button>
					</>
				)}

				<Button
					onClick={onClose}
					variant="secondary"
					className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white"
				>
					Close
				</Button>
			</div>
		</div>
	);
}
