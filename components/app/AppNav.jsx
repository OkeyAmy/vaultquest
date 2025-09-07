"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AvaxConnectButton } from "../../AvaxConnectButton";
import { useState } from "react";

export default function AppNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/app/prizes", label: "Prizes" },
    { href: "/app/vault", label: "Vault" },
    { href: "/app/account", label: "Account" },
  ];

  return (
    <nav className="bg-[#1A0505]/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-900/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="VaultQuest Logo"
              width={32}
              height={32}
              className="rounded-full sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold">
              Vault<span className="text-red-600">Quest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Connect Button */}
          <div className="hidden md:block">
            <AvaxConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-red-900/20 py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 transition-colors ${
                    pathname === item.href
                      ? "text-red-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-red-900/20">
                <AvaxConnectButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
