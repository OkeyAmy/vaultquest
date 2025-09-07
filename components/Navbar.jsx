"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="container mx-auto px-4 py-4 sm:py-6 z-10 relative">
      <nav className="flex items-center justify-between backdrop-blur-sm bg-[#1A0505]/70 rounded-xl p-3 sm:p-4 border border-red-900/20">
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
          <Link href="/" className="text-red-500 hover:text-red-400 transition-colors">
            Home
          </Link>
          <Link
            href="/winners"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Winners
          </Link>
          <Link
            href="/doc"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Doc
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/app">
            <Button className="bg-red-600 hover:bg-red-700 text-sm sm:text-base px-4 sm:px-6 py-2">
              Launch DApp
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-sm bg-[#1A0505]/90 rounded-xl border border-red-900/20 shadow-lg z-50">
          <div className="p-4 space-y-4">
            <Link
              href="/"
              className="block text-red-500 hover:text-red-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/winners"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Winners
            </Link>
            <Link
              href="/doc"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Doc
            </Link>
            <div className="pt-2 border-t border-red-900/20">
              <Link href="/app" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Launch DApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
