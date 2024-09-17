/* eslint-disable @typescript-eslint/no-explicit-any */
import { buttonVariants } from "@/components/ui/button"
import { getProducts } from "./products/products.api"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"
import { Utensils, ShoppingBag, Clock, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

async function HomePage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-orange-500">El Olimpo</Link>

            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500">Inicio</Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-500">Menú</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500">Nosotros</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500">Contacto</Link>
            </div>

            <div className="flex items-center space-x-4">
              {/* New login and register links, hidden on mobile */}
              <div className="hidden md:flex space-x-4">
                <Link href="/auth/login" className="text-gray-700 hover:text-orange-500">
                  Iniciar sesión
                </Link>
                <Link href="auth/register" className="text-gray-700 hover:text-orange-500">
                  Registrarse
                </Link>
              </div>
              {/* End of new links */}

              <Link href="/cart">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-6 w-6" />
                </Button>
              </Link>
              <Button variant="outline" className="hidden md:inline-flex">
                Ordenar Ahora
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">El Olimpo</h1>
          <p className="text-xl md:text-2xl mb-8">Sabores divinos, entrega olímpica</p>
          <Link href="/menu" className={buttonVariants({ size: "lg" })}>
            Ver Menú
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Utensils className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comida Fresca</h3>
              <p>Ingredientes de calidad para sabores increíbles</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShoppingBag className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p>Tu comida llega caliente y en tiempo récord</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Abierto 24/7</h3>
              <p>Satisface tus antojos a cualquier hora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
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
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para ordenar?</h2>
          <p className="text-xl mb-8">Haz tu pedido ahora y disfruta de la mejor comida rápida</p>
          <Link href="/order" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Ordenar Ahora
          </Link>
        </div>
      </section>

      {/* Admin Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Administración de Productos</h2>
            <Link href="products/new" className={buttonVariants()}>
              Crear Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage