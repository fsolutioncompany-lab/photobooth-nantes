import React from 'react';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      lines: ["contact@mon-photobooth-nantes.fr", "mon-photobooth-nantes.fr"]
    },
    {
      icon: MapPin,
      title: "Adresse",
      lines: ["Rue de L'orne", "44800 Saint-Herblain, France"]
    },
    {
      icon: Clock,
      title: "Horaires",
      lines: ["Lundi - Vendredi : 9h - 19h", "Weekend : sur rendez-vous"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary-500/3 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-400 font-semibold text-sm tracking-wider uppercase mb-4">
            Contact
          </span>
          <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Parlons de votre <span className="text-gradient">projet</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Contactez notre \u00E9quipe pour un devis personnalis\u00E9 et gratuit. R\u00E9ponse garantie sous 24h.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                  <card.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <div className="space-y-1">
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-white/50 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl p-8 md:p-10 border border-primary-500/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Pr\u00EAt \u00E0 r\u00E9server votre photobooth ?
              </h3>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Notre \u00E9quipe est \u00E0 votre \u00E9coute pour cr\u00E9er ensemble l'animation parfaite pour votre \u00E9v\u00E9nement \u00E0 Nantes.
                Devis gratuit et personnalis\u00E9 sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth"
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
                  aria-label="Envoyer un email pour demander un devis gratuit"
                >
                  <Mail className="h-5 w-5" />
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center space-x-2 text-white/40">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">R\u00E9ponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Zone info */}
          <div className="text-center mt-10">
            <p className="text-white/30 text-sm">
              Service disponible \u00E0 Nantes, Saint-Herblain et dans toute la Loire-Atlantique (44)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
