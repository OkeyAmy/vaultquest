"use client"

import { useState } from "react"
import Link from "next/link"
import AppNav from "@/components/app/AppNav"
import { Button } from "@/components/ui/button"
import PrizeGrid from "@/components/app/PrizeGrid"

export default function AppPage() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnectWallet = () => {
    setIsConnected(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0505] to-[#2D0A0A] text-white">
      <AppNav />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Save your deposit.</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Win up to <span className="text-red-500">$362,497</span>
          </h2>
          {!isConnected ? (
            <Button
              className="bg-red-600/90 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm shadow-lg"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app/prizes">
                <Button className="bg-red-600/90 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm shadow-lg">
                  View All Prizes
                </Button>
              </Link>
              <Link href="/app/vault">
                <Button className="bg-transparent border border-red-600/70 hover:bg-red-600/10 text-white font-bold py-3 px-8 rounded-full backdrop-blur-sm shadow-lg">
                  Manage Vaults
                </Button>
              </Link>
            </div>
          )}
        </div>
        <PrizeGrid />
      </main>
    </div>
  )
}

