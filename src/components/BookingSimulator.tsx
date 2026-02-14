import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Calculator, CheckCircle, Sparkles, Tag } from 'lucide-react';

const BookingSimulator = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isWeekday, setIsWeekday] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const packages = [
    { id: 'soiree', name: 'Soir\u00E9e', price: 200, description: '250 impressions papier' },
    { id: 'premium', name: 'Soir\u00E9e Premium', price: 300, description: '500 impressions papier' },
    { id: 'weekend', name: 'Week-end', price: 450, description: '1000 impressions papier' }
  ];

  const checkIfWeekday = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
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
    const finalPrice = original - discount;

    return { original, final: finalPrice, discount };
  };

  const { final: finalPrice } = calculatePrice();
  const selectedPkg = getSelectedPackageDetails();

  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="simulator-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-50 rounded-full blur-[100px] opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="h-4 w-4" />
            <span>Simulateur de Prix</span>
          </span>
          <h2 id="simulator-heading" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Calculez votre tarif de location
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            S\u00E9lectionnez votre formule et la date pour d\u00E9couvrir votre prix avec la r\u00E9duction semaine
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Selection */}
            <div className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-900 mb-3">
                  <Sparkles className="h-4 w-4 text-primary-500" />
                  <span>Choisissez votre formule</span>
                </label>
                <div className="space-y-2.5">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'border-primary-500 bg-primary-50/50 shadow-sm'
                          : 'border-gray-100 hover:border-primary-200'
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
                          <h3 className="font-bold text-gray-900 text-sm">{pkg.name}</h3>
                          <span className="text-lg font-extrabold text-primary-500">{pkg.price}&euro;</span>
                        </div>
                        <p className="text-gray-400 text-xs mt-0.5">{pkg.description}</p>
                      </div>
                      {selectedPackage === pkg.id && (
                        <CheckCircle className="h-5 w-5 text-primary-500 ml-3 flex-shrink-0" />
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-900 mb-3">
                  <Calendar className="h-4 w-4 text-primary-500" />
                  <span>Date de l'\u00E9v\u00E9nement</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
                  aria-label="S\u00E9lectionner la date de l'\u00E9v\u00E9nement"
                />
                {isWeekday && selectedDate && (
                  <div className="flex items-center space-x-2 mt-2 text-emerald-600">
                    <Tag className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">-15% de r\u00E9duction en semaine appliqu\u00E9e !</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Result */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary-500" />
                <span>R\u00E9capitulatif</span>
              </h3>

              {showResult && selectedPkg ? (
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-primary-500 font-bold">{selectedPkg.name}</p>
                    <p className="text-gray-400 text-sm">{selectedPkg.description}</p>
                  </div>

                  {isWeekday && (
                    <div className="bg-emerald-50 rounded-xl p-3 flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-emerald-700 font-medium">R\u00E9duction semaine : -15%</span>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-xl p-5 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 font-medium">Prix final</span>
                      <span className="text-3xl font-extrabold">{finalPrice}&euro;</span>
                    </div>
                  </div>

                  <a
                    href={`mailto:contact@mon-photobooth-nantes.fr?subject=R\u00E9servation ${selectedPkg.name} - ${selectedDate}`}
                    className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3.5 rounded-xl font-semibold text-center text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    R\u00E9server maintenant
                  </a>
                </div>
              ) : (
                <div className="text-center py-10">
                  <Clock className="h-12 w-12 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">S\u00E9lectionnez une formule et une date</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSimulator;
