import "../globals.css"

export const metadata = {
  title: "VaultQuest - DApp",
  description: "Save & win with no-loss prize savings",
}

export default function AppLayout({ children }) {
  return <div className="dark">{children}</div>
}

