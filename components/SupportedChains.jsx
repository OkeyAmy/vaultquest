"use client"

import { useState } from "react"
import Image from "next/image"

export default function SupportedChains() {
  const [isPaused, setIsPaused] = useState(false)

  // Blockchain data with logos and names
  const blockchains = [
    {
      name: "Solana",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-purple-500 to-green-500",
      description: "High-performance blockchain with low transaction fees",
    },
    {
      name: "Ethereum",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      description: "The leading smart contract platform",
    },
    {
      name: "Polygon",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-purple-600 to-purple-400",
      description: "Ethereum scaling solution with fast transactions",
    },
    {
      name: "Starknet",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
      description: "Layer 2 scaling solution using ZK-rollups",
    },
    {
      name: "Arbitrum",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-blue-700 to-indigo-600",
      description: "Optimistic rollup solution for Ethereum",
    },
    {
      name: "Optimism",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-red-500 to-red-600",
      description: "Optimistic rollup scaling solution",
    },
    {
      name: "Avalanche",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-red-600 to-red-500",
      description: "High-throughput, low-latency blockchain",
    },
    {
      name: "Base",
      logo: "/placeholder.svg?height=40&width=40",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      description: "Coinbase-backed Ethereum L2 solution",
    },
  ]

  return (
    <div className="py-8 overflow-hidden bg-[#1A0808]/30 backdrop-blur-sm border-y border-red-900/20">
      <div className="container mx-auto px-4 mb-4">
        <h3 className="text-center text-xl font-bold">Supported Blockchains</h3>
      </div>

      <div
        className="relative overflow-hidden marquee-mask"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`marquee flex py-4 gap-8 ${isPaused ? "paused" : ""}`}>
          {/* First set of items */}
          {blockchains.map((blockchain, index) => (
            <div
              key={`${blockchain.name}-${index}`}
              className="flex flex-col items-center justify-center bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-4 border border-red-900/20 shadow-lg min-w-[160px] transition-all duration-300 hover:scale-105 hover:border-red-500/50"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${blockchain.color}`}>
                <Image
                  src={blockchain.logo || "/placeholder.svg"}
                  alt={blockchain.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="font-medium">{blockchain.name}</span>
              <p className="text-xs text-gray-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {blockchain.description}
              </p>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {blockchains.map((blockchain, index) => (
            <div
              key={`${blockchain.name}-duplicate-${index}`}
              className="flex flex-col items-center justify-center bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-4 border border-red-900/20 shadow-lg min-w-[160px] transition-all duration-300 hover:scale-105 hover:border-red-500/50"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${blockchain.color}`}>
                <Image
                  src={blockchain.logo || "/placeholder.svg"}
                  alt={blockchain.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="font-medium">{blockchain.name}</span>
              <p className="text-xs text-gray-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {blockchain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

