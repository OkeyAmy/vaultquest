import Image from "next/image"

export default function Technology() {
  const technologies = [
		{
			name: "ATOM",
			description:
				" a revolutionary ecosystem within the Cosmos network, comprising a collection of partially sovereign blockchains.",
			icon: "/images/avax.png",
		},
		{
			name: "CosmosSDK",
			description:
				"the first of many interconnected blockchains powered by the interchain stack: CometBFT, CosmosSDK, and IBC",
			icon: "/images/cosmo.png",
		},
    {
      name: "Next.js",
      description: "A React framework that enables server-side rendering and static website generation for fast performance.",
      icon: "/images/nextjs.png",
    },
    {
      name: "The Atom Economic Zone (AEZ)",
      description:
        "Leveraging the power of ATOM to create innovative economic models that drive blockchain adoption.",
      icon: "/images/aeze.png",
    },
	];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Built with cutting-edge blockchain technology to ensure security, transparency, and efficiency
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg hover:border-red-500/50 transition-all"
          >
            {/* <div className="flex justify-center mb-4">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div> */}
            <h3 className="text-xl font-bold text-center mb-2">{tech.name}</h3>
            <p className="text-gray-300 text-center">{tech.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-8 border border-red-900/20 shadow-lg max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Architecture Overview</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/architecture.svg"
              alt="Architecture Diagram"
              width={500}
              height={300}
              className="rounded-lg w-full"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-300">
              VaultQuest uses a modular architecture with separate components for vault management, prize distribution,
              and user interfaces.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Smart contracts handle deposits, withdrawals, and yield generation</li>
              <li>Prize distribution is fully automated and verifiably random</li>
              <li>User funds are secured through multi-layered security protocols</li>
              <li>All transactions are transparent and auditable on-chain</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

