import React from 'react';
import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Star, Gift, FileText, User, ShoppingCart, Pizza } from 'lucide-react';
import '../globals.css';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

export default function HomeCliente() {
	return (
		<>
			<nav className="bg-white shadow-sm">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<div className="flex-shrink-0">
							<Link href="/admin" className="flex items-center">
								<span className="text-2xl font-bold text-green-800 hover:text-green-600">
									El Olimpo
								</span>
							</Link>
						</div>

						<div className="flex items-center justify-between flex-grow ml-4">
							<div className="flex items-center space-x-4">
								<Link
									href="/menu"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<Pizza className="h-5 w-5 mr-1" />
									<span className="hidden md:inline">MENÚ</span>
								</Link>
								<Link
									href="/papa-puntos"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<Star className="h-5 w-5 mr-1" />
									<span className="hidden md:inline">PAPA PUNTOS</span>
								</Link>
								<Link
									href="/gift-card"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<Gift className="h-5 w-5 mr-1" />
									<span className="hidden md:inline">GIFT CARD</span>
								</Link>
								<Link
									href="/mis-pedidos"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<FileText className="h-5 w-5 mr-1" />
									<span className="hidden md:inline">MIS PEDIDOS</span>
								</Link>
								<Link
									href="/ingresar"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<User className="h-5 w-5 mr-1" />
									<span className="hidden md:inline">INGRESAR</span>
								</Link>

								<Link
									href="/admin"
									className="text-green-800 hover:text-green-600 flex items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 10l6.293 6.293A1 1 0 0110 18z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="hidden md:inline">volver a panel admin</span>
								</Link>
							</div>

							<div className="flex items-center ml-4">
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-800 text-sm">
										Delivery:
									</span>
									<Input
										type="text"
										placeholder="Introduce tu dirección"
										className="w-64 pl-20 pr-10 py-2 border-green-800 focus:border-green-600 rounded-md text-sm"
									/>
								</div>
								<Button className="ml-4 bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2 rounded-md">
									<ShoppingCart className="h-6 w-6" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<div className="container mx-auto px-4 mt-8">
				<Carousel className="w-full max-w-5xl mx-auto">
					<CarouselContent>
						<CarouselItem>
							<div className="relative w-full h-[300px] rounded-lg overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-transparent flex flex-col justify-center p-8">
									<h2 className="text-4xl font-bold text-white mb-2">PAPA Cyber</h2>
									<p className="text-xl text-white mb-4">MEJOR PÍDETE UNA</p>
									<div className="bg-yellow-400 text-green-800 text-5xl font-bold p-2 rounded-md inline-block">
										$15.490
									</div>
									<p className="text-white text-xl mt-2">
										PIZZA FAMILIAR + ACOMPAÑAMIENTOS + BEBIDA 1,5L
									</p>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="relative w-full h-[300px] rounded-lg overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-transparent flex flex-col justify-center p-8">
									<h2 className="text-4xl font-bold text-white mb-2">PAPA Fiesta</h2>
									<p className="text-xl text-white mb-4">¡Celebra con nosotros!</p>
									<div className="bg-yellow-400 text-blue-800 text-5xl font-bold p-2 rounded-md inline-block">
										$18.990
									</div>
									<p className="text-white text-xl mt-2">
										2 PIZZAS FAMILIARES + ACOMPAÑAMIENTOS + BEBIDA 2L
									</p>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="relative w-full h-[300px] rounded-lg overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-red-800/70 to-transparent flex flex-col justify-center p-8">
									<h2 className="text-4xl font-bold text-white mb-2">PAPA Deluxe</h2>
									<p className="text-xl text-white mb-4">¡Una experiencia premium!</p>
									<div className="bg-yellow-400 text-red-800 text-5xl font-bold p-2 rounded-md inline-block">
										$22.990
									</div>
									<p className="text-white text-xl mt-2">
										3 PIZZAS FAMILIARES + ACOMPAÑAMIENTOS + BEBIDA 3L
									</p>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="relative w-full h-[300px] rounded-lg overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 to-transparent flex flex-col justify-center p-8">
									<h2 className="text-4xl font-bold text-white mb-2">PAPA Especial</h2>
									<p className="text-xl text-white mb-4">¡Para ocasiones especiales!</p>
									<div className="bg-yellow-400 text-purple-800 text-5xl font-bold p-2 rounded-md inline-block">
										$25.990
									</div>
									<p className="text-white text-xl mt-2">
										4 PIZZAS FAMILIARES + ACOMPAÑAMIENTOS + BEBIDA 4L
									</p>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</>
	);
}
