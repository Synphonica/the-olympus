// frontend/src/app/page.tsx
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import FoodCategories from "../components/food-categories";
import RestaurantList from "../app/restaurant/restaurant-list";
import FeaturesSection from "../components/features-section";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Food Categories */}
      <FoodCategories />

      {/* Features Section */}
      <FeaturesSection />

      {/* Restaurants Section */}
      <RestaurantList />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
