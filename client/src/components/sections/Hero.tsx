import {
  ArrowRight,
  Clock3,
  MapPin,
  Search,
  Sparkles,
  Star,
} from "lucide-react"

const cravingChips = [
  "🍕 Pizza",
  "🍛 Biryani",
  "🍔 Burgers",
  "🥗 Healthy",
]

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-brand-coral/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-brand-berry/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-white/70 px-4 py-2 text-sm font-bold text-brand-berry shadow-sm backdrop-blur">
            <Sparkles size={16} />
            Your next craving starts here
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
            Don't just order food.
            <span className="block bg-gradient-to-r from-brand-coral via-brand-orange to-brand-berry bg-clip-text text-transparent">
              Order your mood.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Discover restaurants, explore new flavours, and find exactly what
            fits your moment—all from one expressive food experience.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-2xl rounded-[24px] border border-soft-border bg-white/80 p-2 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="flex items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm font-semibold text-ink transition hover:bg-surface-warm">
                <MapPin size={18} className="text-brand-coral" />
                Hyderabad
              </button>

              <div className="hidden w-px bg-soft-border sm:block" />

              <div className="flex flex-1 items-center gap-3 px-4">
                <Search size={19} className="text-muted" />

                <input
                  type="text"
                  placeholder="Search biryani, pizza, desserts..."
                  className="w-full bg-transparent py-3 text-sm text-ink outline-none placeholder:text-muted"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-2xl bg-brand-coral px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Find Food
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          {/* Craving Chips */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-muted">
              Craving:
            </span>

            {cravingChips.map((item) => (
              <button
                key={item}
                className="rounded-full border border-soft-border bg-white/60 px-4 py-2 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:border-brand-coral/40 hover:bg-white hover:shadow-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden min-h-[600px] lg:block">
          <div className="absolute inset-10 rounded-[48px] bg-gradient-to-br from-brand-orange/20 via-brand-gold/20 to-brand-berry/15 blur-sm" />

          <div className="absolute left-1/2 top-1/2 flex h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/40 shadow-2xl backdrop-blur-xl">
            <div className="flex h-[330px] w-[330px] items-center justify-center rounded-full bg-gradient-to-br from-surface-warm to-surface-pink shadow-inner">
              <span className="text-center text-8xl">🍜</span>
            </div>
          </div>

          {/* Floating Rating Card */}
          <div className="absolute left-0 top-24 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold/30">
                <Star
                  size={20}
                  className="fill-brand-gold text-brand-gold"
                />
              </div>

              <div>
                <p className="font-black text-ink">4.9 Rating</p>
                <p className="text-xs text-muted">Loved by foodies</p>
              </div>
            </div>
          </div>

          {/* Floating Delivery Card */}
          <div className="absolute bottom-24 right-0 rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-coral/15">
                <Clock3 size={20} className="text-brand-coral" />
              </div>

              <div>
                <p className="font-black text-ink">25 min</p>
                <p className="text-xs text-muted">Lightning delivery</p>
              </div>
            </div>
          </div>

          <div className="absolute right-10 top-16 rotate-12 text-6xl drop-shadow-lg">
            🍕
          </div>

          <div className="absolute bottom-14 left-14 -rotate-12 text-6xl drop-shadow-lg">
            🍔
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero