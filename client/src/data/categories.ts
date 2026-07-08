export interface Category {
  id: number
  name: string
  emoji: string
  description: string
  itemCount: number
  background: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Biryani",
    emoji: "🍛",
    description: "Rich & aromatic",
    itemCount: 124,
    background: "from-orange-100 to-amber-50",
  },
  {
    id: 2,
    name: "Pizza",
    emoji: "🍕",
    description: "Cheesy happiness",
    itemCount: 86,
    background: "from-red-100 to-orange-50",
  },
  {
    id: 3,
    name: "Burgers",
    emoji: "🍔",
    description: "Big juicy bites",
    itemCount: 72,
    background: "from-yellow-100 to-orange-50",
  },
  {
    id: 4,
    name: "South Indian",
    emoji: "🥘",
    description: "Classic comfort",
    itemCount: 98,
    background: "from-amber-100 to-yellow-50",
  },
  {
    id: 5,
    name: "Healthy",
    emoji: "🥗",
    description: "Fresh & balanced",
    itemCount: 64,
    background: "from-lime-100 to-green-50",
  },
  {
    id: 6,
    name: "Desserts",
    emoji: "🍰",
    description: "Sweet moments",
    itemCount: 91,
    background: "from-pink-100 to-rose-50",
  },
]