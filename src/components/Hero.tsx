import React from 'react';
import { ArrowRight, Star, MapPin, Users, Sparkles, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://mon-photobooth-nantes.fr/photobooth-nantes.png"
          alt="Location photobooth premium a Nantes pour mariages et evenements"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary-500/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent-500/8 rounded-full blur-[120px] animate-float delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-400/5 rounded-full blur-[80px] animate-float delay-600"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-accent-400" />
            <span className="text-sm font-medium text-white/80">N&deg;1 de la location photobooth &agrave; Nantes</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
            Location de{' '}
            <span className="text-gradient">Photobooth</span>
            <br />
            <span className="text-white">Premium &agrave; Nantes</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Cr&eacute;ez des souvenirs inoubliables pour vos mariages, anniversaires et &eacute;v&eacute;nements
            d'entreprise avec notre borne photo professionnelle.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <a
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
              className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 flex items-center justify-center space-x-3"
              aria-label="Demander un devis gratuit pour la location d'un photobooth"
            >
              <span>Demander un Devis Gratuit</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="group glass text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/15 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Camera className="h-5 w-5" />
              <span>Voir nos r&eacute;alisations</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-500">
            <div className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-accent-400 fill-current" />
                ))}
              </div>
              <p className="text-white font-bold text-lg">5/5</p>
              <p className="text-white/50 text-sm">47 avis clients</p>
            </div>
            <div className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-primary-400" />
              </div>
              <p className="text-white font-bold text-lg">Nantes &amp; R&eacute;gion</p>
              <p className="text-white/50 text-sm">Loire-Atlantique (44)</p>
            </div>
            <div className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-accent-400" />
              </div>
              <p className="text-white font-bold text-lg">500+ events</p>
              <p className="text-white/50 text-sm">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
