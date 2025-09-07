import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24 relative min-h-[80vh] flex items-center">
      {/* Floating Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block">
        <div className="absolute top-40 sm:top-80 right-16 sm:right-64 animate-float-slow">
          <Image
            src="/images/coinsilver.png"
            alt="Protocol Icon"
            width={200}
            height={200}
            className="rounded-full sm:w-[300px] sm:h-[300px]"
          />
        </div>
        <div className="absolute bottom-20 sm:bottom-40 left-16 sm:left-60 top-10 sm:top-20 animate-float">
          <Image
            src="/aval.png"
            alt="Avalanche"
            width={80}
            height={80}
            className="sm:w-[120px] sm:h-[120px]"
          />
        </div>
        <div className="absolute bottom-20 sm:bottom-40 right-16 sm:right-60 top-10 sm:top-20 animate-float">
          <Image
            src="/avall.png"
            alt="Avalanche"
            width={40}
            height={40}
            className="sm:w-[50px] sm:h-[50px]"
          />
        </div>
        <div className="absolute top-40 sm:top-80 left-32 sm:left-96 animate-float-medium">
          <Image
            src="/images/diamond.png"
            alt="Coin"
            width={100}
            height={100}
            className="rounded-full sm:w-[150px] sm:h-[150px]"
          />
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2">
          The #1 Protocol <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          for Real Adoption
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          The permissionless protocol 86,000 people are using to win by saving
        </p>
        <Link href="/app">
          <Button className="bg-red-600 hover:bg-red-700 text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-full w-full sm:w-auto min-h-[48px] touch-manipulation">
            Launch DApp
          </Button>
        </Link>
      </div>
    </section>
  )
}

