import React from 'react';
import { Camera, Crown, Star, Check, Sparkles, Heart, Zap, Lightbulb, Gift } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Soirée",
      price: "200€",
      duration: "250 impressions papier 10x15 cm",
      icon: Camera,
      popular: false
    },
    {
      name: "Soirée Premium",
      price: "300€",
      duration: "500 impressions papier 10x15 cm",
      icon: Crown,
      popular: true
    },
    {
      name: "Week-end",
      price: "450€",
      duration: "1000 impressions papier 10x15 cm",
      icon: Star,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos offres de location</h2>
          <p className="text-xl text-gray-600">Tout est inclus dans chaque formule</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative rounded-3xl p-8 border transition-all ${pkg.popular ? 'bg-gradient-to-br from-[#f49c8a] to-[#e88b79] text-white shadow-2xl scale-105' : 'bg-white hover:border-[#f49c8a]'}`}>
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">Plus Populaire</span>
                </div>
              )}
              <div className="text-center mb-8">
                <pkg.icon className={`h-12 w-12 mx-auto mb-4 ${pkg.popular ? 'text-white' : 'text-[#f49c8a]'}`} />
                <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-5xl font-bold mb-4">{pkg.price}</div>
                <p className="text-base">{pkg.duration}</p>
              </div>
              <a href={`mailto:contact@mon-photobooth-nantes.fr?subject=Package ${pkg.name}`} className={`block w-full py-4 rounded-full text-center font-semibold transition-transform hover:scale-105 ${pkg.popular ? 'bg-white text-[#f49c8a]' : 'bg-[#f49c8a] text-white'}`}>Choisir ce package</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
