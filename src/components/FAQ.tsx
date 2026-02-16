import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) =>
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );

  const faqData = [
    {
      question: "Qu'est-ce qui est inclus dans la location de photobooth à Nantes ?",
      answer: "Chaque location comprend l'équipement complet (borne photo, écran tactile, imprimante), l'éclairage LED professionnel, l'installation et la désinstallation sur site, le partage numérique illimité par email et réseaux sociaux, ainsi que les impressions papier 10×15 cm selon la formule choisie."
    },
    {
      question: "Quels sont les tarifs de location de photobooth ?",
      answer: "Nos tarifs sont de 200€ pour la formule Soirée (250 impressions), 300€ pour la Soirée Premium (500 impressions) et 450€ pour le Week-end (1000 impressions). Bénéficiez de -15% pour les événements en semaine !"
    },
    {
      question: "Dans quelles zones intervenez-vous autour de Nantes ?",
      answer: "Nous intervenons à Nantes, Saint-Herblain et dans toute la Loire-Atlantique (44). Nous couvrons également les départements limitrophes (Vendée, Maine-et-Loire, Morbihan) sur demande."
    },
    {
      question: "Comment réserver un photobooth pour mon événement ?",
      answer: "La réservation est simple : contactez-nous par email à contact@mon-photobooth-nantes.fr ou via notre formulaire. Nous vous envoyons un devis personnalisé gratuit sous 24h. Un acompte de 30% confirme votre réservation."
    },
    {
      question: "Le photobooth est-il adapté pour un mariage à Nantes ?",
      answer: "Notre photobooth est idéal pour les mariages. Nous proposons une personnalisation complète des cadres et filtres aux couleurs de votre événement, un livre d'or numérique, des accessoires premium et un animateur optionnel pour garantir une ambiance festive."
    },
    {
      question: "Peut-on personnaliser les impressions du photobooth ?",
      answer: "Oui, toutes nos formules incluent la personnalisation des impressions. Vous pouvez intégrer votre logo, les prénoms des mariés, la date de l'événement, et choisir parmi de nombreux templates et filtres."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50/50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-500 font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Tout ce que vous devez savoir sur la location de photobooth à Nantes
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openItems.includes(index) ? 'border-primary-200 shadow-md shadow-primary-500/5' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 rounded-xl transition-colors"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 text-[15px]">{item.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openItems.includes(index) ? 'bg-primary-500 text-white rotate-0' : 'bg-gray-100 text-gray-400'
                }`}>
                  {openItems.includes(index) ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-5 text-gray-500 leading-relaxed text-[15px]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
