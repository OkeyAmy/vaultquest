import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
		<footer className="bg-[#200707] py-8 md:py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
					<div className="sm:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<Image
								src="/images/logo.png"
								alt="VaultQuest Logo"
								width={40}
								height={40}
								className="rounded-full"
							/>
							<span className="text-lg md:text-xl font-bold">
								Vault<span className="text-red-600">Quest</span>
							</span>
						</div>
						<p className="text-gray-400 text-sm md:text-base">
							A no-loss prize saving protocol built on Starknet.
						</p>
					</div>

					<div>
						<h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Protocol</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									How it works
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Tokenomics
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Security
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Documentation
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Community</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Discord
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Twitter
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Telegram
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-400 hover:text-red-500 text-sm md:text-base">
									Disclaimer
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-[#3A1010] mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400">
					<p className="text-sm md:text-base">© 2023 VaultQuest. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

