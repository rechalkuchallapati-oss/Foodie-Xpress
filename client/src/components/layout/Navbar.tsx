function Navbar() {
  return (
    <header className="border-b border-soft-border bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <h1 className="text-2xl font-black text-ink">
          Foodie<span className="text-brand-coral">Xpress</span>
        </h1>

        <button className="rounded-full bg-brand-coral px-5 py-2.5 font-semibold text-white">
          Sign In
        </button>
      </nav>
    </header>
  )
}

export default Navbar