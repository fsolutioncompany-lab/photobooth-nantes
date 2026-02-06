import React from 'react';
import { Camera, Users, Settings, Heart, Gift, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "PhotoBooth Premium",
      description: "Équipement professionnel avec impression instantanée haute qualité et écran tactile intuitif."
    },
    {
      icon: Users,
      title: "Animateur en Option",
      description: "Un animateur professionnel pour guider vos invités et garantir une ambiance festive."
    },
    {
      icon: Settings,
      title: "Personnalisation",
      description: "Décors, filtres et cadres personnalisés selon le thème de votre événement."
    },
    {
      icon: Heart,
      title: "Mariages",
      description: "Packages spéciaux pour votre jour J avec livre d'or numérique et souvenirs personnalisés."
    },
    {
      icon: Gift,
      title: "Événements Pro",
      description: "Solutions corporate pour séminaires, inaugurations et événements d'entreprise."
    },
    {
      icon: Sparkles,
      title: "Anniversaires",
      description: "Rendez vos fêtes inoubliables avec nos décors thématiques et accessoires ludiques."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos événements à Nantes et sa région. 
            Qualité premium, service personnalisé, souvenirs garantis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="bg-[#f49c8a] bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-[#f49c8a]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis personnalisé"
            className="inline-block bg-[#f49c8a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e88b79] transition-all duration-300 transform hover:scale-105"
          >
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;