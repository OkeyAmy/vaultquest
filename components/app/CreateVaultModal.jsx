"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, AlertCircle, Check } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function CreateVaultModal({ isOpen, onClose, onCreateVault }) {
	const [formData, setFormData] = useState({
		name: "",
		token: "",
		network: "",
		yieldSource: "",
		drawDuration: "",
	});
	const [isConnected, setIsConnected] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
		setError("");
	};

	const handleConnect = () => {
		setIsConnected(true);
	};

	const handleCreate = () => {
		// Validate form
		if (
			!formData.name ||
			!formData.token ||
			!formData.network ||
			!formData.yieldSource ||
			!formData.drawDuration
		) {
			setError("Please fill in all fields");
			return;
		}

		setError("");
		setIsProcessing(true);

		// Simulate processing
		setTimeout(() => {
			setIsProcessing(false);
			setSuccess(true);

			// Call the onCreateVault callback if provided
			if (onCreateVault) {
				onCreateVault(formData);
			}

			// Close modal after success
			setTimeout(() => {
				onClose();
				// Reset form
				setFormData({
					name: "",
					token: "",
					network: "",
					yieldSource: "",
					drawDuration: "",
				});
				setSuccess(false);
			}, 1500);
		}, 1000);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#1A0808]/90 backdrop-blur-sm border border-red-900/20 text-white sm:max-w-[425px] shadow-lg">
				<DialogHeader className="flex flex-row items-center justify-between">
					<DialogTitle>Create A Vault</DialogTitle>
					<button onClick={onClose} className="text-gray-400 hover:text-white">
						<X className="h-4 w-4" />
					</button>
				</DialogHeader>

				<div className="py-4 space-y-4">
					<div>
						<label className="text-sm text-gray-400 mb-1 block">
							Vault Name
						</label>
						<Input
							placeholder="e.g. Prize USDC"
							className="bg-[#2A0A0A]/80 backdrop-blur-sm border-red-900/20"
							value={formData.name}
							onChange={(e) => handleChange("name", e.target.value)}
							disabled={isProcessing || success}
						/>
					</div>

					<div>
						<label className="text-sm text-gray-400 mb-1 block">Token</label>
						<Select
							value={formData.token}
							onValueChange={(value) => handleChange("token", value)}
							disabled={isProcessing || success}
						>
							<SelectTrigger className="bg-[#2A0A0A]/80 backdrop-blur-sm border-red-900/20">
								<SelectValue placeholder="Select Token" />
							</SelectTrigger>
							<SelectContent className="bg-[#1A0808] border border-red-900/20">
								<SelectItem value="usdc">USDC</SelectItem>
								<SelectItem value="dai">Atom</SelectItem>
								<SelectItem value="usdt">USDT</SelectItem>
								<SelectItem value="Atom">Atom</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<label className="text-sm text-gray-400 mb-1 block">Network</label>
						<Select
							value={formData.network}
							onValueChange={(value) => handleChange("network", value)}
							disabled={isProcessing || success}
						>
							<SelectTrigger className="bg-[#2A0A0A]/80 backdrop-blur-sm border-red-900/20">
								<SelectValue placeholder="Select Network" />
							</SelectTrigger>
							<SelectContent className="bg-[#1A0808] border border-red-900/20">
								<SelectItem value="solana">Atom</SelectItem>
								<SelectItem value="ethereum">Cosmos</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<label className="text-sm text-gray-400 mb-1 block">
							Yield Source
						</label>
						<Select
							value={formData.yieldSource}
							onValueChange={(value) => handleChange("yieldSource", value)}
							disabled={isProcessing || success}
						>
							<SelectTrigger className="bg-[#2A0A0A]/80 backdrop-blur-sm border-red-900/20">
								<SelectValue placeholder="Select Yield Source" />
							</SelectTrigger>
							<SelectContent className="bg-[#1A0808] border border-red-900/20">
								<SelectItem value="aave">Cosmo</SelectItem>
								<SelectItem value="compound">Compound</SelectItem>
								<SelectItem value="lido">Lido</SelectItem>
								<SelectItem value="marinade">Marinade</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div>
						<label className="text-sm text-gray-400 mb-1 block">
							Draw Duration
						</label>
						<Select
							value={formData.drawDuration}
							onValueChange={(value) => handleChange("drawDuration", value)}
							disabled={isProcessing || success}
						>
							<SelectTrigger className="bg-[#2A0A0A]/80 backdrop-blur-sm border-red-900/20">
								<SelectValue placeholder="Select Draw Duration" />
							</SelectTrigger>
							<SelectContent className="bg-[#1A0808] border border-red-900/20">
								<SelectItem value="daily">Daily</SelectItem>
								<SelectItem value="weekly">Weekly</SelectItem>
								<SelectItem value="biweekly">Bi-weekly</SelectItem>
								<SelectItem value="monthly">Monthly</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{error && (
						<div className="flex items-center gap-2 text-red-500 text-sm">
							<AlertCircle size={16} />
							{error}
						</div>
					)}

					{success && (
						<div className="bg-green-900/20 text-green-500 p-3 rounded-md text-sm flex items-center gap-2">
							<Check size={16} />
							Vault created successfully!
						</div>
					)}
				</div>

				{!isConnected ? (
					<Button
						className="w-full bg-red-600 hover:bg-red-700"
						onClick={handleConnect}
					>
						Connect Wallet
					</Button>
				) : (
					<Button
						className="w-full bg-red-600 hover:bg-red-700"
						onClick={handleCreate}
						disabled={isProcessing || success}
					>
						{isProcessing ? "Processing..." : "Create Vault"}
					</Button>
				)}
			</DialogContent>
		</Dialog>
	);
}
