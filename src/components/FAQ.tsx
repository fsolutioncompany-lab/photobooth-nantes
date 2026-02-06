import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Camera, Clock, MapPin, Euro, Users, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      icon: Camera,
      question: "Qu'est-ce qui est inclus dans la location de photobooth à Nantes ?",
      answer: "Notre service de location photobooth à Nantes inclut : l'équipement professionnel avec écran tactile, l'impression instantanée haute qualité, l'éclairage LED professionnel, l'installation et la désinstallation sur place dans toute la Loire-Atlantique, le partage illimité par email et réseaux sociaux, ainsi que la création de photos, vidéos et GIF à volonté."
    },
    {
      icon: Euro,
      question: "Quels sont les tarifs de location photobooth à Nantes ?",
      answer: "Nos tarifs débutent à 350€ pour la formule '2 jours' (250 impressions), 450€ pour la 'Soirée Premium' (500 impressions) et 850€ pour le 'Week-end' (1000 impressions). Une réduction de 15% est appliquée pour les événements en semaine (lundi au vendredi). Tous nos tarifs incluent l'installation, la désinstallation et l'animation."
    },
    {
      icon: MapPin,
      question: "Dans quelles zones intervenez-vous autour de Nantes ?",
      answer: "Nous intervenons dans toute la Loire-Atlantique et les départements limitrophes : Nantes, Saint-Herblain, Rezé, Saint-Nazaire, La Baule, Pornic, Clisson, Ancenis, et toutes les communes environnantes. L'installation et la désinstallation sont incluses dans nos tarifs pour toute la région nantaise."
    },
    {
      icon: Clock,
      question: "Combien de temps à l'avance faut-il réserver votre photobooth ?",
      answer: "Nous recommandons de réserver votre photobooth au minimum 2 semaines à l'avance, surtout pour les weekends et la haute saison (mai à septembre). Pour les événements en semaine, une réservation 1 semaine avant peut suffire. Plus vous réservez tôt, plus vous avez de chances d'obtenir votre date préférée."
    },
    {
      icon: Users,
      question: "Pour quels types d'événements louez-vous vos photobooths ?",
      answer: "Nos photobooths sont parfaits pour tous types d'événements à Nantes : mariages, anniversaires, baptêmes, communions, événements d'entreprise, séminaires, inaugurations, fêtes privées, soirées étudiantes, et célébrations familiales. Nous adaptons la décoration et les accessoires selon le thème de votre événement."
    },
    {
      icon: Sparkles,
      question: "Peut-on personnaliser le photobooth selon notre événement ?",
      answer: "Absolument ! Nous proposons plusieurs options de personnalisation : cadres photo sur-mesure avec votre logo ou message, kit d'accessoires thématiques (chapeaux, lunettes, déguisements), décors et arrière-plans personnalisés, et même des filtres numériques adaptés à votre événement. Contactez-nous pour discuter de vos besoins spécifiques."
    },
    {
      icon: Camera,
      question: "Quelle est la qualité des photos du photobooth ?",
      answer: "Nos photobooths utilisent un équipement professionnel avec appareil photo haute résolution, éclairage LED professionnel pour un rendu parfait, et impression instantanée sur papier photo de qualité supérieure format 10x15 cm. Toutes les photos sont également disponibles en haute définition pour le partage numérique."
    },
    {
      icon: HelpCircle,
      question: "Faut-il prévoir un animateur pour le photobooth ?",
      answer: "L'animateur est proposé en option. Notre photobooth est conçu pour être intuitif et autonome avec son écran tactile. Cependant, un animateur peut être un plus pour guider vos invités, créer une ambiance festive et s'assurer du bon déroulement. C'est particulièrement recommandé pour les grands événements ou si vous souhaitez une animation plus dynamique."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f49c8a] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/4 text-[#f49c8a] opacity-10 animate-bounce delay-500">
          <HelpCircle className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-1/3 text-blue-400 opacity-20 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute top-60 right-1/3 text-[#f49c8a] opacity-15 animate-bounce delay-1000">
          <Camera className="w-7 h-7" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <HelpCircle className="h-5 w-5 text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-semibold">Questions Fréquentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FAQ Photobooth Nantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Toutes les réponses à vos questions sur la location de photobooth à Nantes et en Loire-Atlantique
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-4 flex-1 min-w-0">
                  <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] p-3 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#f49c8a] transition-colors duration-300 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openItems.includes(index) ? (
                    <Minus className="h-6 w-6 text-[#f49c8a] group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-[#f49c8a] group-hover:scale-110 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openItems.includes(index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 sm:px-8 pb-6">
                  <div className="pl-16 sm:pl-20">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-l-4 border-[#f49c8a]">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Notre équipe est là pour vous aider ! Contactez-nous pour obtenir des informations personnalisées sur votre projet.
            </p>
            <a 
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Question sur la location photobooth"
              className="inline-block bg-white text-[#f49c8a] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Posez votre question
            </a>
          </div>
        </div>

        {/* SEO Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;