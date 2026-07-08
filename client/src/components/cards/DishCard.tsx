import { Clock3, Heart, Plus, Star } from "lucide-react"
import { useState } from "react"
import type { Dish } from "../../data/dishes"

interface DishCardProps {
  dish: Dish
}

function DishCard({ dish }: DishCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [quantity, setQuantity] = useState(0)

  return (
    <article className="group overflow-hidden rounded-[30px] border border-soft-border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Dish visual */}
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${dish.background}`}
      >
        <span className="text-8xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          {dish.emoji}
        </span>

        {dish.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-brand-plum px-3 py-1.5 text-xs font-black text-white shadow-lg">
            {dish.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Add dish to wishlist"
          onClick={() => setIsFavorite((current) => !current)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur transition hover:scale-110"
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

        {/* Quick View */}
        <button
          type="button"
          className="absolute bottom-4 translate-y-16 rounded-full bg-white px-5 py-2 text-sm font-bold text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick View
        </button>
      </div>

      {/* Dish information */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div
            className={`flex items-center gap-1.5 text-xs font-bold ${
              dish.type === "VEG" ? "text-green-700" : "text-red-600"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                dish.type === "VEG" ? "bg-green-600" : "bg-red-600"
              }`}
            />

            {dish.type === "VEG" ? "VEG" : "NON-VEG"}
          </div>

          <div className="flex items-center gap-1 text-sm font-bold text-ink">
            <Star
              size={15}
              className="fill-brand-gold text-brand-gold"
            />
            {dish.rating}
          </div>
        </div>

        <h3 className="mt-3 text-xl font-black text-ink">
          {dish.name}
        </h3>

        <p className="mt-1 text-sm text-muted">
          by {dish.restaurant}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <Clock3 size={16} className="text-brand-coral" />
          {dish.deliveryTime}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-soft-border pt-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-ink">
                ₹{dish.price}
              </span>

              {dish.originalPrice && (
                <span className="text-sm text-muted line-through">
                  ₹{dish.originalPrice}
                </span>
              )}
            </div>

            <p className="mt-1 text-xs text-muted">
              Inclusive of all taxes
            </p>
          </div>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => setQuantity(1)}
              className="flex items-center gap-2 rounded-2xl bg-brand-coral px-4 py-2.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Plus size={17} />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-2xl bg-surface-warm px-3 py-2">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(0, current - 1))
                }
                className="font-black text-brand-coral"
              >
                −
              </button>

              <span className="min-w-4 text-center text-sm font-black text-ink">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                className="font-black text-brand-coral"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default DishCard