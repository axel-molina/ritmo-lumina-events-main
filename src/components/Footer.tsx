import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Music,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-dj-yellow">
                MOLI&nbsp;
              </span>
              <span className="text-2xl font-bold text-white">DJ</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando eventos ordinarios en experiencias extraordinarias
              con lo mejor en música, iluminación y efectos especiales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/molidj_/"
                className="text-gray-400 hover:text-dj-yellow"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-dj-yellow">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-dj-yellow transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-dj-yellow transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-dj-yellow transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-dj-yellow transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-dj-yellow">
              Contáctanos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-dj-yellow mr-3" />
                <span className="text-gray-400">(+54) 9 11 37761843</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-dj-yellow mr-3" />
                <span className="text-gray-400">ivanmolina052@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-gray-500 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Moli DJ. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
