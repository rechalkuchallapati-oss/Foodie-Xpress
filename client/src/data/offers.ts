export interface Offer {
  id: number
  code: string
  title: string
  description: string
  discount: string
  emoji: string
  expiry: string
  minimumOrder: number
  background: string
}

export const offers: Offer[] = [
  {
    id: 1,
    code: "FIRSTBITE",
    title: "Your first order deserves a celebration",
    description:
      "Start your FoodieXpress journey with a special welcome discount.",
    discount: "50% OFF",
    emoji: "🎉",
    expiry: "New users only",
    minimumOrder: 299,
    background:
      "from-brand-plum via-brand-berry to-brand-coral",
  },
  {
    id: 2,
    code: "LUNCHLOVE",
    title: "Lunch Hour Deal",
    description: "Make your afternoon better with a delicious discount.",
    discount: "30% OFF",
    emoji: "🍱",
    expiry: "12 PM – 3 PM",
    minimumOrder: 249,
    background: "from-orange-100 to-amber-50",
  },
  {
    id: 3,
    code: "FREEDEL",
    title: "Free Delivery",
    description: "Your favourites delivered without the delivery fee.",
    discount: "₹0 DELIVERY",
    emoji: "🛵",
    expiry: "Selected restaurants",
    minimumOrder: 199,
    background: "from-pink-100 to-rose-50",
  },
  {
    id: 4,
    code: "WEEKEND",
    title: "Weekend Feast",
    description: "Turn your weekend cravings into a proper food celebration.",
    discount: "40% OFF",
    emoji: "🍕",
    expiry: "Saturday & Sunday",
    minimumOrder: 399,
    background: "from-yellow-100 to-orange-50",
  },
]