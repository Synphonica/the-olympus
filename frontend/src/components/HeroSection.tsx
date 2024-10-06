// frontend/src/components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
	return (
		<section className="mx-16 py-16 mt-10 bg-gradient-to-r from-orange-400 to-yellow-500 text-white">
			<div className="container mx-auto px-4 max-w-screen-lg text-center">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-4">El Olimpo</h1>
				<p className="text-xl md:text-2xl mb-8">Sabores divinos, entrega olímpica</p>
			</div>
		</section>
	);
};

export default HeroSection;
