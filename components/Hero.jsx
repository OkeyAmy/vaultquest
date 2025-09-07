import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative min-h-[80vh] flex items-center">
      {/* Floating Elements - Desktop Only */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-80 right-64 animate-float-slow">
          <Image
            src="/images/coinsilver.png"
            alt="Protocol Icon"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="absolute bottom-40 left-60 top-20 animate-float">
          <Image
            src="/aval.png"
            alt="Avalanche"
            width={120}
            height={120}
          />
        </div>
        <div className="absolute bottom-40 right-60 top-20 animate-float">
          <Image
            src="/avall.png"
            alt="Avalanche"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute top-80 left-96 animate-float-medium">
          <Image
            src="/images/diamond.png"
            alt="Coin"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Mobile Floating Elements - Smaller and positioned differently */}
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-4 animate-float-slow">
          <Image
            src="/images/coinsilver.png"
            alt="Protocol Icon"
            width={80}
            height={80}
            className="rounded-full opacity-60"
          />
        </div>
        <div className="absolute bottom-32 left-4 animate-float">
          <Image
            src="/aval.png"
            alt="Avalanche"
            width={60}
            height={60}
            className="opacity-60"
          />
        </div>
        <div className="absolute bottom-20 right-8 animate-float">
          <Image
            src="/avall.png"
            alt="Avalanche"
            width={30}
            height={30}
            className="opacity-60"
          />
        </div>
        <div className="absolute top-32 left-8 animate-float-medium">
          <Image
            src="/images/diamond.png"
            alt="Coin"
            width={60}
            height={60}
            className="rounded-full opacity-60"
          />
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          The #1 Protocol <br />
          for Real Adoption
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4">
          The permissionless protocol 86,000 people are using to win by
          saving
        </p>
        <Link href="/app">
          <Button className="bg-red-600 hover:bg-red-700 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full w-full sm:w-auto">
            Launch DApp
          </Button>
        </Link>
      </div>
    </section>
  )
}

