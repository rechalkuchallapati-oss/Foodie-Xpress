import { ArrowRight } from "lucide-react"
import RestaurantCard from "../cards/RestaurantCard"
import { restaurants } from "../../data/restaurants"

function PopularRestaurants() {
  return (
    <section
      id="restaurants"
      className="relative bg-white/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
              Local favourites
            </span>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink md:text-5xl">
              Restaurants worth
              <span className="text-brand-berry"> discovering.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Explore highly rated restaurants selected for great food,
              reliable delivery, and memorable flavours.
            </p>
          </div>

          <button className="group flex items-center gap-2 self-start font-bold text-ink sm:self-auto">
            Explore all restaurants

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularRestaurants