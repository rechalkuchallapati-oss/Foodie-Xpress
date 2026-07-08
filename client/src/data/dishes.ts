export interface Dish {
  id: number
  name: string
  restaurant: string
  emoji: string
  price: number
  originalPrice?: number
  rating: number
  deliveryTime: string
  type: "VEG" | "NON_VEG"
  badge?: string
  background: string
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Hyderabadi Dum Biryani",
    restaurant: "Spice Route",
    emoji: "🍛",
    price: 249,
    originalPrice: 329,
    rating: 4.9,
    deliveryTime: "25 min",
    type: "NON_VEG",
    badge: "Bestseller",
    background: "from-orange-200 via-amber-100 to-yellow-50",
  },
  {
    id: 2,
    name: "Farmhouse Loaded Pizza",
    restaurant: "Crust & Fire",
    emoji: "🍕",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    deliveryTime: "30 min",
    type: "VEG",
    badge: "Trending",
    background: "from-red-200 via-orange-100 to-amber-50",
  },
  {
    id: 3,
    name: "Double Smash Burger",
    restaurant: "Burger District",
    emoji: "🍔",
    price: 219,
    rating: 4.7,
    deliveryTime: "20 min",
    type: "NON_VEG",
    badge: "Hot Pick",
    background: "from-yellow-200 via-orange-100 to-red-50",
  },
  {
    id: 4,
    name: "Chocolate Dream Cake",
    restaurant: "Sweet Theory",
    emoji: "🍰",
    price: 189,
    originalPrice: 249,
    rating: 4.9,
    deliveryTime: "20 min",
    type: "VEG",
    badge: "Most Loved",
    background: "from-pink-200 via-rose-100 to-orange-50",
  },
]