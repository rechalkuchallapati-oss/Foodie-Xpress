import {
  ArrowRight,
  ChefHat,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"

const footerLinks = {
  explore: [
    "Restaurants",
    "Popular Dishes",
    "Offers",
    "Cuisines",
    "Trending Near You",
  ],

  company: [
    "About Us",
    "How It Works",
    "Careers",
    "Blog",
    "Contact Us",
  ],

  partners: [
    "Partner with Us",
    "Restaurant Dashboard",
    "Become a Delivery Partner",
    "Partner Support",
  ],
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-berry/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-coral/10 blur-3xl" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-coral">
                Stay hungry for updates
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
                Fresh deals and food discoveries,
                <span className="text-brand-gold">
                  {" "}
                  delivered to your inbox.
                </span>
              </h2>
            </div>

            <form
              className="w-full max-w-xl"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.06] p-2 backdrop-blur sm:flex-row">
                <div className="flex flex-1 items-center gap-3 px-3">
                  <Mail
                    size={19}
                    className="shrink-0 text-white/40"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/35"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-brand-coral px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Subscribe

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-coral to-brand-berry shadow-lg">
                <ChefHat size={23} />
              </div>

              <p className="text-2xl font-black">
                Foodie
                <span className="text-brand-coral">
                  Xpress
                </span>
              </p>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Discover restaurants, explore dishes, and order what matches
              your moment. FoodieXpress brings food discovery and ordering
              into one simple web-first experience.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-3 text-sm text-white/55">
              <div className="flex items-center gap-3">
                <MapPin
                  size={17}
                  className="text-brand-coral"
                />

                <span>
                  Hyderabad, Telangana
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  className="text-brand-coral"
                />

                <span>
                  support@foodiexpress.demo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  className="text-brand-coral"
                />

                <span>
                  Customer Support
                </span>
              </div>
            </div>

          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-black text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="group flex items-center gap-1 text-sm text-white/50 transition hover:text-white"
                  >
                    {link}

                    <ArrowRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-black text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h3 className="font-black text-white">
              For Partners
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="text-left text-sm leading-6 text-white/50 transition hover:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            {/* Restaurant Partner CTA */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-sm font-black text-white">
                Own a restaurant?
              </p>

              <p className="mt-1 text-xs leading-5 text-white/45">
                Reach more customers through FoodieXpress.
              </p>

              <button
                type="button"
                className="mt-3 flex items-center gap-2 text-xs font-black text-brand-gold"
              >
                Join FoodieXpress

                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {currentYear} FoodieXpress. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button
              type="button"
              className="transition hover:text-white"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="transition hover:text-white"
            >
              Terms of Service
            </button>

            <button
              type="button"
              className="transition hover:text-white"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer