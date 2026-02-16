import React from 'react';
import { Camera, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { cities } from '../data/cities';

const Footer = () => {
  const allCities = [
    { name: 'Saint-Herblain', slug: 'saint-herblain' },
    ...cities.map(c => ({ name: c.name, slug: c.slug }))
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <footer className="bg-dark-950 text-white border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center space-x-3 mb-5" aria-label="PhotoBooth Nantes - Accueil">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2.5 rounded-xl">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">PhotoBooth</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] -mt-1 text-primary-400">
                  Nantes
                </span>
              </div>
            </a>
            <p className="text-white/40 mb-6 max-w-sm leading-relaxed text-sm">
              Spécialiste de la location de photobooth à Nantes et en Loire-Atlantique.
              Créez des souvenirs inoubliables pour tous vos événements.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/5 hover:bg-primary-500 p-2.5 rounded-xl transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary-500 p-2.5 rounded-xl transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/5 hover:bg-primary-500 p-2.5 rounded-xl transition-all duration-300" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-5">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">Accueil</a></li>
              <li><a href="/#services" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">Services</a></li>
              <li><a href="/#gallery" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">Galerie</a></li>
              <li><a href="/#pricing" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">Tarifs</a></li>
              <li><a href="/#faq" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">FAQ</a></li>
              <li><a href="/#contact" className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Nos Villes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-5">Nos villes</h3>
            <ul className="space-y-2 columns-1">
              {allCities.slice(0, 10).map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/${city.slug}`}
                    className="text-white/40 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
              {allCities.length > 10 && (
                <li className="pt-1">
                  <span className="text-white/20 text-xs">+ {allCities.length - 10} villes</span>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-5">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">contact@mon-photobooth-nantes.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">Rue de L'orne, 44800 Saint-Herblain</span>
              </div>
            </div>
          </div>
        </div>

        {/* All cities SEO links */}
        <div className="border-t border-white/5 pt-8 mt-10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">Location photobooth en Loire-Atlantique</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {allCities.map((city) => (
              <a
                key={city.slug}
                href={`/${city.slug}`}
                className="text-white/20 hover:text-primary-400 text-xs transition-colors duration-200"
              >
                Photobooth {city.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/30 text-xs">
              <p>&copy; 2025 Mon PhotoBooth Nantes. Tous droits réservés.</p>
              <p className="mt-1">
                Site réalisé par{' '}
                <a
                  href="https://fournard-consulting.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Fournard Consulting
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/mentions-legales" className="text-white/30 hover:text-primary-400 text-xs transition-colors duration-200">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-white/30 hover:text-primary-400 text-xs transition-colors duration-200">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
