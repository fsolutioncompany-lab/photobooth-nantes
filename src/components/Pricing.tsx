import React from 'react';
import { Check, Crown, Sparkles, Camera, Share2, Mail, Lightbulb, Heart, Star, Zap, Gift } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Soirée",
      price: "350€",
      duration: "250 impressions papier 10x15 cm",
      icon: Camera,
      popular: false
    },
    {
      name: "Soirée Premium",
      price: "450€",
      duration: "500 impressions papier 10x15 cm",
      icon: Crown,
      popular: true
    },
    {
      name: "Week-end",
      price: "850€",
      duration: "1000 impressions papier 10x15 cm",
      icon: Star,
      popular: false
    }
  ];

  const includedFeatures = [
    {
      icon: Camera,
      title: "Photos, vidéos & GIF à volonté",
      description: "pour capturer chaque instant"
    },
    {
      icon: Share2,
      title: "Partage illimité",
      description: "par e-mail et sur les réseaux sociaux"
    },
    {
      icon: Crown,
      title: "Installation & désinstallation",
      description: "sur place (Loire-Atlantique)"
    },
    {
      icon: Lightbulb,
      title: "Éclairage LED professionnel",
      description: "pour un rendu parfait"
    }
  ];

  const optionalFeatures = [
    "Cadre photo sur-mesure : logo, message ou couleurs de votre choix",
    "Kit d'accessoires fun : chapeaux, lunettes, déguisements",
    "Cadre photobooth ou arche décorative pour sublimer vos clichés"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Location Photobooth Nantes",
    "description": "Service de location de photobooth premium pour événements à Nantes et en Loire-Atlantique",
    "brand": {
      "@type": "Brand",
      "name": "BeHappy - Mon Photobooth Nantes"
    },
    "offers": packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.name,
      "price": pkg.price.replace('€', ''),
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "description": pkg.duration,
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Location Photobooth",
        "areaServed": {
          "@type": "City",
          "name": "Nantes"
        }
      }
    }))
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f49c8a] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/4 text-[#f49c8a] opacity-10 animate-bounce delay-500">
          <Camera className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-1/3 text-yellow-400 opacity-20 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-60 right-1/3 text-[#f49c8a] opacity-15 animate-bounce delay-1000">
          <Heart className="w-7 h-7" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#f49c8a] bg-opacity-10 px-6 py-3 rounded-full mb-6">
            <Zap className="h-5 w-5 text-[#f49c8a] animate-pulse" />
            <span className="text-[#f49c8a] font-semibold">Offres Premium</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-[#f49c8a] to-gray-900 bg-clip-text text-transparent">
            Nos offres de location photobooth
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
            <p className="text-xl text-gray-600 font-medium">
              Tout est inclus dans chaque location
            </p>
            <Sparkles className="h-6 w-6 text-[#f49c8a] animate-spin" style={{animationDuration: '3s'}} />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
          </div>
        </div>

        {/* Included Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10">
          {includedFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 group relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-yellow-300 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-[#f49c8a] transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
            <h3 className="text-3xl font-bold text-gray-900">Formules clés en main</h3>
            <Heart className="h-7 w-7 text-[#f49c8a] animate-bounce" />
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 relative z-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 group ${
                pkg.popular
                  ? 'bg-gradient-to-br from-[#f49c8a] to-[#e88b79] text-white shadow-2xl scale-105 border-2 border-yellow-300'
                  : 'bg-white hover:shadow-2xl border border-gray-200 hover:border-[#f49c8a]'
              }`}
            >
              {/* Glow effect for popular package */}
              {pkg.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-[#e88b79] rounded-3xl blur-xl opacity-20 -z-10 scale-110"></div>
              )}
              
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Plus Populaire</span>
                    <Star className="h-4 w-4" />
                  </span>
                </div>
              )}
              
              {/* Corner decoration for non-popular packages */}
              {!pkg.popular && (
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Gift className="h-5 w-5 text-[#f49c8a] animate-bounce" />
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  pkg.popular 
                    ? 'bg-white bg-opacity-20 shadow-lg' 
                    : 'bg-gradient-to-br from-[#f49c8a] to-[#e88b79] shadow-lg'
                }`}>
                  <pkg.icon className={`h-10 w-10 ${pkg.popular ? 'text-white' : 'text-white'}`} />
                </div>
                <h3 className={`text-3xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-5xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-[#f49c8a]'}`}>
                  {pkg.price}
                </div>
                <p className={`text-base font-medium ${pkg.popular ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
                  👉 {pkg.duration}
                </p>
              </div>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                pkg.popular
                  ? 'bg-white text-[#f49c8a] hover:bg-gray-100 shadow-lg'
                  : 'bg-gradient-to-r from-[#f49c8a] to-[#e88b79] text-white hover:from-[#e88b79] hover:to-[#f49c8a] shadow-lg'
              }`}>
                <a 
                  href={`mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis - Package ${pkg.name}`}
                  className="block w-full h-full"
                >
                  Choisir ce package
                </a>
              </button>
            </div>
          ))}
        </div>

        {/* Optional Features */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 mb-16 shadow-xl border border-gray-100 relative z-10 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 bg-opacity-5 rounded-full blur-2xl"></div>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
              <h3 className="text-3xl font-bold text-gray-900">Personnalisez votre expérience</h3>
              <Lightbulb className="h-7 w-7 text-[#f49c8a] animate-pulse" />
              <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#f49c8a] to-transparent"></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">(en option)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {optionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f49c8a] to-yellow-300 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] rounded-full p-1 mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center relative z-10">
          <p className="text-gray-600 mb-6 text-lg">
            Besoin d'une solution sur mesure ?
          </p>
          <a
            href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis sur mesure"
            className="inline-block bg-gradient-to-r from-[#f49c8a] to-[#e88b79] text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-[#e88b79] hover:to-[#f49c8a] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            Contactez-nous pour un devis personnalisé
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </div>
    </section>
  );
};

export default Pricing;