import {
  ArrowRight,
  Check,
  Copy,
  Sparkles,
  Timer,
} from "lucide-react"
import { useState } from "react"
import OfferCard from "../cards/OfferCard"
import { offers } from "../../data/offers"

function Offers() {
  const [copied, setCopied] = useState(false)

  const featuredOffer = offers[0]
  const secondaryOffers = offers.slice(1)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(featuredOffer.code)
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="offers" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
              <Sparkles size={17} />
              Delicious deals
            </div>

            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-ink md:text-5xl">
              More food.
              <span className="text-brand-berry"> Less spending.</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Discover limited-time offers, free delivery deals, and discounts
              created around the way you order.
            </p>
          </div>

          <button
            type="button"
            className="group flex items-center gap-2 self-start font-bold text-ink sm:self-auto"
          >
            View all offers

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          {/* Featured Offer */}
          <article className="relative min-h-[480px] overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-plum via-brand-berry to-brand-coral p-8 text-white shadow-2xl sm:p-10">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-brand-gold/30 blur-3xl" />

            <div className="absolute right-8 top-8 text-8xl opacity-90 transition-transform duration-500 hover:scale-110 hover:rotate-6 sm:text-9xl">
              {featuredOffer.emoji}
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  <Timer size={16} />
                  {featuredOffer.expiry}
                </span>

                <p className="mt-14 text-lg font-bold text-white/80">
                  Welcome offer
                </p>

                <h3 className="mt-3 max-w-lg text-4xl font-black leading-tight sm:text-5xl">
                  {featuredOffer.discount}
                </h3>

                <p className="mt-4 max-w-lg text-xl font-bold">
                  {featuredOffer.title}
                </p>

                <p className="mt-3 max-w-lg leading-7 text-white/75">
                  {featuredOffer.description}
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-black text-brand-plum transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}

                  {copied ? "Code copied" : featuredOffer.code}
                </button>

                <span className="text-sm font-semibold text-white/70">
                  Minimum order ₹{featuredOffer.minimumOrder}
                </span>
              </div>
            </div>
          </article>

          {/* Secondary Offers */}
          <div className="grid gap-4">
            {secondaryOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers