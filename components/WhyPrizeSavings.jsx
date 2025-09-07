import Image from "next/image"

export default function WhyPrizeSavings() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">Why Prize Savings?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        <div className="bg-[#2A0A0A] rounded-xl p-6 sm:p-8 order-2 md:order-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-red-500">The Mission:</h3>
          <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Financial freedom for all</h4>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Our goal is to democratize access to financial tools and create opportunities for everyone to build wealth,
            regardless of their background or starting point.
          </p>
        </div>

        <div className="bg-[#2A0A0A] rounded-xl p-6 sm:p-8 flex items-center justify-center order-1 md:order-2">
          <div className="relative">
            <Image
              src="/images/shield.png"
              alt="Shield with Chart"
              width={150}
              height={150}
              className="opacity-80 sm:w-[200px] sm:h-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

