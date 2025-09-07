"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SavingAndWinning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      id: 1,
      title: "Deposit",
      description: "Deposit for a chance to win prizes.",
      image: "/images/vault.png", 
      rotate: -25,
    },
    {
      id: 2,
      title: "Win Prizes",
      description: "Yield from deposit fund prize",
      image: "/images/percentage.png",
      rotate: 0,
    },
    {
      id: 3,
      title: "Withdraw",
      description: "Withdraw your deposit and prizes.",
      image: "/images/envelop.png", 
      rotate: 25,
    },
  ];

  return (
		<div className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16">
			<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 md:mb-20 text-center px-4">
				VaultQuest is for Saving & Winning
			</h1>

			{/* Desktop 3D Cards */}
			<div
				ref={ref}
				className="hidden lg:block relative w-full max-w-[1200px] h-[400px] flex items-center justify-center"
			>
				<div className="relative w-[300px] h-[400px] perspective-[1000px]">
					{cards.map((card, index) => (
						<motion.div
							key={card.id}
							className="absolute top-0 left-0 w-[300px] h-[400px] rounded-2xl bg-[#2A0A0A] 
                         shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm 
                         flex flex-col items-center justify-center p-6 overflow-hidden origin-[60%_180%]"
							initial={{
								rotateY: 0,
								rotateZ: 0,
								scale: 0.9,
								opacity: 0,
							}}
							animate={
								isInView
									? {
											rotateY: 0,
											rotateZ: card.rotate,
											scale: 1,
											opacity: 1,
											x: card.rotate * 3, // Slight horizontal offset
											transition: {
												duration: 1,
												delay: index * 0.2,
												ease: [0.23, 1, 0.32, 1], // Smooth animation
											},
									  }
									: {}
							}
							style={{
								zIndex: index === 1 ? 3 : 1,
							}}
						>
							{/* Image inside the card */}
							<div className="relative w-full h-2/3 rounded-t-2xl overflow-hidden">
								<Image
									src={card.image}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-2xl"
								/>
							</div>

							{/* Text Content */}
							<div className="p-4 text-center">
								<h2 className="text-2xl font-bold text-white mb-2">
									{card.title}
								</h2>
								<p className="text-gray-400">{card.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Mobile/Tablet Stacked Cards */}
			<div className="lg:hidden w-full max-w-md mx-auto px-4">
				<div className="space-y-6">
					{cards.map((card, index) => (
						<motion.div
							key={card.id}
							className="w-full h-48 sm:h-56 rounded-2xl bg-[#2A0A0A] 
                         shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-sm 
                         flex items-center p-4 sm:p-6 overflow-hidden"
							initial={{
								opacity: 0,
								y: 50,
							}}
							animate={
								isInView
									? {
											opacity: 1,
											y: 0,
											transition: {
												duration: 0.6,
												delay: index * 0.2,
												ease: [0.23, 1, 0.32, 1],
											},
									  }
									: {}
							}
						>
							{/* Image */}
							<div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
								<Image
									src={card.image}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className="rounded-xl"
								/>
							</div>

							{/* Text Content */}
							<div className="ml-4 sm:ml-6 flex-1">
								<h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
									{card.title}
								</h2>
								<p className="text-sm sm:text-base text-gray-400">
									{card.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
