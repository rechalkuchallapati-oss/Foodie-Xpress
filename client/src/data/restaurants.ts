export interface Restaurant {
  id: number
  name: string
  cuisine: string[]
  rating: number
  deliveryTime: string
  deliveryFee: number
  offer: string
  emoji: string
  background: string
  isOpen: boolean
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Spice Route",
    cuisine: ["Biryani", "North Indian"],
    rating: 4.8,
    deliveryTime: "25–30 min",
    deliveryFee: 0,
    offer: "50% OFF",
    emoji: "🍛",
    background: "from-orange-200 via-amber-100 to-yellow-50",
    isOpen: true,
  },
  {
    id: 2,
    name: "Crust & Fire",
    cuisine: ["Pizza", "Italian"],
    rating: 4.7,
    deliveryTime: "30–35 min",
    deliveryFee: 39,
    offer: "30% OFF",
    emoji: "🍕",
    background: "from-red-200 via-orange-100 to-amber-50",
    isOpen: true,
  },
  {
    id: 3,
    name: "Burger District",
    cuisine: ["Burgers", "American"],
    rating: 4.6,
    deliveryTime: "20–25 min",
    deliveryFee: 29,
    offer: "BUY 1 GET 1",
    emoji: "🍔",
    background: "from-yellow-200 via-orange-100 to-red-50",
    isOpen: true,
  },
  {
    id: 4,
    name: "Sweet Theory",
    cuisine: ["Desserts", "Bakery"],
    rating: 4.9,
    deliveryTime: "20–30 min",
    deliveryFee: 19,
    offer: "20% OFF",
    emoji: "🍰",
    background: "from-pink-200 via-rose-100 to-orange-50",
    isOpen: false,
  },
]