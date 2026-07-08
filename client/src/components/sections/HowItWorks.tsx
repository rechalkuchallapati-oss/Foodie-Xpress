import {
  CheckCircle2,
  ChefHat,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Tell us where you are",
    description:
      "Set your delivery location to discover restaurants and dishes available around you.",
    label: "Set location",
  },
  {
    number: "02",
    icon: Search,
    title: "Find your craving",
    description:
      "Search directly or explore by mood, cuisine, restaurant, category, or trending dishes.",
    label: "Discover",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Make it yours",
    description:
      "Customize dishes, choose quantities, apply offers, and review your complete order.",
    label: "Order",
  },
  {
    number: "04",
    icon: Truck,
    title: "Follow every move",
    description:
      "Track order progress from restaurant confirmation through preparation and delivery.",
    label: "Track",
  },
]

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-berry/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-coral/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-brand-gold backdrop-blur">
            <Sparkles size={16} />
            From craving to doorstep
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Four steps.
            <span className="block bg-gradient-to-r from-brand-gold via-brand-orange to-brand-coral bg-clip-text text-transparent">
              One delicious journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            FoodieXpress keeps the ordering journey simple while giving you
            control from discovery to delivery.
          </p>
        </div>

        {/* Journey */}
        <div className="relative mt-16">
          {/* Desktop connection line */}
          <div className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-gradient-to-r from-brand-gold/20 via-brand-coral/70 to-brand-berry/20 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="group relative"
                >
                  {/* Icon node */}
                  <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-coral/50 group-hover:bg-brand-coral/10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-coral to-brand-berry shadow-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold text-xs font-black text-ink shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="mt-7 text-center">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-coral">
                      {step.label}
                    </span>

                    <h3 className="mt-3 text-xl font-black">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Final status bar */}
        <div className="mx-auto mt-16 max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-[22px] bg-white/[0.05] px-5 py-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-coral/20 text-brand-coral">
                <ChefHat size={23} />

                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-ink bg-green-400" />
              </div>

              <div>
                <p className="font-black">
                  Your order is being prepared
                </p>

                <p className="mt-1 text-sm text-white/50">
                  Estimated arrival in 24 minutes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300">
              <CheckCircle2 size={16} />
              Live updates
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks