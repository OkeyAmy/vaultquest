"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppNav from "@/components/app/AppNav";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { AtomIcon } from "@/components/icons/AtomIcon";
import DepositModal from "@/components/app/DepositModal";
import WithdrawModal from "@/components/app/WithdrawModal";

export default function PrizePage() {
	const router = useRouter();
	const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
	const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

	// Sample data for the prize page
	const prizeData = {
		name: "Prize USDC",
		lastDeposits: 4330.0,
		totalDeposited: 2300000,
		tvl: 2324058,
		protocol: "AAVE",
		protocolUrl: "aave.com",
		apr: 13.1,
		distribution: "Every 7 day",
		nextDrop: "in 3 days",
		prizes: [
			{ amount: 32980, frequency: "Every 3 months" },
			{ amount: 2938, frequency: "Every 2 weeks" },
			{ amount: 570, frequency: "Every 7 days" },
			{ amount: 69, frequency: "4x Daily" },
			{ amount: 0.21, frequency: "1024x Daily" },
		],
		winners: [
			{ id: "0x6e8...7b28", date: "January 18", prize: "G0008 MTH" },
			{ id: "0x6e8...7b29", date: "January 18", prize: "G0009 MTH" },
			{ id: "0x6e8...7b30", date: "January 18", prize: "G0008 MTH" },
		],
		chartData: [65, 45, 30, 60, 45, 30, 70, 45],
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#1A0505] to-[#2D0A0A] text-white">
			<AppNav />
			<main className="container mx-auto px-4 py-8">
				<div className="flex items-center justify-between mb-6">
					<div className="flex items-center gap-2 text-gray-400 backdrop-blur-sm bg-[#1A0505]/60 rounded-lg px-3 py-2 border border-red-900/10">
						<Button
							variant="ghost"
							className="hover:text-white p-0"
							onClick={() => router.back()}
						>
							<ArrowLeft className="h-4 w-4" />
						</Button>
						<span>{prizeData.name}</span>
					</div>
					<div className="flex gap-2">
						<Button
							className="bg-red-600/90 hover:bg-red-700 backdrop-blur-sm shadow-lg"
							onClick={() => setIsDepositModalOpen(true)}
						>
							Deposit
						</Button>
						<Button
							variant="outline"
							className="border-red-900/20 hover:bg-red-600/10 backdrop-blur-sm shadow-lg"
							onClick={() => setIsWithdrawModalOpen(true)}
						>
							Withdraw
						</Button>
					</div>
				</div>

				<div className="grid gap-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
							<div className="flex items-center gap-2 mb-4">
								<AtomIcon className="w-5 h-5" />
								<span className="text-sm text-gray-400">Last 24h Deposits</span>
							</div>
							<div className="text-3xl font-bold">
								$ {prizeData.lastDeposits.toLocaleString()}
								<span className="text-sm">.00</span>
							</div>
						</div>

						<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
							<div className="flex items-center gap-2 mb-4">
								<span className="text-sm text-gray-400">Total Deposited</span>
							</div>
							<div className="text-3xl font-bold">
								${(prizeData.totalDeposited / 1000000).toFixed(1)}M
							</div>
							<div className="text-sm text-gray-400 mt-1">
								${prizeData.tvl.toLocaleString()} in TVL
							</div>
						</div>

						<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
							<div className="flex items-center gap-2 mb-4">
								<span className="text-sm text-gray-400">Protocol</span>
							</div>
							<div className="text-3xl font-bold">{prizeData.protocol}</div>
							<div className="text-sm text-gray-400 mt-1 flex items-center gap-1">
								<a
									href={`https://${prizeData.protocolUrl}`}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors flex items-center gap-1"
								>
									{prizeData.protocolUrl}
									<ExternalLink className="h-3 w-3" />
								</a>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="lg:col-span-2 bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
							<h3 className="text-lg font-medium mb-6">
								Prize Pool Contributions
							</h3>
							<div className="h-64 flex items-end justify-between gap-2">
								{prizeData.chartData.map((value, i) => (
									<div key={i} className="w-full">
										<div
											className="bg-red-600 rounded-t-sm"
											style={{ height: `${value}%` }}
										></div>
										<div className="text-xs text-gray-400 text-center mt-2">
											{
												[
													"Jan",
													"Feb",
													"Mar",
													"Apr",
													"May",
													"Jun",
													"Jul",
													"Aug",
												][i]
											}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-6">
							<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
								<h3 className="text-lg font-medium mb-4">Bonus Rewards</h3>
								<div className="flex items-baseline gap-2">
									<span className="text-3xl font-bold">{prizeData.apr}%</span>
									<span className="text-gray-400">APR</span>
								</div>
								<div className="mt-4 space-y-2">
									<div className="flex justify-between text-sm">
										<span className="text-gray-400">Distribution</span>
										<span>{prizeData.distribution}</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-gray-400">Next Drop</span>
										<span>{prizeData.nextDrop}</span>
									</div>
								</div>
							</div>

							<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
								<h3 className="text-lg font-medium mb-4">Current Prizes</h3>
								<div className="space-y-4">
									{prizeData.prizes.map((prize, i) => (
										<div key={i} className="flex justify-between">
											<span
												className={i < 3 ? "font-bold" : ""}
												style={{
													fontSize:
														i === 0 ? "1.25rem" : i < 3 ? "1.125rem" : "1rem",
												}}
											>
												$
												{prize.amount.toLocaleString(undefined, {
													minimumFractionDigits: prize.amount < 1 ? 2 : 0,
												})}
											</span>
											<span className="text-gray-400">{prize.frequency}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
						<h3 className="text-lg font-medium mb-4">Recent Winners</h3>
						<table className="w-full">
							<thead>
								<tr className="text-gray-400 text-sm">
									<th className="text-left font-normal pb-2">Winners</th>
									<th className="text-left font-normal pb-2">Date</th>
									<th className="text-left font-normal pb-2">Prize</th>
								</tr>
							</thead>
							<tbody>
								{prizeData.winners.map((winner, i) => (
									<tr key={i} className="border-t border-red-900/10">
										<td className="py-3">{winner.id}</td>
										<td className="py-3">{winner.date}</td>
										<td className="py-3">{winner.prize}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>

			<DepositModal
				isOpen={isDepositModalOpen}
				onClose={() => setIsDepositModalOpen(false)}
			/>

			<WithdrawModal
				isOpen={isWithdrawModalOpen}
				onClose={() => setIsWithdrawModalOpen(false)}
			/>
		</div>
	);
}
