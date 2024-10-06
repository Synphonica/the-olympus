// frontend/src/components/FoodCategories.tsx
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
	Utensils,
	Coffee,
	Pizza,
	Sandwich,
	Fish,
	Beef,
	Salad,
	Drumstick,
} from 'lucide-react';

const foodCategories = [
	{ name: 'All', icon: Utensils },
	{ name: 'Burger', icon: Coffee },
	{ name: 'Mexican', icon: Utensils },
	{ name: 'Indian Food', icon: Utensils },
	{ name: 'Salad', icon: Salad },
	{ name: 'Pizza', icon: Pizza },
	{ name: 'BBQ', icon: Beef },
	{ name: 'Sandwich', icon: Sandwich },
	{ name: 'Meat', icon: Drumstick },
	{ name: 'Noodles', icon: Utensils },
	{ name: 'Sea Food', icon: Fish },
	{ name: 'Sushi', icon: Fish },
];

const FoodCategories = () => {
	return (
		<section className="py-16 mx-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-semibold mb-10 text-center animate-bounce">
					Explora Nuestras Categorías
				</h2>
				<ScrollArea className="w-full">
					<div className="flex space-x-8 pb-4">
						{foodCategories.map((category) => (
							<div
								key={category.name}
								className="flex flex-col items-center space-y-2 w-24 transition duration-300 hover:scale-105 hover:translate-y-1"
							>
								<div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center shadow-md">
									<category.icon className="w-8 h-8 text-orange-600" />
								</div>
								<span className="text-sm font-medium text-center text-gray-700">
									{category.name}
								</span>
							</div>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
		</section>
	);
};

export default FoodCategories;
