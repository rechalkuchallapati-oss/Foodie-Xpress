import { ArrowRight } from "lucide-react"
import CategoryCard from "../cards/CategoryCard"
import { categories } from "../../data/categories"

function Categories() {
  return (
    <section id="explore" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
              Explore your cravings
            </span>

            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-ink md:text-5xl">
              What are you in the
              <span className="text-brand-berry"> mood </span>
              for?
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              Start with a craving. We'll help you discover the right dish
              and the right restaurant.
            </p>
          </div>

          <button className="group flex items-center gap-2 self-start font-bold text-ink sm:self-auto">
            View all categories

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories