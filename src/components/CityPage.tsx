import React, { useEffect } from 'react';
import { Camera, MapPin, Check, Users, Heart, Gift, Sparkles, Clock, Euro, Settings, Star, ArrowRight, Mail } from 'lucide-react';
import type { CityData } from '../data/cities';

interface CityPageProps {
  city: CityData;
}

const CityPage: React.FC<CityPageProps> = ({ city }) => {
  useEffect(() => {
    document.title = city.seoTitle;

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) {
        el.setAttribute('content', content);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        el.setAttribute('content', content);
        document.head.appendChild(el);
      }
    };

    setMeta('description', city.seoDescription);
    setMeta('keywords', city.seoKeywords);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1');
    setMeta('og:title', city.seoTitle, true);
    setMeta('og:description', city.seoDescription, true);
    setMeta('og:url', `https://mon-photobooth-nantes.fr/${city.slug}`, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:title', city.seoTitle);
    setMeta('twitter:description', city.seoDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://mon-photobooth-nantes.fr/${city.slug}`);
    }

    return () => {
      document.title = "Location Photobooth Nantes | Animation Photo Premium pour Mariages & Événements";
    };
  }, [city]);

  const advantages = [
    {
      icon: Heart,
      title: "Mariage",
      description: `Animation photo incontournable pour votre mariage à ${city.name}. Souvenirs personnalisés pour tous vos invités.`
    },
    {
      icon: Gift,
      title: "Anniversaire",
      description: `Fêtez votre anniversaire à ${city.name} avec une borne photo fun et des impressions instantanées à partager.`
    },
    {
      icon: Users,
      title: "Événement professionnel",
      description: `Valorisez votre image corporate à ${city.name} avec des impressions personnalisées à votre marque.`
    },
    {
      icon: Sparkles,
      title: "Fête familiale",
      description: `Rassemblez toutes les générations autour d'une activité créative lors de votre fête à ${city.name}.`
    }
  ];

  const features = [
    { feature: "Impression instantanée", standard: true, advanced: true },
    { feature: "Impression illimitée", standard: false, advanced: true },
    { feature: "Personnalisation cadres/fonds", standard: "Basique", advanced: "Avancée" },
    { feature: "Animation GIF/fond vert", standard: false, advanced: true }
  ];

  const tips = [
    "Vérifiez toujours le contenu du forfait proposé par le prestataire",
    "Privilégiez les machines offrant une impression illimitée",
    "Sollicitez des accessoires variés pour stimuler la créativité des participants",
    "Optez pour l'option récupération numérique des clichés après la fête"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Location de Photobooth à ${city.name}`,
    "description": city.seoDescription,
    "url": `https://mon-photobooth-nantes.fr/${city.slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BeHappy - Mon Photobooth Nantes",
      "image": "https://mon-photobooth-nantes.fr/photobooth-nantes.png",
      "url": "https://mon-photobooth-nantes.fr",
      "telephone": "+33-XXX-XXX-XXX",
      "email": "contact@mon-photobooth-nantes.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rue de L'orne",
        "addressLocality": "Saint-Herblain",
        "postalCode": "44800",
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "address": {
        "@type": "PostalAddress",
        "postalCode": city.postalCode,
        "addressRegion": "Loire-Atlantique",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": city.coordinates.lat,
        "longitude": city.coordinates.lng
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Formules Photobooth ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Formule Soirée", "description": "250 impressions papier 10x15 cm, photos, vidéos et GIF illimités" },
          "price": "200", "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Formule Soirée Premium", "description": "500 impressions papier 10x15 cm, éclairage LED professionnel" },
          "price": "300", "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Formule Week-end", "description": "1000 impressions papier 10x15 cm, prestation complète" },
          "price": "450", "priceCurrency": "EUR"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://mon-photobooth-nantes.fr/" },
      { "@type": "ListItem", "position": 2, "name": `Photobooth ${city.name}`, "item": `https://mon-photobooth-nantes.fr/${city.slug}` }
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-400 bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-500 bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Fil d'Ariane">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-primary-500 transition-colors">Accueil</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-primary-500 font-medium">Photobooth {city.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-5 w-5 text-primary-500 animate-pulse" />
            <span className="text-primary-500 font-semibold">{city.name} ({city.postalCode})</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Location de photobooth à <span className="text-gradient">{city.name}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {city.heroDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="inline-flex items-center space-x-1 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600">
              <MapPin className="h-3.5 w-3.5 text-primary-500" />
              <span>À {city.distanceFromNantes} de Nantes</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600">
              <Users className="h-3.5 w-3.5 text-primary-500" />
              <span>{city.population} habitants</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-sm text-emerald-600">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>5/5 - 47 avis clients</span>
            </span>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            Pourquoi louer un photobooth à {city.name} ?
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            {city.whyChooseText.map((text, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0">
                {text}
              </p>
            ))}
            <div className="text-center mt-8">
              <a
                href={`mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis ${city.name}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
              >
                <Mail className="h-5 w-5" />
                <span>Devis gratuit pour {city.name}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Lieux populaires */}
        {city.localVenues.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
              Lieux de réception populaires à {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.localVenues.map((venue, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-50 p-2 rounded-xl">
                      <MapPin className="h-5 w-5 text-primary-500" />
                    </div>
                    <span className="font-semibold text-gray-900">{venue}</span>
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-5 shadow-lg text-white flex items-center justify-center">
                <span className="font-semibold text-center">+ tous les lieux de {city.name} et alentours</span>
              </div>
            </div>
          </div>
        )}

        {/* Types of Photobooths */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Les types de photobooths disponibles à {city.name}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Camera className="h-7 w-7 text-primary-500" />
                <span>Quel format choisir ?</span>
              </h3>
              <div className="space-y-4">
                {[
                  { bold: "Borne photo traditionnelle :", text: "dotée d'un écran tactile et d'une imprimante intégrée" },
                  { bold: "Photobooth en bois :", text: "apprécié pour son cachet vintage et décoratif" },
                  { bold: "Bornes selfies mobiles :", text: "offrent flexibilité et compacité pour tous les espaces" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-primary-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-gray-700"><strong>{item.bold}</strong> {item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Settings className="h-7 w-7 text-primary-500" />
                <span>Fonctionnalités incontournables</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Impression instantanée ou illimitée des clichés",
                  "Création de GIFs animés pour un rendu dynamique",
                  "Personnalisation des cadres photo et ajout de logos",
                  "Accessoires fun (chapeaux, lunettes, déguisements)",
                  "Partage instantané par email et réseaux sociaux"
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-primary-500 rounded-full p-1 mt-1 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Un photobooth pour chaque événement à {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group text-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                  <advantage.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            Tarifs location photobooth à {city.name}
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Toutes nos formules incluent la livraison gratuite à {city.name}, l'installation, l'assistance et la récupération du matériel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Soirée", price: "200", impressions: "250 impressions", highlight: false },
              { name: "Soirée Premium", price: "300", impressions: "500 impressions", highlight: true },
              { name: "Week-end", price: "450", impressions: "1000 impressions", highlight: false }
            ].map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-6 text-center transition-all duration-300 ${pkg.highlight ? 'bg-dark-900 text-white shadow-2xl scale-[1.03]' : 'bg-white border border-gray-200 shadow-sm'}`}>
                <h3 className={`text-lg font-bold mb-2 ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span className={`text-4xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
                  <span className={`text-lg ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>&euro;</span>
                </div>
                <p className={`text-sm mb-4 ${pkg.highlight ? 'text-primary-300' : 'text-primary-500'}`}>{pkg.impressions}</p>
                <a
                  href={`mailto:contact@mon-photobooth-nantes.fr?subject=Réservation ${pkg.name} - ${city.name}`}
                  className={`block py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${pkg.highlight ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-emerald-600 font-semibold">
            -15% de réduction pour les événements en semaine !
          </p>
        </div>

        {/* Technical Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Comparatif des solutions photobooth
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Fonctionnalité</th>
                  <th className="text-center py-4 px-4 font-bold text-primary-500">Photobooth standard</th>
                  <th className="text-center py-4 px-4 font-bold text-primary-500">Photobooth avancé</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{feature.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? <span className="text-emerald-600 font-bold">Oui</span> : <span className="text-gray-300 font-bold">Non</span>
                      ) : (
                        <span className="text-blue-600 font-medium">{feature.standard}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.advanced === 'boolean' ? (
                        feature.advanced ? <span className="text-emerald-600 font-bold">Oui</span> : <span className="text-gray-300 font-bold">Non</span>
                      ) : (
                        <span className="text-purple-600 font-medium">{feature.advanced}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Practical Tips */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Conseils pour réussir votre location de photobooth à {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-5 text-white shadow-lg shadow-primary-500/10">
                <div className="flex items-start space-x-3">
                  <div className="bg-white rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="h-3 w-3 text-primary-500" />
                  </div>
                  <p className="font-medium">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-tight">
            Questions fréquentes sur le photobooth à {city.name}
          </h2>
          <div className="space-y-6">
            {city.faqQuestions.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start space-x-3">
                  <span className="bg-primary-50 text-primary-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-extrabold">{index + 1}</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Areas */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
            Nous intervenons aussi autour de {city.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {city.nearbyAreas.map((area, index) => (
              <span key={index} className="bg-white border border-gray-200 px-5 py-2.5 rounded-full text-gray-700 font-medium hover:border-primary-300 hover:text-primary-500 transition-colors">
                {area}
              </span>
            ))}
            <a href="/#contact" className="bg-primary-50 border border-primary-200 px-5 py-2.5 rounded-full text-primary-600 font-medium hover:bg-primary-100 transition-colors">
              Autre ville ? Contactez-nous
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">
                Prêt à animer votre événement à {city.name} ?
              </h2>
              <p className="text-lg mb-8 text-white/60 max-w-xl mx-auto">
                Contactez-nous pour un devis personnalisé et gratuit. Livraison et installation incluses à {city.name} et ses alentours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis photobooth ${city.name}`}
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center space-x-2 text-white/40">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </div>
    </section>
  );
};

export default CityPage;
