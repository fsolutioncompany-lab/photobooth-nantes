import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Calculator, Percent, CheckCircle, Sparkles, Gift } from 'lucide-react';

const BookingSimulator = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isWeekday, setIsWeekday] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Forfaits mis à jour : 200€, 300€ et 450€
  const packages = [
    { id: 'soiree', name: 'Soirée', price: 200, description: '250 impressions papier' },
    { id: 'premium', name: 'Soirée Premium', price: 300, description: '500 impressions papier' },
    { id: 'weekend', name: 'Week-end', price: 450, description: '1000 impressions papier' }
  ];

  const checkIfWeekday = (dateString: string) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Lundi à Vendredi
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <Calculator className="h-5 w-5 text-green-600 animate-pulse" />
            <span className="text-green-600 font-semibold">Simulateur de Prix</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Calculez votre tarif</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez le prix de votre location avec la réduction semaine</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-[#f49c8a]" />
                  <span>Choisissez votre formule</span>
                </label>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label key={pkg.id} className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${selectedPackage === pkg.id ? 'border-[#f49c8a] bg-[#f49c8a] bg-opacity-10 shadow-lg' : 'border-gray-200 hover:border-[#f49c8a]'}`}>
                      <input type="radio" name="package" value={pkg.id} checked={selectedPackage === pkg.id} onChange={(e) => setSelectedPackage(e.target.value)} className="sr-only" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                          <span className="text-2xl font-bold text-[#f49c8a]">{pkg.price}€</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{pkg.description}</p>
                      </div>
                      {selectedPackage === pkg.id && <CheckCircle className="h-6 w-6 text-[#f49c8a] ml-3" />}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-[#f49c8a]" />
                  <span>Date de l'événement</span>
                </label>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f49c8a]" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Calculator className="h-6 w-6 text-[#f49c8a]" />
                <span>Récapitulatif</span>
              </h3>
              {showResult && selectedPkg ? (
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-[#f49c8a] font-bold text-lg">{selectedPkg.name}</p>
                    <p className="text-gray-600 text-sm">{selectedPkg.description}</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-xl p-4 text-white">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Prix final</span>
                      <span>{final}€</span>
                    </div>
                    {isWeekday && <p className="text-xs text-yellow-100 mt-1">Dont -15% de remise semaine</p>}
                  </div>
                  <button onClick={() => window.location.href = `mailto:contact@mon-photobooth-nantes.fr?subject=Réservation ${selectedPkg.name}`} className="w-full bg-white text-[#f49c8a] px-6 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-transform">Réserver</button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Sélectionnez une formule et une date</p>
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
