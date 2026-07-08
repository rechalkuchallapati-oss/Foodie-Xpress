import {
  BadgeIndianRupee,
  BrainCircuit,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Discovery that understands you",
    description:
      "Explore food based on cravings, mood, cuisine preferences, and ordering patterns instead of scrolling endlessly.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "One place. Endless variety.",
    description:
      "Discover dishes and restaurants across cuisines through one unified ordering experience.",
  },
  {
    icon: BadgeIndianRupee,
    number: "03",
    title: "Know what you're paying",
    description:
      "Clear pricing, visible delivery charges, and transparent offers before you reach checkout.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Order anywhere",
    description:
      "Use FoodieXpress directly from the browser on mobile, tablet, or desktop with no mandatory installation.",
  },
]

function WhyFoodieXpress() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-coral/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-brand-berry/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-white/70 px-4 py-2 text-sm font-black text-brand-coral shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Why FoodieXpress?
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-ink md:text-6xl">
              Food ordering should feel
              <span className="block text-brand-berry">
                effortless.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              FoodieXpress is designed around discovery, clarity, convenience,
              and speed—not just another catalogue of restaurants.
            </p>

            {/* Small highlight card */}
            <div className="mt-10 max-w-md rounded-[28px] border border-soft-border bg-white/80 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-coral text-white shadow-lg">
                  <Zap size={25} />
                </div>

                <div>
                  <p className="font-black text-ink">
                    Built for the web first
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Open. Discover. Order. No mandatory app installation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.number}
                  className={`group relative overflow-hidden rounded-[30px] border border-soft-border bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    index === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <span className="absolute right-5 top-3 text-6xl font-black text-brand-coral/[0.06]">
                    {feature.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-warm text-brand-coral transition-all duration-300 group-hover:rotate-6 group-hover:bg-brand-coral group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-black leading-snug text-ink">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {feature.description}
                    </p>
                  </div>
                </article>
              )
            })}

            {/* Trust strip */}
            <div className="sm:col-span-2 sm:mt-8">
              <div className="flex flex-col justify-between gap-4 rounded-[26px] bg-ink px-6 py-5 text-white sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={25}
                    className="text-brand-gold"
                  />

                  <div>
                    <p className="font-black">
                      A platform designed for trust
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Reliable restaurants, transparent ordering, and secure
                      experiences.
                    </p>
                  </div>
                </div>

                <span className="shrink-0 text-sm font-bold text-brand-gold">
                  Food without friction →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyFoodieXpress