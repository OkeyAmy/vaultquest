import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
		<footer className="bg-[#200707] py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					<div className="col-span-2 sm:col-span-2 lg:col-span-1">
						<div className="flex items-center gap-2 mb-3 sm:mb-4">
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
						</div>
						<p className="text-sm sm:text-base text-gray-400 leading-relaxed">
							A no-loss prize saving protocol built on Starknet.
						</p>
					</div>

					<div>
						<h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Protocol</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									How it works
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Tokenomics
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Security
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Documentation
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Community</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Discord
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Twitter
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Telegram
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-red-500 transition-colors block py-1">
									Disclaimer
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-[#3A1010] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
					<p className="text-sm sm:text-base">© 2023 VaultQuest. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

