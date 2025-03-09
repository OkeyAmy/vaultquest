import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      {/* Floating elements */}
      <div className="absolute top-20 right-1/4 animate-float-slow">
        <Image src="/placeholder.svg?height=60&width=60" alt="Diamond" width={60} height={60} className="opacity-80" />
      </div>
      <div className="absolute bottom-10 left-1/4 animate-float">
        <Image src="/placeholder.svg?height=80&width=80" alt="Coin" width={80} height={80} className="opacity-80" />
      </div>
      <div className="absolute top-40 right-10 animate-float-medium">
        <Image src="/placeholder.svg?height=70&width=70" alt="Dollar" width={70} height={70} className="opacity-80" />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-blue-400">◆</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          The #1 Protocol <br />
          for Real Adoption
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Our protocol gives users a chance at a large upside without risking their deposit.
        </p>
        <div className="flex justify-center">
          <Link href="/app">
            <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 rounded-full">Launch App</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

