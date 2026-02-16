import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Camera, ChevronRight, ChevronDown, MapPin } from 'lucide-react';
import { cities } from '../data/cities';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const [isMobileCitiesOpen, setIsMobileCitiesOpen] = useState(false);
  const citiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (citiesRef.current && !citiesRef.current.contains(e.target as Node)) {
        setIsCitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Galerie', href: '/#gallery' },
    { label: 'Tarifs', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' }
  ];

  const allCities = [
    { name: 'Saint-Herblain', slug: 'saint-herblain' },
    ...cities.map(c => ({ name: c.name, slug: c.slug }))
  ].sort((a, b) => a.name.localeCompare(b.name));

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
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary-500/10 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Cities Dropdown */}
            <div className="relative" ref={citiesRef}>
              <button
                onClick={() => setIsCitiesOpen(!isCitiesOpen)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary-500/10 flex items-center space-x-1 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-expanded={isCitiesOpen}
                aria-haspopup="true"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>Nos villes</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isCitiesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCitiesOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-3 max-h-80 overflow-y-auto z-50">
                  <div className="px-4 pb-2 mb-1 border-b border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Loire-Atlantique (44)</p>
                  </div>
                  <div className="grid grid-cols-1">
                    {allCities.map((city) => (
                      <a
                        key={city.slug}
                        href={`/${city.slug}`}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        onClick={() => setIsCitiesOpen(false)}
                      >
                        <MapPin className="h-3 w-3 text-primary-400 flex-shrink-0" />
                        <span>Photobooth {city.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
              className="ml-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center space-x-2"
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
          isMenuOpen ? 'max-h-[80vh] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-xl shadow-black/10 p-4 border border-gray-100 max-h-[70vh] overflow-y-auto">
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

            {/* Mobile Cities Accordion */}
            <button
              onClick={() => setIsMobileCitiesOpen(!isMobileCitiesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-all duration-200"
            >
              <span className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span>Nos villes</span>
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileCitiesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileCitiesOpen && (
              <div className="pl-6 space-y-0.5 pb-2">
                {allCities.map((city) => (
                  <a
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photobooth {city.name}
                  </a>
                ))}
              </div>
            )}

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
