import type { ReactNode } from "react"
import Navbar from "../components/layout/Navbar"
interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-page">
      <div className="bg-brand-plum p-5 font-bold text-white">
        Layout is working
      </div>

      <main>{children}</main>
    </div>
  )
}

export default MainLayout