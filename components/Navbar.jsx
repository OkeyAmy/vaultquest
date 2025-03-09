import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="VaultQuest Logo"
            width={40}
            height={40}
            className="rounded-full bg-red-600"
          />
          <span className="text-xl font-bold">VaultQuest</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="hover:text-red-500 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-red-500 transition-colors">
            How it works
          </Link>
          <Link href="#faq" className="hover:text-red-500 transition-colors">
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white">
            Login
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">Launch App</Button>
        </div>
      </nav>
    </header>
  )
}

