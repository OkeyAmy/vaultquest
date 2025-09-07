"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6 z-10 relative">
      <nav className="flex items-center justify-between backdrop-blur-sm bg-[#1A0505]/70 rounded-xl p-4 border border-red-900/20">
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-red-500">
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
            <Button className="bg-red-600 hover:bg-red-700">Launch DApp</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-sm bg-[#1A0505]/90 rounded-xl border border-red-900/20 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className="text-red-500 py-2 px-4 rounded-lg hover:bg-red-600/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/winners"
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-red-600/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Winners
            </Link>
            <Link
              href="/doc"
              className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-red-600/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Doc
            </Link>
            <div className="pt-2 border-t border-red-900/20">
              <Link href="/app" onClick={() => setIsMenuOpen(false)}>
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
