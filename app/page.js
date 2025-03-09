import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SavingAndWinning from "@/components/SavingAndWinning"
import WhyPrizeSavings from "@/components/WhyPrizeSavings"
import Stats from "@/components/Stats"
import Footer from "@/components/Footer"
import Roadmap from "@/components/Roadmap"
import Technology from "@/components/Technology"
import FAQ from "@/components/FAQ"
import GetInvolved from "@/components/GetInvolved"
import SupportedChains from "@/components/SupportedChains"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0505] to-[#2D0A0A] text-white">
      <header className="container mx-auto px-4 py-6 z-10 relative">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-[#1A0505]/70 rounded-xl p-4 border border-red-900/20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="VaultQuest Logo"
              width={40}
              height={40}
              className="rounded-full bg-red-600"
            />
            <span className="text-xl font-bold">VaultQuest</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-red-500">
              Home
            </Link>
            <Link href="/winners" className="text-gray-300 hover:text-white transition-colors">
              Winners
            </Link>
            <Link href="/doc" className="text-gray-300 hover:text-white transition-colors">
              Doc
            </Link>
          </div>
          <Link href="/app">
            <Button className="bg-red-600 hover:bg-red-700">Launch DApp</Button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-24 relative">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-20 right-1/4 animate-float-slow">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Protocol Icon"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-40 left-1/4 animate-float">
              <Image src="/placeholder.svg?height=120&width=120" alt="Diamond" width={120} height={120} />
            </div>
            <div className="absolute top-1/3 right-1/6 animate-float-medium">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Coin"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The #1 Protocol <br />
              for Real Adoption
              <span className="inline-block ml-2 text-blue-400">◆</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              The permissionless protocol 86,000 people are using to win by saving
            </p>
            <Link href="/app">
              <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 rounded-full">Launch DApp</Button>
            </Link>
          </div>
        </section>

        <Stats />
        <SupportedChains />
        <SavingAndWinning />
        <WhyPrizeSavings />
        <Technology />
        <Roadmap />
        <GetInvolved />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

