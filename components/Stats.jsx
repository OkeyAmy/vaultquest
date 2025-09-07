export default function Stats() {
  return (
    <section className="bg-[#200707] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              $5.1M
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Total Prizes Awarded
            </p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              $21M
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Saved With SaveWin
            </p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              86K+
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Unique Wallets
            </p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              0
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              Losses
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

