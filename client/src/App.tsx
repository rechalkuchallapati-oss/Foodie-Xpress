import MainLayout from "./layouts/MainLayout"
import Hero from "./components/sections/Hero"
import Categories from "./components/sections/Categories"
import PopularRestaurants from "./components/sections/PopularRestaurants"
import TrendingDishes from "./components/sections/TrendingDishes"
import Offers from "./components/sections/Offers"

function App() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <PopularRestaurants />
      <TrendingDishes />
      <Offers />
    </MainLayout>
  )
}

export default App