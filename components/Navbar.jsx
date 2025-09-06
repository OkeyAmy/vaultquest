import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
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
        <Link href="/app">
          <Button className="bg-red-600 hover:bg-red-700">Launch DApp</Button>
        </Link>
      </nav>
    </header>
  );
}
