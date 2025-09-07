"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { AvaxConnectButton } from "../../AvaxConnectButton";

export default function AppNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#1A0505]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-900/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="VaultQuest Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">
              Vault<span className="text-red-600">Quest</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/app/prizes"
              className={`transition-colors ${
                pathname === "/app/prizes"
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Prizes
            </Link>
            <Link
              href="/app/vault"
              className={`transition-colors ${
                pathname === "/app/vault"
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Vault
            </Link>
            <Link
              href="/app/account"
              className={`transition-colors ${
                pathname === "/app/account"
                  ? "text-red-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Account
            </Link>
          </div>
          <div>
            <AvaxConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
