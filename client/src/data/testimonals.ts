export interface Testimonial {
  id: number
  name: string
  role: string
  initials: string
  rating: number
  review: string
  favoriteOrder: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frequent Foodie",
    initials: "AS",
    rating: 5,
    review:
      "Finding something to eat usually takes me longer than ordering. FoodieXpress makes discovery feel much faster and more personal.",
    favoriteOrder: "Hyderabadi Biryani",
  },
  {
    id: 2,
    name: "Meera Reddy",
    role: "Weekend Explorer",
    initials: "MR",
    rating: 5,
    review:
      "I like that the experience focuses on dishes and cravings, not only restaurant lists. The interface feels clear and easy to explore.",
    favoriteOrder: "Farmhouse Pizza",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Late-Night Regular",
    initials: "RV",
    rating: 5,
    review:
      "The transparent pricing and simple ordering flow are what stand out to me. I can quickly understand the final cost before checkout.",
    favoriteOrder: "Double Smash Burger",
  },
]