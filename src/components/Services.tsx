import React from 'react';
import { Camera, Users, Settings, Heart, Gift, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Borne Photo Premium",
      description: "Équipement professionnel dernière génération avec impression instantanée haute qualité et écran tactile intuitif.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Users,
      title: "Animateur Professionnel",
      description: "Un animateur dédié pour guider vos invités, distribuer les accessoires et garantir une ambiance festive.",
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Settings,
      title: "Personnalisation Complète",
      description: "Décors, filtres et cadres personnalisés aux couleurs de votre événement. Votre logo, vos prénoms, votre style.",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Heart,
      title: "Photobooth Mariage",
      description: "Packages dédiés pour votre jour J : livre d'or numérique, souvenirs personnalisés, accessoires premium.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Gift,
      title: "Événements d'Entreprise",
      description: "Solutions corporate sur mesure pour séminaires, inaugurations, team buildings et soirées d'entreprise à Nantes.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Sparkles,
      title: "Anniversaires & Fêtes",
      description: "Rendez vos célébrations inoubliables avec nos décors thématiques, accessoires ludiques et impressions illimitées.",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50/50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-500 font-semibold text-sm tracking-wider uppercase mb-4">
            Nos Services
          </span>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Location de Photobooth pour{' '}
            <span className="text-gradient">tous vos événements</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Des solutions complètes de location de borne photo à Nantes et en Loire-Atlantique.
            Qualité premium, service personnalisé, souvenirs garantis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis personnalisé"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
            aria-label="Demander un devis personnalisé pour la location de photobooth"
          >
            <span>Demander un devis personnalisé</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
