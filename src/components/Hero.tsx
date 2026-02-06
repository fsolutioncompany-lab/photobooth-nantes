import React from 'react';
import { ArrowRight, Star, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] via-[#f5a693] to-[#f7b29c]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particules flottantes animées */}
        <div className="absolute top-10 left-4 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-32 right-4 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-60 left-1/4 sm:left-1/3 w-3 sm:w-5 h-3 sm:h-5 bg-white bg-opacity-40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-60 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-300 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-80 right-4 sm:right-10 w-3 sm:w-4 h-3 sm:h-4 bg-white bg-opacity-30 rounded-full animate-pulse delay-300"></div>
        
        {/* Formes géométriques animées */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white bg-opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-white bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-yellow-300 bg-opacity-5 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Lignes décoratives animées */}
        <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-white via-white to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-300 via-yellow-300 to-transparent opacity-30 animate-pulse delay-1000"></div>
        
        {/* Éléments flottants en forme de camera */}
        <div className="absolute top-24 right-1/4 text-white opacity-20 animate-bounce delay-200 hidden sm:block">
          <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586l-.707-.707A1 1 0 0013 4H7a1 1 0 00-.707.293L5.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 text-yellow-300 opacity-30 animate-bounce delay-1000 hidden sm:block">
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586l-.707-.707A1 1 0 0013 4H7a1 1 0 00-.707.293L5.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto px-2">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up mt-16 sm:mt-8 md:mt-0">
            Immortalisez vos 
            <span className="block text-yellow-300 animate-pulse">moments magiques</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300 px-4">
            Location de photobooth premium à Nantes pour tous vos événements. 
            Créez des souvenirs inoubliables avec nos installations dernière génération.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-500 px-4">
            <a 
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
              className="bg-white text-[#f49c8a] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 animate-bounce-subtle"
            >
              <span>Demander un Devis</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-[#f49c8a] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-subtle delay-200">
              Voir la galerie
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto animate-fade-in-up delay-700 px-4">
            <div className="text-center transform hover:scale-110 transition-all duration-300 py-2">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star key={star} className={`h-4 sm:h-5 w-4 sm:w-5 text-yellow-300 fill-current animate-pulse`} style={{animationDelay: `${index * 100}ms`}} />
                ))}
              </div>
              <p className="text-white text-xs sm:text-sm">Plus de 500 événements</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 py-2">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-yellow-300 animate-bounce" />
                <span className="text-xl sm:text-2xl font-bold text-white">Nantes</span>
              </div>
              <p className="text-white text-xs sm:text-sm">et toute la région</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300 py-2">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="h-5 sm:h-6 w-5 sm:w-6 text-yellow-300 animate-pulse" />
                <span className="text-xl sm:text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-white text-xs sm:text-sm">Support client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;