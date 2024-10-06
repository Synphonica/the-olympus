// frontend/src/components/FeaturesSection.tsx
import { Utensils, ShoppingBag, Clock } from 'lucide-react';

const FeaturesSection = () => {
	return (
		<section className="mx-16 py-16 bg-orange-50">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
				<div className="flex flex-col items-center text-center transition duration-300 hover:scale-105">
					<Utensils className="w-12 h-12 text-orange-600 mb-4" />
					<h3 className="text-xl font-semibold mb-2">Comida Fresca</h3>
					<p className="text-gray-700">Ingredientes de calidad para sabores increíbles</p>
				</div>
				<div className="flex flex-col items-center text-center transition duration-300 hover:scale-105">
					<ShoppingBag className="w-12 h-12 text-orange-600 mb-4" />
					<h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
					<p className="text-gray-700">Tu comida llega caliente y en tiempo récord</p>
				</div>
				<div className="flex flex-col items-center text-center transition duration-300 hover:scale-105">
					<Clock className="w-12 h-12 text-orange-600 mb-4" />
					<h3 className="text-xl font-semibold mb-2">Abierto 24/7</h3>
					<p className="text-gray-700">Satisface tus antojos a cualquier hora</p>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
