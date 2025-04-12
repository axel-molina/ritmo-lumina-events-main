import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Galería", href: "#gallery" },
    { name: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <span className="text-2xl font-bold text-dj-yellow">MOLI&nbsp;</span>
          <span className="text-2xl font-bold text-white">DJ</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-dj-yellow transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-dj-yellow text-black hover:bg-dj-yellow/80">
            Cotizar Ahora
          </Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-dj-yellow"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-dj-yellow"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-dj-yellow text-2xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="bg-dj-yellow text-black hover:bg-dj-yellow/80 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar Ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
