import Image from "next/image"

export default function SavingAndWinning() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">WinSave is for Saving & Winning</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Deposit</h3>
          <div className="bg-[#2A0A0A] rounded-xl p-6 h-48 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Deposit"
              width={100}
              height={100}
              className="opacity-80"
            />
          </div>
          <p className="mt-4 text-gray-300">Deposit funds to earn yield</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Win Prizes</h3>
          <div className="bg-[#2A0A0A] rounded-xl p-6 h-48 flex items-center justify-center">
            <div className="relative">
              <div className="text-yellow-500 text-7xl font-bold">%</div>
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Trophy"
                width={80}
                height={80}
                className="absolute -top-10 -right-10"
              />
            </div>
          </div>
          <p className="mt-4 text-gray-300">100% of interest is paid as prizes</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Never Lose</h3>
          <div className="bg-[#2A0A0A] rounded-xl p-6 h-48 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Shield"
              width={100}
              height={100}
              className="opacity-80"
            />
          </div>
          <p className="mt-4 text-gray-300">Withdraw your deposit anytime</p>
        </div>
      </div>
    </section>
  )
}

