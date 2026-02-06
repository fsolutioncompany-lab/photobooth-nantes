import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Camera, Clock, MapPin, Euro, Users, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const toggleItem = (index: number) => setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);

  const faqData = [
    {
      icon: Camera,
      question: "Qu'est-ce qui est inclus dans la location ?",
      answer: "L'équipement complet, l'écran tactile, l'éclairage LED, l'installation/désinstallation et le partage numérique illimité."
    },
    {
      icon: Euro,
      question: "Quels sont les tarifs ?",
      answer: "Nos tarifs sont de 200€ pour la formule 'Soirée' (250 impressions), 300€ pour la 'Soirée Premium' (500 impressions) et 450€ pour le 'Week-end' (1000 impressions). -15% en semaine !"
    },
    {
      icon: MapPin,
      question: "Où intervenez-vous ?",
      answer: "Nantes, Saint-Herblain et toute la Loire-Atlantique."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <button onClick={() => toggleItem(index)} className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50">
                <span className="font-bold text-lg">{item.question}</span>
                {openItems.includes(index) ? <Minus className="text-[#f49c8a]" /> : <Plus className="text-gray-400" />}
              </button>
              {openItems.includes(index) && <div className="px-8 pb-6 text-gray-600">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
