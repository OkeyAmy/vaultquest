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
      description: "Deposit for a chance to win",
      image: "/images/envelop.png",
      rotate: -20,
    },
    {
      id: 2,
      title: "Win Prizes",
      description: "Yield from deposits fund prizes",
      image: "/images/percentage.png",
      rotate: 0,
    },
    {
      id: 3,
      title: "Withdraw",
      description: "No fees, withdraw any time",
      image: "/images/vault.png",
      rotate: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#FD181499] to-black flex flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-16">
      {/* Desktop Version */}
      <div className="hidden lg:block w-full">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          VaultQuest is for Saving & Winning
        </h1>

        <div
          ref={ref}
          className="relative w-full max-w-[900px] mx-auto h-[500px] flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute w-[280px] h-[380px] rounded-2xl bg-[#2C1211] 
                           shadow-2xl overflow-hidden"
                initial={{
                  rotateZ: 0,
                  scale: 0.8,
                  opacity: 0,
                  y: 50,
                }}
                animate={
                  isInView
                    ? {
                        rotateZ: card.rotate,
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        x: card.rotate * 4,
                        transition: {
                          duration: 0.8,
                          delay: index * 0.2,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      }
                    : {}
                }
                style={{
                  zIndex: index === 1 ? 3 : 2,
                  transformOrigin: "center bottom",
                }}
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <h2 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {card.description}
                  </p>
                </div>

                {/* Card Image */}
                <div className="flex-1 flex items-center justify-center px-6 pb-6">
                  <div className="w-64 h-64">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version */}
      <div className="lg:hidden w-full max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center leading-tight">
          VaultQuest is for Saving & Winning
        </h1>

        <div className="space-y-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="w-full h-48 sm:h-56 rounded-2xl bg-[#2C1211] 
                         shadow-xl overflow-hidden flex items-center p-4 sm:p-6"
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
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Text Content */}
              <div className="ml-4 sm:ml-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
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
