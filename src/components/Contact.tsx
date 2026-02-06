import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f49c8a] bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 bg-opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f49c8a] bg-opacity-15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/4 text-[#f49c8a] opacity-20 animate-bounce delay-500">
          <Send className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-1/3 text-yellow-400 opacity-30 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-60 right-1/3 text-[#f49c8a] opacity-25 animate-bounce delay-1000">
          <Heart className="w-7 h-7" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f49c8a%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#f49c8a] bg-opacity-20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
            <Send className="h-5 w-5 text-[#f49c8a] animate-pulse" />
            <span className="text-[#f49c8a] font-semibold">Parlons de votre projet</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-[#f49c8a] to-white bg-clip-text text-transparent">
            Contactez-Nous
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Prêt à rendre votre événement inoubliable ?
            </p>
            <Sparkles className="h-6 w-6 text-[#f49c8a] animate-spin" style={{animationDuration: '3s'}} />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Contactez notre équipe pour un devis personnalisé et gratuit
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f49c8a] transition-colors duration-300">Email</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">contact@mon-photobooth-nantes.fr</p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">Site web: mon-photobooth-nantes.fr</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f49c8a] transition-colors duration-300">Adresse</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Rue de L'orne</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">44800 Saint-Herblain, France</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f49c8a] transition-colors duration-300">Horaires</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Lundi - Vendredi: 9h - 19h</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Weekend: Sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 bg-opacity-20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-white animate-bounce" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Une question ? Un projet ?
                  </h3>
                  <Sparkles className="h-8 w-8 text-white animate-pulse" />
                </div>
                <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                  Notre équipe est à votre écoute pour créer ensemble l'animation parfaite pour votre événement. 
                  Devis gratuit et personnalisé sous 24h !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
                    className="inline-flex items-center space-x-2 bg-white text-[#f49c8a] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                  >
                    <Mail className="h-5 w-5 group-hover:animate-bounce" />
                    <span>Demander un devis</span>
                  </a>
                  <div className="flex items-center space-x-2 text-white opacity-75">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Réponse sous 24h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#f49c8a]" />
              <span className="text-gray-300 text-sm font-medium">
                Service disponible dans toute la Loire-Atlantique
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;