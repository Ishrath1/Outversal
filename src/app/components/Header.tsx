import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/logo2.png";
import { useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <header
      className={`sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border 
    ${isScroll ? "bg-white/30 backdrop-blur-lg shadow-sm" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <img src={logoImg} alt="Outversal" className="h-15" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
            >
              Services
            </a>
            <a
              href="#avantages"
              className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
            >
              Avantages
            </a>
            <a
              href="#tarifs"
              className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#apropos"
              className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-sm bg-[#5AACB8] text-white px-6 py-2.5 rounded-full hover:bg-[#2D7F91] transition-colors"
            >
              Prendre contact
            </a>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#avantages"
                className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Avantages
              </a>
              <a
                href="#tarifs"
                className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </a>
              <a
                href="#apropos"
                className="text-sm text-foreground hover:text-[#5AACB8] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-sm bg-[#5AACB8] text-white px-6 py-2.5 rounded-full hover:bg-[#2D7F91] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Prendre contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
