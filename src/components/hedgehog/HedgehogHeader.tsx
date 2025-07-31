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
        <a href="/" className="flex items-center gap-3">
          {/* Sleek fintech hedgehog logo */}
          <div className="relative">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
              {/* Stylized hedgehog using geometric shapes */}
              <div className="relative w-6 h-6">
                {/* Main body - circle */}
                <div className="absolute inset-x-1 inset-y-1.5 bg-white rounded-full"></div>
                {/* Spikes - small triangular elements */}
                <div className="absolute top-0 left-2 w-1 h-1 bg-white transform rotate-45"></div>
                <div className="absolute top-0.5 left-1 w-1 h-1 bg-white transform rotate-45"></div>
                <div className="absolute top-0.5 right-1 w-1 h-1 bg-white transform rotate-45"></div>
                <div className="absolute top-0 right-2 w-1 h-1 bg-white transform rotate-45"></div>
                <div className="absolute top-1 left-0.5 w-1 h-1 bg-white transform rotate-45"></div>
                <div className="absolute top-1 right-0.5 w-1 h-1 bg-white transform rotate-45"></div>
                {/* Eyes */}
                <div className="absolute top-2 left-2.5 w-0.5 h-0.5 bg-primary rounded-full"></div>
                <div className="absolute top-2 right-2.5 w-0.5 h-0.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold text-neutral-900 tracking-tight">
            Hedgehog
          </div>
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