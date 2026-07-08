import { ArrowUpRight } from "lucide-react"
import type { Category } from "../../data/categories"

interface CategoryCardProps {
  category: Category
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <button
      type="button"
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[28px]
        border
        border-soft-border
        bg-white
        p-5
        text-left
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-brand-coral/30
        hover:shadow-xl
      "
    >
      {/* Category Visual */}
      <div
        className={`
          flex
          aspect-square
          items-center
          justify-center
          rounded-[22px]
          bg-gradient-to-br
          ${category.background}
        `}
      >
        <span
          className="
            text-6xl
            transition-transform
            duration-500
            group-hover:scale-110
            group-hover:-rotate-6
          "
        >
          {category.emoji}
        </span>
      </div>

      {/* Category Information */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-ink">
            {category.name}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {category.description}
          </p>

          <p className="mt-3 text-xs font-bold text-brand-coral">
            {category.itemCount}+ dishes
          </p>
        </div>

        {/* Arrow Button */}
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-surface-warm
            text-brand-coral
            transition-all
            duration-300
            group-hover:rotate-45
            group-hover:bg-brand-coral
            group-hover:text-white
          "
        >
          <ArrowUpRight size={17} />
        </div>
      </div>
    </button>
  )
}

export default CategoryCard