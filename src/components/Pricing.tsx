import React from 'react';
import { Camera, Crown, Star, Check } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Photos, vid\u00E9os & GIFs illimit\u00E9s",
    "\u00C9cran tactile intuitif",
    "\u00C9clairage LED professionnel",
    "Partage num\u00E9rique illimit\u00E9",
    "Installation & d\u00E9sinstallation",
    "Accessoires & d\u00E9cors"
  ];

  const packages = [
    {
      name: "Soir\u00E9e",
      price: "200",
      impressions: "250 impressions",
      paper: "papier 10\u00D715 cm",
      icon: Camera,
      popular: false
    },
    {
      name: "Soir\u00E9e Premium",
      price: "300",
      impressions: "500 impressions",
      paper: "papier 10\u00D715 cm",
      icon: Crown,
      popular: true
    },
    {
      name: "Week-end",
      price: "450",
      impressions: "1000 impressions",
      paper: "papier 10\u00D715 cm",
      icon: Star,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-500 font-semibold text-sm tracking-wider uppercase mb-4">
            Tarifs
          </span>
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Nos <span className="text-gradient">formules</span> tout inclus
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Chaque formule inclut l'\u00E9quipement complet, l'installation et le partage num\u00E9rique illimit\u00E9. <strong className="text-primary-500">-15% en semaine !</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-7 transition-all duration-500 ${
                pkg.popular
                  ? 'bg-dark-900 text-white shadow-2xl shadow-dark-900/30 scale-[1.03] ring-1 ring-primary-500/30'
                  : 'bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary-500/30">
                    Plus Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  pkg.popular
                    ? 'bg-primary-500/20'
                    : 'bg-primary-50'
                }`}>
                  <pkg.icon className={`h-6 w-6 ${pkg.popular ? 'text-primary-400' : 'text-primary-500'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className={`text-5xl font-extrabold tracking-tight ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg font-medium ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>&euro;</span>
                </div>
                <p className={`text-sm mt-2 font-medium ${pkg.popular ? 'text-primary-300' : 'text-primary-500'}`}>
                  {pkg.impressions}
                </p>
                <p className={`text-xs ${pkg.popular ? 'text-white/40' : 'text-gray-400'}`}>
                  {pkg.paper}
                </p>
              </div>

              <ul className="space-y-3 mb-7">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className={`h-4 w-4 flex-shrink-0 ${pkg.popular ? 'text-primary-400' : 'text-primary-500'}`} />
                    <span className={`text-sm ${pkg.popular ? 'text-white/70' : 'text-gray-500'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:contact@mon-photobooth-nantes.fr?subject=R\u00E9servation formule ${pkg.name}`}
                className={`block w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                aria-label={`Choisir la formule ${pkg.name} \u00E0 ${pkg.price}\u20AC`}
              >
                Choisir cette formule
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
