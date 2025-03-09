import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#200707] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="VaultQuest Logo"
                width={40}
                height={40}
                className="rounded-full bg-red-600"
              />
              <span className="text-xl font-bold">VaultQuest</span>
            </div>
            <p className="text-gray-400">A no-loss prize saving protocol built on Starknet.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Protocol</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3A1010] mt-12 pt-8 text-center text-gray-400">
          <p>© 2023 VaultQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

