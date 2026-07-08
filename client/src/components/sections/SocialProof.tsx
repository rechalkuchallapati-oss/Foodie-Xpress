import {
  ArrowRight,
  Quote,
  Star,
  Store,
  Timer,
  Users,
} from "lucide-react"

import { testimonials } from "../../data/testimonials"

const stats = [
  {
    icon: Users,
    value: "25K+",
    label: "Happy food lovers",
  },
  {
    icon: Store,
    value: "500+",
    label: "Restaurant partners",
  },
  {
    icon: Timer,
    value: "28 min",
    label: "Average delivery time",
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Average experience",
  },
]

function SocialProof() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-berry/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
            Loved by food lovers
          </span>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl">
            Good food creates
            <span className="text-brand-berry">
              {" "}good stories.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            A better ordering experience is measured by the moments it makes
            simpler, faster, and more enjoyable.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-[32px] border border-soft-border bg-white/75 shadow-xl backdrop-blur lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="group border-b border-r border-soft-border p-6 text-center transition hover:bg-surface-warm/50 lg:border-b-0"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-warm text-brand-coral transition duration-300 group-hover:scale-110 group-hover:bg-brand-coral group-hover:text-white">
                  <Icon size={21} />
                </div>

                <p className="mt-4 text-3xl font-black text-ink">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-[32px] border border-soft-border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 1 ? "lg:-translate-y-5" : ""
              }`}
            >
              <Quote
                size={70}
                className="absolute -right-2 -top-2 text-brand-coral/[0.07]"
              />

              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={17}
                        className="fill-brand-gold text-brand-gold"
                      />
                    ),
                  )}
                </div>

                {/* Review */}
                <p className="mt-6 min-h-32 text-base leading-8 text-ink">
                  “{testimonial.review}”
                </p>

                {/* Favourite order */}
                <div className="mt-5 inline-flex rounded-full bg-surface-warm px-3 py-1.5 text-xs font-bold text-brand-coral">
                  Usually orders: {testimonial.favoriteOrder}
                </div>

                {/* Customer */}
                <div className="mt-7 flex items-center gap-4 border-t border-soft-border pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-coral to-brand-berry font-black text-white shadow-md">
                    {testimonial.initials}
                  </div>

                  <div>
                    <p className="font-black text-ink">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full border border-soft-border bg-white px-6 py-3 font-bold text-ink shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            See more foodie stories

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SocialProof