import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Calculator, Percent, CheckCircle, Sparkles, Gift } from 'lucide-react';

const BookingSimulator = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isWeekday, setIsWeekday] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const packages = [
    { id: 'soiree', name: 'Soirée', price: 350, description: '250 impressions papier' },
    { id: 'premium', name: 'Soirée Premium', price: 450, description: '500 impressions papier' },
    { id: 'weekend', name: 'Week-end ou 2 Jours', price: 850, description: '1000 impressions papier' }
  ];

  const checkIfWeekday = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    // 1-5 = Monday to Friday (weekdays)
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  };

  useEffect(() => {
    if (selectedDate) {
      const weekday = checkIfWeekday(selectedDate);
      setIsWeekday(weekday);
      setShowResult(selectedPackage !== '' && selectedDate !== '');
    }
  }, [selectedDate, selectedPackage]);

  const getSelectedPackageDetails = () => {
    return packages.find(pkg => pkg.id === selectedPackage);
  };

  const calculatePrice = () => {
    const pkg = getSelectedPackageDetails();
    if (!pkg) return { original: 0, final: 0, discount: 0 };
    
    const original = pkg.price;
    const discount = isWeekday ? original * 0.15 : 0;
    const final = original - discount;
    
    return { original, final, discount };
  };

  const { original, final, discount } = calculatePrice();
  const selectedPkg = getSelectedPackageDetails();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-300 bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f49c8a] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 right-1/4 text-[#f49c8a] opacity-10 animate-bounce delay-500">
          <Calculator className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-1/3 text-green-400 opacity-20 animate-pulse">
          <Percent className="w-6 h-6" />
        </div>
        <div className="absolute top-60 right-1/3 text-[#f49c8a] opacity-15 animate-bounce delay-1000">
          <Gift className="w-7 h-7" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <Calculator className="h-5 w-5 text-green-600 animate-pulse" />
            <span className="text-green-600 font-semibold">Simulateur de Prix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculez votre tarif
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez le prix de votre location photobooth avec notre réduction spéciale semaine
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 bg-opacity-5 rounded-full blur-2xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {/* Left side - Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-[#f49c8a]" />
                  <span>Choisissez votre formule</span>
                </label>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPackage === pkg.id
                          ? 'border-[#f49c8a] bg-[#f49c8a] bg-opacity-10 shadow-lg'
                          : 'border-gray-200 hover:border-[#f49c8a] hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                          <span className="text-2xl font-bold text-[#f49c8a]">{pkg.price}€</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{pkg.description}</p>
                      </div>
                      {selectedPackage === pkg.id && (
                        <CheckCircle className="h-6 w-6 text-[#f49c8a] ml-3 animate-pulse" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#f49c8a]" />
                  <span>Date de votre événement</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f49c8a] focus:border-transparent transition-all text-lg"
                />
              </div>

              {isWeekday && selectedDate && (
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 animate-fade-in-up">
                  <div className="flex items-center space-x-2 text-green-700">
                    <Gift className="h-5 w-5 animate-bounce" />
                    <span className="font-semibold">Réduction semaine applicable !</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Votre événement a lieu en semaine, profitez de -15% sur votre location
                  </p>
                </div>
              )}
            </div>

            {/* Right side - Result */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-[#f49c8a]" />
                <span>Récapitulatif</span>
              </h3>

              {showResult && selectedPkg ? (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Formule sélectionnée</h4>
                    <p className="text-[#f49c8a] font-bold text-lg">{selectedPkg.name}</p>
                    <p className="text-gray-600 text-sm">{selectedPkg.description}</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Date sélectionnée</h4>
                    <p className="text-gray-700">
                      {new Date(selectedDate).toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    {isWeekday && (
                      <div className="flex items-center space-x-1 mt-2">
                        <Percent className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-semibold text-sm">Jour de semaine - Réduction applicable</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-xl p-4 text-white">
                    <h4 className="font-semibold mb-3">Calcul du prix</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Prix de base</span>
                        <span className={isWeekday ? 'line-through opacity-75' : 'font-bold'}>{original}€</span>
                      </div>
                      {isWeekday && (
                        <>
                          <div className="flex justify-between items-center text-yellow-200">
                            <span>Réduction semaine (-15%)</span>
                            <span>-{discount.toFixed(0)}€</span>
                          </div>
                          <div className="border-t border-white border-opacity-30 pt-2 mt-2">
                            <div className="flex justify-between items-center text-xl font-bold">
                              <span>Prix final</span>
                              <span>{final}€</span>
                            </div>
                          </div>
                        </>
                      )}
                      {!isWeekday && (
                        <div className="border-t border-white border-opacity-30 pt-2 mt-2">
                          <div className="flex justify-between items-center text-xl font-bold">
                            <span>Prix final</span>
                            <span>{final}€</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const subject = `Réservation ${selectedPkg.name} - ${new Date(selectedDate).toLocaleDateString('fr-FR')}`;
                      const body = `Bonjour,\n\nJe souhaite réserver la formule ${selectedPkg.name} pour le ${new Date(selectedDate).toLocaleDateString('fr-FR')}.\n\nPrix calculé : ${final}€${isWeekday ? ' (avec réduction semaine -15%)' : ''}\n\nCordialement`;
                      window.location.href = `mailto:contact@mon-photobooth-nantes.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                    className="w-full bg-white text-[#f49c8a] px-6 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Réserver maintenant
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-500">
                    Sélectionnez une formule et une date pour voir le prix
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            💡 <strong>Astuce :</strong> Réservez en semaine (lundi au vendredi) et économisez 15% !
          </p>
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-yellow-600" />
            <span className="text-yellow-700 text-sm font-medium">
              Offre valable toute l'année sur nos formules
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSimulator;