export default function Stats() {
  return (
    <section className="bg-[#200707] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">$5.1 Million</h3>
            <p className="text-gray-400">Total Value Locked</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">$21 Million</h3>
            <p className="text-gray-400">Total Prizes</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">86,000+</h3>
            <p className="text-gray-400">Users</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">0</h3>
            <p className="text-gray-400">Exploits</p>
          </div>
        </div>
      </div>
    </section>
  )
}

