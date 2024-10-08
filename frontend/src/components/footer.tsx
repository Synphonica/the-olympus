// frontend/src/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">El Olimpo</h3>
            <p className="text-gray-400">Sabores divinos, entrega olímpica</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#navbar"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 w-full">
          © {new Date().getFullYear()} El Olimpo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
