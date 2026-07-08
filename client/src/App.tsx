import MainLayout from "./layouts/MainLayout"
import Hero from "./components/sections/Hero"
import Categories from "./components/sections/Categories"
import PopularRestaurants from "./components/sections/PopularRestaurants"
import TrendingDishes from "./components/sections/TrendingDishes"
import Offers from "./components/sections/Offers"
import WhyFoodieXpress from "./components/sections/WhyFoodieXpress"
import HowItWorks from "./components/sections/HowItWorks"
import { testimonials } from "../../data/testimonials"
import SocialProof from "./components/sections/SocialProof"
function App() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <TrendingDishes />
      <Offers />
      <WhyFoodieXpress />
      <HowItWorks />
      <Testimonals />
      <SocialProof />
    </MainLayout>
  )
}

export default App