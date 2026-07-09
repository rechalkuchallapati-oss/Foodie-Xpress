import type { ReactNode } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout