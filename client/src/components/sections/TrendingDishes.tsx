import { ArrowRight, Flame } from "lucide-react"
import DishCard from "../cards/DishCard"
import { dishes } from "../../data/dishes"

function TrendingDishes() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-berry/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
              <Flame size={18} />
              Trending right now
            </div>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-ink md:text-5xl">
              Dishes everyone's
              <span className="text-brand-berry"> talking about.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Popular dishes selected from what food lovers are ordering
              and rating highly right now.
            </p>
          </div>

          <button
            type="button"
            className="group flex items-center gap-2 self-start font-bold text-ink sm:self-auto"
          >
            Explore all dishes

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Dish Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingDishes