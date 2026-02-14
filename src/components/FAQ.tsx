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
      question: "Qu'est-ce qui est inclus dans la location de photobooth \u00E0 Nantes ?",
      answer: "Chaque location comprend l'\u00E9quipement complet (borne photo, \u00E9cran tactile, imprimante), l'\u00E9clairage LED professionnel, l'installation et la d\u00E9sinstallation sur site, le partage num\u00E9rique illimit\u00E9 par email et r\u00E9seaux sociaux, ainsi que les impressions papier 10\u00D715 cm selon la formule choisie."
    },
    {
      question: "Quels sont les tarifs de location de photobooth ?",
      answer: "Nos tarifs sont de 200\u20AC pour la formule Soir\u00E9e (250 impressions), 300\u20AC pour la Soir\u00E9e Premium (500 impressions) et 450\u20AC pour le Week-end (1000 impressions). B\u00E9n\u00E9ficiez de -15% pour les \u00E9v\u00E9nements en semaine !"
    },
    {
      question: "Dans quelles zones intervenez-vous autour de Nantes ?",
      answer: "Nous intervenons \u00E0 Nantes, Saint-Herblain et dans toute la Loire-Atlantique (44). Nous couvrons \u00E9galement les d\u00E9partements limitrophes (Vend\u00E9e, Maine-et-Loire, Morbihan) sur demande."
    },
    {
      question: "Comment r\u00E9server un photobooth pour mon \u00E9v\u00E9nement ?",
      answer: "La r\u00E9servation est simple : contactez-nous par email \u00E0 contact@mon-photobooth-nantes.fr ou via notre formulaire. Nous vous envoyons un devis personnalis\u00E9 gratuit sous 24h. Un acompte de 30% confirme votre r\u00E9servation."
    },
    {
      question: "Le photobooth est-il adapt\u00E9 pour un mariage \u00E0 Nantes ?",
      answer: "Notre photobooth est id\u00E9al pour les mariages. Nous proposons une personnalisation compl\u00E8te des cadres et filtres aux couleurs de votre \u00E9v\u00E9nement, un livre d'or num\u00E9rique, des accessoires premium et un animateur optionnel pour garantir une ambiance festive."
    },
    {
      question: "Peut-on personnaliser les impressions du photobooth ?",
      answer: "Oui, toutes nos formules incluent la personnalisation des impressions. Vous pouvez int\u00E9grer votre logo, les pr\u00E9noms des mari\u00E9s, la date de l'\u00E9v\u00E9nement, et choisir parmi de nombreux templates et filtres."
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
            Questions <span className="text-gradient">fr\u00E9quentes</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Tout ce que vous devez savoir sur la location de photobooth \u00E0 Nantes
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
