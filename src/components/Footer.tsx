import React from 'react';
import { Camera, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PhotoBooth Nantes</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Spécialiste de la location de photobooth à Nantes et sa région. 
              Nous créons des souvenirs inoubliables pour tous vos événements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f49c8a] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f49c8a] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#f49c8a] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Accueil</a></li>
              <li><a href="/saint-herblain" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Saint-Herblain</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Galerie</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Tarifs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#f49c8a] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#f49c8a]" />
                <span className="text-gray-400 text-sm">contact@mon-photobooth-nantes.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">mon-photobooth-nantes.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#f49c8a]" />
                <span className="text-gray-400 text-sm">Saint-Herblain, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p className="mb-2 md:mb-0">© 2025 Mon PhotoBooth Nantes. Tous droits réservés.</p>
              <p className="text-xs">
                Site réalisé avec ❤️ par{' '}
                <a 
                  href="https://fournard-consulting.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f49c8a] hover:text-[#e88b79] transition-colors duration-300"
                >
                  Fournard Consulting
                </a>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/mentions-legales" className="text-gray-400 hover:text-[#f49c8a] text-sm transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-[#f49c8a] text-sm transition-colors">
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