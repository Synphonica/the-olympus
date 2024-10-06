// frontend/src/app/page.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FoodCategories from '@/components/FoodCategories';
import RestaurantList from '../restaurant/RestaurantList';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

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
