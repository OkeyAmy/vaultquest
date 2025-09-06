import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
              {/* Floating Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-80 right-64  animate-float-slow">
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
                    src="/images/cosmo.png"
                    alt="Diamond"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="absolute bottom-40 right-60 top-20 animate-float">
                  <Image
                    src="/images/cosmo.png"
                    alt="Diamond"
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
    
              <div className="text-center max-w-4xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  The #1 Protocol <br />
                  for Real Adoption
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  The permissionless protocol 86,000 people are using to win by
                  saving
                </p>
                <Link href="/app">
                  <Button className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8 rounded-full">
                    Launch DApp
                  </Button>
                </Link>
              </div>
            </section>
      )
}

