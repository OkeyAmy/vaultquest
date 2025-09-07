import Link from "next/link";
import Image from "next/image";

export default function PrizeGrid() {
  const prizes = [
    {
      id: 1,
      name: "Grand Prize",
      amount: 23087.0,
      atom: 0.23,
    },
    {
      id: 2,
      name: "Weekly Prize",
      amount: 12500.0,
      atom: 0.15,
    },
    {
      id: 3,
      name: "Daily Prize",
      amount: 5000.0,
      atom: 0.08,
    },
    {
      id: 4,
      name: "Hourly Prize",
      amount: 1000.0,
      atom: 0.02,
    },
    {
      id: 5,
      name: "Community Prize",
      amount: 7500.0,
      atom: 0.12,
    },
    {
      id: 6,
      name: "Special Prize",
      amount: 15000.0,
      atom: 0.18,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
      {prizes.map((prize) => (
        <Link
          key={prize.id}
          href={`/app/prize/${prize.id}`}
          className="bg-[#1A0808]/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-900/20 hover:border-red-500/50 transition-colors shadow-lg min-h-[140px] sm:min-h-[160px] flex flex-col justify-between touch-manipulation"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-sm sm:text-base text-gray-400 font-medium">
              {prize.name}
            </span>
            <Image
              height={24}
              width={24}
              alt="avax"
              src="/images/avax.png"
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
          </div>
          <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-white">
            $
            {prize.amount.toLocaleString("en-US", { 
              minimumFractionDigits: 0,
              maximumFractionDigits: 0 
            })}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            + {prize.atom} AVAX
          </div>
          <div className="text-red-500 text-xs sm:text-sm hover:text-red-400 transition-colors font-medium">
            Tap to view →
          </div>
        </Link>
      ))}
    </div>
  );
}
