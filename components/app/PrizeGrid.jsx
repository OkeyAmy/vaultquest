import Link from "next/link"
import { SolanaIcon } from "@/components/icons/SolanaIcon"

export default function PrizeGrid() {
  const prizes = [
    {
      id: 1,
      name: "Grand Prize",
      amount: 23087.0,
      sol: 0.23,
    },
    {
      id: 2,
      name: "Weekly Prize",
      amount: 12500.0,
      sol: 0.15,
    },
    {
      id: 3,
      name: "Daily Prize",
      amount: 5000.0,
      sol: 0.08,
    },
    {
      id: 4,
      name: "Hourly Prize",
      amount: 1000.0,
      sol: 0.02,
    },
    {
      id: 5,
      name: "Community Prize",
      amount: 7500.0,
      sol: 0.12,
    },
    {
      id: 6,
      name: "Special Prize",
      amount: 15000.0,
      sol: 0.18,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {prizes.map((prize) => (
        <Link
          key={prize.id}
          href={`/app/prize/${prize.id}`}
          className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 hover:border-red-500/50 transition-colors shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">{prize.name}</span>
            <SolanaIcon className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold mb-1">
            ${prize.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
          <div className="text-gray-400 text-sm mb-4">+ {prize.sol} SOL</div>
          <div className="text-red-500 text-sm hover:text-red-400 transition-colors">Click to view</div>
        </Link>
      ))}
    </div>
  )
}

