import { ArrowUpRight, Copy } from "lucide-react"
import { useState } from "react"
import type { Offer } from "../../data/offers"

interface OfferCardProps {
  offer: Offer
}

function OfferCard({ offer }: OfferCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(offer.code)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${offer.background} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/30 blur-2xl" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            {offer.emoji}
          </span>

          <ArrowUpRight
            size={22}
            className="text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <p className="mt-6 text-sm font-black text-brand-coral">
          {offer.discount}
        </p>

        <h3 className="mt-2 text-xl font-black text-ink">
          {offer.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          {offer.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-black text-ink backdrop-blur transition hover:bg-white"
          >
            <Copy size={14} />

            {copied ? "Copied!" : offer.code}
          </button>

          <span className="text-xs font-semibold text-muted">
            Min ₹{offer.minimumOrder}
          </span>
        </div>
      </div>
    </article>
  )
}

export default OfferCard