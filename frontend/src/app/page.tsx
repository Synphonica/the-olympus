'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import {
  Utensils,
  ShoppingBag,
  Clock,
  ShoppingCart,
  Coffee,
  Pizza,
  Sandwich,
  Fish,
  Beef,
  Salad,
  Drumstick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const foodCategories = [
  { name: "All", icon: Utensils },
  { name: "Burger", icon: Coffee },
  { name: "Mexican", icon: Utensils },
  { name: "Indian Food", icon: Utensils },
  { name: "Salad", icon: Salad },
  { name: "Pizza", icon: Pizza },
  { name: "BBQ", icon: Beef },
  { name: "Sandwich", icon: Sandwich },
  { name: "Meat", icon: Drumstick },
  { name: "Noodles", icon: Utensils },
  { name: "Sea Food", icon: Fish },
  { name: "Sushi", icon: Fish },
];

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();
      setProducts(Array.isArray(result) ? result : []);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-3xl font-extrabold text-orange-600 hover:text-orange-700 transition duration-300">
                El Olimpo
              </Link>
            </div>

            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Inicio
              </Link>
              <Link href="/menu" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Menú
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Nosotros
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Contacto
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Input className="w-48 border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition duration-300" placeholder="Buscar" />
              <Link href="/auth/login" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Iniciar sesión
              </Link>
              <Link href="/auth/register" className="text-gray-800 hover:text-orange-500 transition duration-300">
                Registrarse
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                </Button>
              </Link>
              <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300">
                Ordenar Ahora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-extrabold mb-4">El Olimpo</h1>
          <p className="text-2xl mb-8">Sabores divinos, entrega olímpica</p>
          <Link href="/menu" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Ver Menú
          </Link>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16 bg-white">
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
                  <span className="text-sm font-medium text-center text-gray-700">{category.name}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-50">
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

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Productos Destacados</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product: any) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para ordenar?</h2>
          <p className="text-xl mb-8">Haz tu pedido ahora y disfruta de la mejor comida rápida</p>
          <Link href="/order" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Ordenar Ahora
          </Link>
        </div>
      </section>

      {/* Admin Section - Botón Cambiado */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Administración de Productos</h2>
            <Link href="products/new" className={buttonVariants()}>
              Crear Producto
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">El Olimpo</h3>
              <p className="text-gray-400">Sabores divinos, entrega olímpica</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-orange-500 transition duration-300">Inicio</Link></li>
                <li><Link href="/menu" className="hover:text-orange-500 transition duration-300">Menú</Link></li>
                <li><Link href="/about" className="hover:text-orange-500 transition duration-300">Nosotros</Link></li>
                <li><Link href="/contact" className="hover:text-orange-500 transition duration-300">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-300">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            © {new Date().getFullYear()} El Olimpo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
