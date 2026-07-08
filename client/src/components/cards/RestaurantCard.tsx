import { Clock3, Heart, IndianRupee, Star } from "lucide-react"
import { useState } from "react"
import type { Restaurant } from "../../data/restaurants"

interface RestaurantCardProps {
  restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <article className="group overflow-hidden rounded-[30px] border border-soft-border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Visual */}
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${restaurant.background}`}
      >
        <span className="text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          {restaurant.emoji}
        </span>

        <span className="absolute left-4 top-4 rounded-full bg-brand-coral px-3 py-1.5 text-xs font-black text-white shadow-lg">
          {restaurant.offer}
        </span>

        <button
          onClick={() => setIsFavorite((current) => !current)}
          aria-label="Add restaurant to favorites"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:scale-110"
        >
          <Heart
            size={19}
            className={
              isFavorite
                ? "fill-brand-berry text-brand-berry"
                : "text-ink"
            }
          />
        </button>

        <div className="absolute bottom-4 left-4">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-bold shadow-sm ${
              restaurant.isOpen
                ? "bg-white/90 text-green-700"
                : "bg-white/90 text-red-600"
            }`}
          >
            {restaurant.isOpen ? "● Open now" : "● Closed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-ink">
              {restaurant.name}
            </h3>

            <p className="mt-1 text-sm text-muted">
              {restaurant.cuisine.join(" • ")}
            </p>
          </div>

          <div className="flex items-center gap-1 rounded-xl bg-brand-gold/20 px-2.5 py-1.5">
            <Star
              size={15}
              className="fill-brand-gold text-brand-gold"
            />

            <span className="text-sm font-black text-ink">
              {restaurant.rating}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-soft-border pt-4 text-sm">
          <div className="flex items-center gap-2 text-muted">
            <Clock3 size={16} className="text-brand-coral" />
            {restaurant.deliveryTime}
          </div>

          <div className="flex items-center gap-1 font-semibold text-muted">
            {restaurant.deliveryFee === 0 ? (
              <span className="font-bold text-green-700">
                Free delivery
              </span>
            ) : (
              <>
                <IndianRupee size={14} />
                {restaurant.deliveryFee} delivery
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default RestaurantCard