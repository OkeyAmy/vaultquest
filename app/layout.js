import "./globals.css";
import { Inter } from "next/font/google";
import {Provider} from "@/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VaultQuest - No-Loss Prize Savings Protocol",
  icon: "/images/logo.png",
  description:
    "Save & win with no-loss prize savings. Deposit funds into prize vaults and stand a chance to win prizes without risking your deposit.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <Provider>
      <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}

import "./globals.css";
