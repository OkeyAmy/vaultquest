import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "VaultQuest - No-Loss Prize Savings Protocol",
  icon: "/images/logo.png",
  description:
    "Save & win with no-loss prize savings. Deposit funds into prize vaults and stand a chance to win prizes without risking your deposit.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'