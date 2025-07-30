import { Menu, X } from "lucide-react";
import { useState } from "react";

const HedgehogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const APP_URL = "https://hedgehog-app.MYDOMAIN.com/dashboard";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200">
      <nav className="container-padding mx-auto flex h-16 items-center justify-between max-w-7xl">
        <a href="/" className="text-xl font-bold text-primary flex items-center gap-2">
          🦔 Hedgehog
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-neutral-600 hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-neutral-600 hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <a 
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Launch App
          </a>
        </div>

        <button 
          className="md:hidden text-neutral-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-neutral-200">
          <div className="container-padding py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-neutral-600 hover:text-primary transition-colors text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-neutral-600 hover:text-primary transition-colors text-left"
            >
              Pricing
            </button>
            <a 
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default HedgehogHeader;