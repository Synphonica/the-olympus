// frontend/src/components/Navbar.tsx
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg w-full ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-3xl font-extrabold text-orange-600 hover:text-orange-700 transition duration-300"
            >
              El Olimpo
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Inicio
            </Link>
            <a
              href="/assets/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Menú
            </a>
            <Link
              href="/about"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Contacto
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Input
              className="w-48 border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition duration-300"
              placeholder="Buscar"
            />
            <Link
              href="/auth/login"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/auth/register"
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              Registrarse
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="outline"
                className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
              >
                Panel Administrador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
