import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3 group" aria-label="PhotoBooth Nantes - Accueil">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2.5 rounded-xl shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-105">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                PhotoBooth
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-primary-500' : 'text-accent-300'
              }`}>
                Nantes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary-500/10 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
              className="ml-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center space-x-2"
              aria-label="Demander un devis gratuit par email"
            >
              <span>Devis Gratuit</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Menu de navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl shadow-black/10 p-4 border border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <a
                href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
                className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary-500/25"
                aria-label="Demander un devis gratuit"
              >
                Devis Gratuit
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
