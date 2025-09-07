"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className="w-full px-4 py-4 md:py-6 z-50 relative">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-[#1A0505]/70 rounded-xl p-3 md:p-4 border border-red-900/20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="VaultQuest Logo"
              width={32}
              height={32}
              className="rounded-full md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl font-bold">
              Vault<span className="text-red-600">Quest</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              <Button className="bg-red-600 hover:bg-red-700 text-sm md:text-base">
                Launch DApp
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-red-600/20 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-sm bg-[#1A0505]/95 rounded-xl border border-red-900/20 shadow-xl z-50">
            <div className="flex flex-col p-4 space-y-3">
              <Link 
                href="/" 
                className="text-red-500 py-3 px-4 rounded-lg hover:bg-red-600/10 transition-colors text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/winners"
                className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-red-600/10 transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Winners
              </Link>
              <Link
                href="/doc"
                className="text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-red-600/10 transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Doc
              </Link>
              <div className="pt-3 border-t border-red-900/20">
                <Link href="/app" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-red-600 hover:bg-red-700 py-3 text-base font-medium">
                    Launch DApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
