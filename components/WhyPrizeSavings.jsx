import Image from "next/image"

export default function WhyPrizeSavings() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Prize Savings?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-[#2A0A0A] rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-red-500">The Mission:</h3>
          <h4 className="text-xl font-bold mb-4">Financial freedom for all</h4>
          <p className="text-gray-300">
            Our goal is to democratize access to financial tools and create opportunities for everyone to build wealth,
            regardless of their background or starting point.
          </p>
        </div>

        <div className="bg-[#2A0A0A] rounded-xl p-8 flex items-center justify-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Shield with Chart"
              width={200}
              height={200}
              className="opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

