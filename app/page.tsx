import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="VaultQuest Logo"
              width={40}
              height={40}
              className="rounded-full bg-[#7B3FE4]"
            />
            <span className="text-xl font-bold">VaultQuest</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="hover:text-[#7B3FE4] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-[#7B3FE4] transition-colors">
              How it works
            </Link>
            <Link href="#faq" className="hover:text-[#7B3FE4] transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#7B3FE4] text-[#7B3FE4] hover:bg-[#7B3FE4] hover:text-white">
              Login
            </Button>
            <Button className="bg-[#7B3FE4] hover:bg-[#6A35C2]">Launch App</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Save & Win with <span className="text-[#7B3FE4]">No-Loss</span> Prize Savings
            </h1>
            <p className="text-lg text-gray-300">
              Deposit funds into prize vaults and stand a chance to win prizes through regular draws without risking
              your deposit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#7B3FE4] hover:bg-[#6A35C2] text-lg py-6 px-8">Get Started</Button>
              <Button
                variant="outline"
                className="border-[#7B3FE4] text-[#7B3FE4] hover:bg-[#7B3FE4] hover:text-white text-lg py-6 px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-full h-full blur-3xl opacity-30 bg-[#7B3FE4] rounded-full"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="VaultQuest Illustration"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#111111] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[#1A1A1A]">
              <p className="text-gray-400 mb-2">Total Value Locked</p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#7B3FE4]">$10.5M+</h3>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#1A1A1A]">
              <p className="text-gray-400 mb-2">Total Users</p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#7B3FE4]">25,000+</h3>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#1A1A1A]">
              <p className="text-gray-400 mb-2">Total Prizes Awarded</p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#7B3FE4]">$850K+</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose VaultQuest</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our protocol gives users a chance at a large upside without risking their deposit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333] hover:border-[#7B3FE4] transition-colors">
            <div className="w-12 h-12 bg-[#7B3FE4] rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9H9V15H15V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">No-Loss Principle</h3>
            <p className="text-gray-300">
              Your deposits are always safe. You can withdraw your full deposit at any time without penalties.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333] hover:border-[#7B3FE4] transition-colors">
            <div className="w-12 h-12 bg-[#7B3FE4] rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Yield Optimization</h3>
            <p className="text-gray-300">
              Your deposits are invested in top DeFi protocols to generate maximum yield for prizes.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333] hover:border-[#7B3FE4] transition-colors">
            <div className="w-12 h-12 bg-[#7B3FE4] rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Prize Draws</h3>
            <p className="text-gray-300">
              Regular prize draws give you multiple chances to win big without any risk to your principal.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[#111111] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How VaultQuest Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our protocol uses tokenized vaults (ERC4626) to generate yield and distribute prizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7B3FE4] rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Deposit</h3>
              <p className="text-gray-300">
                Deposit your funds into one of our prize vaults using your preferred token.
              </p>
            </div>

            <div className="relative p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7B3FE4] rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Tickets</h3>
              <p className="text-gray-300">
                Your deposit earns you tickets for the prize draws. The more you deposit, the higher your chances.
              </p>
            </div>

            <div className="relative p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7B3FE4] rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Win Prizes</h3>
              <p className="text-gray-300">
                Participate in daily prize draws where the yield from all deposits is awarded as prizes.
              </p>
            </div>

            <div className="relative p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#7B3FE4] rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Withdraw Anytime</h3>
              <p className="text-gray-300">You can withdraw your full deposit at any time without penalties or fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Get answers to the most common questions about VaultQuest.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold">What is VaultQuest?</h3>
              <ChevronDown className="text-[#7B3FE4]" />
            </div>
            <div className="mt-4 text-gray-300">
              VaultQuest is a no-loss prize saving protocol where users deposit funds into prize vaults and stand a
              chance to win prizes through regular draws without risking their deposit.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold">How are prizes generated?</h3>
              <ChevronDown className="text-[#7B3FE4]" />
            </div>
            <div className="mt-4 text-gray-300">
              Prizes are generated from the yield earned by investing user deposits in various DeFi protocols. The yield
              is collected and distributed as prizes through regular draws.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold">Can I lose my deposit?</h3>
              <ChevronDown className="text-[#7B3FE4]" />
            </div>
            <div className="mt-4 text-gray-300">
              No, VaultQuest is a no-loss protocol. Your principal deposit is always safe and can be withdrawn at any
              time without penalties.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#333333]">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-xl font-bold">How are winners selected?</h3>
              <ChevronDown className="text-[#7B3FE4]" />
            </div>
            <div className="mt-4 text-gray-300">
              Winners are selected randomly through a transparent and verifiable process. The more you deposit, the
              higher your chances of winning.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-[#7B3FE4] to-[#9969F0]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Saving & Winning?</h2>
            <p className="text-xl mb-8">Join thousands of users who are already saving and winning with VaultQuest.</p>
            <Button className="bg-white text-[#7B3FE4] hover:bg-gray-100 text-lg py-6 px-8">
              Launch App <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="VaultQuest Logo"
                width={40}
                height={40}
                className="rounded-full bg-[#7B3FE4]"
              />
              <span className="text-xl font-bold">VaultQuest</span>
            </div>
            <p className="text-gray-400">A no-loss prize saving protocol built on Starknet.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Protocol</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#7B3FE4]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] mt-12 pt-8 text-center text-gray-400">
          <p>© 2023 VaultQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

