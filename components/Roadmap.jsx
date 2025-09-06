import { CheckCircle, Clock } from "lucide-react"

export default function Roadmap() {
  const phases = [
    {
      title: "Phase 1: Foundation",
      status: "completed",
      timeframe: "Q1-Q2 2023",
      description: "Establishing the core protocol and infrastructure",
      milestones: [
        { name: "Protocol Design & Architecture", completed: true },
        { name: "Smart Contract Development", completed: true },
        { name: "Security Audit & Testing", completed: true },
        { name: "Testnet Deployment", completed: true },
      ],
    },
    {
      title: "Phase 2: Launch",
      status: "completed",
      timeframe: "Q3 2023",
      description: "Public launch and initial growth",
      milestones: [
        { name: "Mainnet Deployment", completed: true },
        { name: "Public Launch", completed: true },
        { name: "Initial Partnerships", completed: true },
        { name: "Community Building", completed: true },
      ],
    },
    {
      title: "Phase 3: Expansion",
      status: "in-progress",
      timeframe: "Q4 2023 - Q1 2024",
      description: "Scaling the protocol and expanding features",
      milestones: [
        { name: "Multi-chain Support", completed: true },
        { name: "Advanced Prize Strategies", completed: true },
        { name: "Governance Implementation", completed: false },
        { name: "Protocol Optimization", completed: false },
      ],
    },
    {
      title: "Phase 4: Ecosystem",
      status: "planned",
      timeframe: "Q2-Q4 2024",
      description: "Building a comprehensive ecosystem",
      milestones: [
        { name: "Developer SDK & API", completed: false },
        { name: "Mobile Application", completed: false },
        { name: "Enterprise Integrations", completed: false },
        { name: "Global Expansion", completed: false },
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Protocol Roadmap</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our strategic plan for building and scaling the VaultQuest protocol
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-8 border border-red-900/20 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border ${
                phase.status === "completed"
                  ? "border-green-600/30 bg-green-900/10"
                  : phase.status === "in-progress"
                    ? "border-yellow-600/30 bg-yellow-900/10"
                    : "border-gray-600/30 bg-gray-900/10"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm px-3 py-1 rounded-full bg-[#1A0505]/50 border border-red-900/20">
                  {phase.timeframe}
                </span>
                {phase.status === "completed" ? (
                  <span className="text-green-500 flex items-center text-sm">
                    <CheckCircle size={16} className="mr-1" /> Complete
                  </span>
                ) : phase.status === "in-progress" ? (
                  <span className="text-yellow-500 flex items-center text-sm">
                    <Clock size={16} className="mr-1" /> In Progress
                  </span>
                ) : (
                  <span className="text-gray-400 flex items-center text-sm">
                    <Clock size={16} className="mr-1" /> Planned
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{phase.description}</p>

              <div className="space-y-3">
                {phase.milestones.map((milestone, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`mt-1 mr-3 ${milestone.completed ? "text-green-500" : "text-gray-500"}`}>
                      {milestone.completed ? <CheckCircle size={16} /> : <Clock size={16} />}
                    </div>
                    <span className={`text-sm ${milestone.completed ? "text-gray-200" : "text-gray-400"}`}>
                      {milestone.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        <div className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-6 border border-red-900/20 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Long-term Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-red-500">2024</h4>
              <p className="text-gray-300 text-sm">
                Establish VaultQuest as the leading prize savings protocol across multiple blockchains with a
                comprehensive ecosystem of tools and integrations.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500">2025</h4>
              <p className="text-gray-300 text-sm">
                Expand to traditional finance through strategic partnerships, bringing prize savings to millions of
                users worldwide through both DeFi and CeFi channels.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-500">2026+</h4>
              <p className="text-gray-300 text-sm">
                Transform global savings behavior by making prize-linked savings the default option for individuals and
                institutions seeking yield on their assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

