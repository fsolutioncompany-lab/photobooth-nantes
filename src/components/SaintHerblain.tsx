import React from 'react';
import { Camera, MapPin, Phone, Globe, Star, Check, Users, Heart, Gift, Sparkles, Clock, Euro, Settings } from 'lucide-react';

const SaintHerblain = () => {
  const advantages = [
    {
      icon: Heart,
      title: "Mariage",
      description: "Créez une animation commune où chacun peut immortaliser son passage avec humour"
    },
    {
      icon: Gift,
      title: "Anniversaire", 
      description: "Offrez à vos amis des souvenirs personnalisés et fun"
    },
    {
      icon: Users,
      title: "Soirée professionnelle",
      description: "Valorisez votre image grâce à la personnalisation des impressions et favorisez le networking"
    },
    {
      icon: Sparkles,
      title: "Fête familiale",
      description: "Rassemblez toutes les générations autour d'une activité créative et accessible"
    }
  ];

  const features = [
    {
      feature: "Impression instantanée",
      standard: true,
      advanced: true
    },
    {
      feature: "Impression illimitée", 
      standard: false,
      advanced: true
    },
    {
      feature: "Personnalisation cadres/fonds",
      standard: "Basique",
      advanced: "Avancée"
    },
    {
      feature: "Animation gif/fond vert",
      standard: false,
      advanced: true
    }
  ];

  const tips = [
    "Vérifiez toujours le contenu du forfait proposé par le prestataire",
    "Privilégiez les machines offrant une impression illimitée", 
    "Sollicitez des accessoires variés pour stimuler la créativité des participants",
    "Optez pour l'option récupération numérique des clichés après la fête"
  ];

  const companies = [
    {
      name: "My Photobooth - Location Borne Photo Nantes",
      category: "Service de photographie",
      address: "21 Rue Léon Durocher, 44200 Nantes",
      phone: "+33661023157",
      website: "https://borne-photo-nantes.fr/"
    },
    {
      name: "Location Photobooth - Nantes", 
      category: "Service de photographie",
      website: "https://josepho.io/"
    },
    {
      name: "PhotoBooth 44 - location borne photo",
      category: "Service de photographie", 
      address: "Rue du Tertre Princeau, 44360 Saint-Étienne-de-Montluc",
      phone: "+33699288341",
      website: "https://photobooth44.wordpress.com/"
    },
    {
      name: "Photobooth Nantes & Carquefou",
      category: "Service de photographie",
      address: "13 Rue du Marquis de Maubreuil, 44470 Carquefou",
      phone: "+33768096365",
      website: "https://www.location-photobooth-nantes.com/"
    },
    {
      name: "Location photobooth Nantes - Erdre Animation",
      category: "Service de photographie",
      address: "84 Quai de la Fosse, 44100 Nantes",
      phone: "+33625481763",
      website: "https://www.erdre-animation.com/location-photobooth-nantes/"
    },
    {
      name: "Le Cyclope - Location Photobooth Nantes",
      category: "Service de photographie",
      address: "Rue Joseph Caille, 44000 Nantes",
      phone: "+33650657537",
      website: "http://photobooth-nantes.fr/"
    },
    {
      name: "Ecophotobooth - location photobooth",
      category: "Service de photographie",
      address: "10 Rue Jack London, 44400 Rezé",
      phone: "+33240262021",
      website: "https://www.ecophotobooth.fr/"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f49c8a] bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300 bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f49c8a] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#f49c8a] bg-opacity-10 px-6 py-3 rounded-full mb-6">
            <MapPin className="h-5 w-5 text-[#f49c8a] animate-pulse" />
            <span className="text-[#f49c8a] font-semibold">Saint-Herblain</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Location de photobooth à Saint-Herblain
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Animez vos événements avec style ! À la recherche d'une solution originale pour capturer les moments forts lors d'un mariage, d'un anniversaire ou d'un événement professionnel à Nantes et sa région ? La location de photobooth à Saint-Herblain séduit par sa simplicité d'utilisation et son fort potentiel d'animation.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi choisir une location de photobooth à Saint-Herblain ?
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Opter pour la location d'un photobooth en bois ou d'une borne selfie offre de nombreux avantages, autant pour les organisateurs que pour les invités. L'ambiance conviviale instaurée par la présence d'un photobooth transforme littéralement l'atmosphère de n'importe quel événement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              De plus, chacun repart avec ses propres clichés imprimés, parfois même personnalisés, pour revivre les meilleurs instants. Entre animation ludique et souvenir inoubliable, ce concept continue de séduire petits et grands.
            </p>
            <div className="text-center">
              <a 
                href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis Saint-Herblain"
                className="inline-block bg-[#f49c8a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e88b79] transition-all duration-300 transform hover:scale-105"
              >
                Devis en ligne
              </a>
            </div>
          </div>
        </div>

        {/* Types of Photobooths */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les types de photobooths disponibles à la location
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Camera className="h-7 w-7 text-[#f49c8a]" />
                <span>Quel format de photobooth choisir ?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700"><strong>Borne photo traditionnelle :</strong> dotée d'un écran tactile et d'une imprimante intégrée</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700"><strong>Photobooth en bois :</strong> apprécié pour son cachet vintage et décoratif</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700"><strong>Bornes selfies mobiles :</strong> offrent flexibilité et compacité</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Settings className="h-7 w-7 text-[#f49c8a]" />
                <span>Fonctionnalités incontournables</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700">Impression instantanée ou illimitée des clichés</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700">Création de gifs animés pour un rendu dynamique</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700">Personnalisation des cadres photo et ajout de logos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#f49c8a] rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700">Accessoires fun (chapeaux, lunettes, déguisements)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Des utilisations adaptées à tous les événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group text-center"
              >
                <div className="bg-gradient-to-br from-[#f49c8a] to-[#e88b79] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Une borne photo devient ainsi le point de rencontre central pendant la fête, générant une foule de clichés partagés, échangés et conservés précieusement longtemps après l'événement.
            </p>
          </div>
        </div>

        {/* Technical Comparison */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Focus sur la personnalisation et les solutions techniques
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Un des grands atouts de la location de borne photo réside dans la possibilité de rendre chaque cliché unique. Les organisateurs peuvent demander l'ajout d'un cadre spécifique, d'un message personnalisé ou du logo de leur entreprise sur chaque impression.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Côté technique, les bornes sont généralement autonomes et faciles à utiliser. Quelques minutes suffisent pour l'installation et la prise en main. Un écran tactile guide les utilisateurs tout au long du processus.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Fonctionnalité</th>
                  <th className="text-center py-4 px-4 font-bold text-[#f49c8a]">Photobooth standard</th>
                  <th className="text-center py-4 px-4 font-bold text-[#f49c8a]">Photobooth avancé</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{feature.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? (
                          <span className="text-green-600 font-bold">Oui ✅</span>
                        ) : (
                          <span className="text-red-600 font-bold">Non ❌</span>
                        )
                      ) : (
                        <span className="text-blue-600 font-medium">{feature.standard} 🎨</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.advanced === 'boolean' ? (
                        feature.advanced ? (
                          <span className="text-green-600 font-bold">Oui ✅</span>
                        ) : (
                          <span className="text-red-600 font-bold">Non ⛔</span>
                        )
                      ) : (
                        <span className="text-purple-600 font-medium">{feature.advanced} 🖼️</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Conseils pratiques pour réussir sa location de photobooth
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pensez avant tout à adapter le choix de votre borne selfie à la taille de l'événement et à l'espace disponible. Pour bénéficier pleinement de l'animation, repérez un emplacement facile d'accès et proche du flux principal des invités, sans gêner la circulation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              N'hésitez pas à anticiper la personnalisation des supports d'impression. Beaucoup de loueurs proposent désormais une large gamme de cadres, décors et options graphiques correspondant à différents thèmes ou couleurs dominantes de la soirée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-2xl p-6 text-white">
                <div className="flex items-start space-x-3">
                  <div className="bg-white rounded-full p-1 mt-1">
                    <Check className="h-3 w-3 text-[#f49c8a]" />
                  </div>
                  <p className="font-medium">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions fréquentes sur la location de photobooth à Saint-Herblain
          </h2>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Euro className="h-6 w-6 text-[#f49c8a]" />
                <span>Combien coûte la location d'un photobooth à Saint-Herblain ?</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Le tarif varie selon la durée, les fonctionnalités choisies et le niveau de personnalisation. Pour une journée, prévoyez généralement entre 200 € et 500 €. Certaines offres incluent l'impression illimitée, des accessoires et le support.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="font-medium">4 heures</span>
                    <span className="text-[#f49c8a] font-bold">environ 200 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Journée entière</span>
                    <span className="text-[#f49c8a] font-bold">jusqu'à 500 €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Sparkles className="h-6 w-6 text-[#f49c8a]" />
                <span>Quels types d'événements profitent le plus du photobooth ?</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Tous types d'événements sont adaptés, mais la location de photobooth rencontre le plus grand succès lors de mariages, anniversaires, fêtes familiales ou soirées d'entreprise. L'animation favorise les échanges et laisse des souvenirs tangibles à chaque participant.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-pink-50 rounded-xl">
                  <Heart className="h-6 w-6 text-pink-500 mx-auto mb-2" />
                  <span className="text-sm font-medium">Mariages</span>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium">Événements pros</span>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-xl">
                  <Gift className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <span className="text-sm font-medium">Anniversaires</span>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <Sparkles className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <span className="text-sm font-medium">Fêtes privées</span>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Settings className="h-6 w-6 text-[#f49c8a]" />
                <span>Comment personnaliser les photos prises lors de l'événement ?</span>
              </h3>
              <p className="text-gray-700 mb-4">
                Il suffit de fournir en amont les éléments à intégrer : logo, prénom, date, couleurs… Le prestataire configure ensuite les cadres numériques et les fonds à appliquer automatiquement sur chaque impression.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">🖼️</span>
                  <span className="font-medium">Cadres thématiques</span>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">🎨</span>
                  <span className="font-medium">Fonds colorés</span>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">✍️</span>
                  <span className="font-medium">Messages personnalisés</span>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
                <Globe className="h-6 w-6 text-[#f49c8a]" />
                <span>Peut-on récupérer les photos en version numérique après l'événement ?</span>
              </h3>
              <p className="text-gray-700 mb-4">
                La plupart des prestataires fournissent un accès à une galerie privée ou remettent une clé USB contenant toutes les photos prises durant la prestation. Ainsi, chaque invité peut sauvegarder ou partager ses clichés facilement sur les réseaux sociaux.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 flex items-center space-x-3">
                  <span className="text-2xl">🔗</span>
                  <span className="font-medium">Galerie sécurisée en ligne</span>
                </div>
                <div className="bg-green-50 rounded-xl p-4 flex items-center space-x-3">
                  <span className="text-2xl">💽</span>
                  <span className="font-medium">Clé USB remise en fin d'événement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Companies */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Liste des entreprises locales pour la location de PhotoBooth à Saint-Herblain
          </h2>
          
          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                    <p className="text-[#f49c8a] font-medium mb-4">{company.category}</p>
                  </div>
                  <div className="bg-[#f49c8a] p-2 rounded-full">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  {company.address && (
                    <li className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-[#f49c8a]" />
                      <span><strong>Adresse :</strong> {company.address}</span>
                    </li>
                  )}
                  {company.phone && (
                    <li className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[#f49c8a]" />
                      <span><strong>Téléphone :</strong> {company.phone}</span>
                    </li>
                  )}
                  <li className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-[#f49c8a]" />
                    <span><strong>Site Internet :</strong> <a href={company.website} className="text-[#f49c8a] hover:underline">{company.website}</a></span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à animer votre événement à Saint-Herblain ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-nous dès maintenant pour obtenir un devis personnalisé et gratuit pour votre location de photobooth.
            </p>
            <a 
              href="mailto:contact@mon-photobooth-nantes.fr?subject=Demande de devis Saint-Herblain"
              className="inline-block bg-white text-[#f49c8a] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Location de PhotoBooth à Saint Herblain https://www.google.com/maps/place/BeHappy+-+Mon+Photobooth+Nantes/@47.2244512,-1.627696,10526m/data=!3m1!1e3!4m6!3m5!1s0x4805ed534773163d:0x30b07e4d78257a5e!8m2!3d47.2140336!4d-1.6112341!16s%2Fg%2F11x_pmvfmw?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "My Photobooth - Location Borne Photo Nantes",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "21 Rue Léon Durocher",
                      "addressLocality": "Nantes",
                      "postalCode": "44200",
                      "addressCountry": "FR"
                    },
                    "url": "https://borne-photo-nantes.fr/",
                    "@id": "https://borne-photo-nantes.fr/",
                    "telephone": "+33661023157",
                    "image": "https://lh3.googleusercontent.com/p/AF1QipPlpL5jw3rpb11vYakaXbKt7XY6FI9YrAMewlva=w408-h271-k-no"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "Location Photobooth - Nantes",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "N/A",
                      "addressLocality": "N/A",
                      "postalCode": "N/A",
                      "addressCountry": "N/A"
                    },
                    "url": "https://josepho.io/",
                    "@id": "https://josepho.io/",
                    "image": "https://lh3.googleusercontent.com/p/AF1QipNfsx8eTJS3XxQwyPMWwV-bGxKct4u-D6ekkF43=w426-h240-k-no"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "PhotoBooth 44 - location borne photo",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Rue du Tertre Princeau",
                      "addressLocality": "Saint-Étienne-de-Montluc",
                      "postalCode": "44360",
                      "addressCountry": "FR"
                    },
                    "url": "https://photobooth44.wordpress.com/",
                    "@id": "https://photobooth44.wordpress.com/",
                    "telephone": "+33699288341",
                    "image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=jWd5TzbD6vLt3QYD9CE0_A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=215.12&pitch=0&thumbfov=100"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "Photobooth Nantes & Carquefou",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "13 Rue du Marquis de Maubreuil",
                      "addressLocality": "Carquefou",
                      "postalCode": "44470",
                      "addressCountry": "FR"
                    },
                    "url": "https://www.location-photobooth-nantes.com/",
                    "@id": "https://www.location-photobooth-nantes.com/",
                    "telephone": "+33768096365",
                    "image": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=13pSu5ai8FmaTV3EYEpRyw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=64.08448&pitch=0&thumbfov=100"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "Location photobooth Nantes - Erdre Animation",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "84 Quai de la Fosse",
                      "addressLocality": "Nantes",
                      "postalCode": "44100",
                      "addressCountry": "FR"
                    },
                    "url": "https://www.erdre-animation.com/location-photobooth-nantes/",
                    "@id": "https://www.erdre-animation.com/location-photobooth-nantes/",
                    "telephone": "+33625481763",
                    "image": "https://lh3.googleusercontent.com/p/AF1QipPdjWGQV6O_7QTWyCe1G8B9qQEpsQqMrr2FVg_R=w408-h294-k-no"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "Le Cyclope - Location Photobooth Nantes",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Rue Joseph Caille",
                      "addressLocality": "Nantes",
                      "postalCode": "44000",
                      "addressCountry": "FR"
                    },
                    "url": "http://photobooth-nantes.fr/",
                    "@id": "http://photobooth-nantes.fr/",
                    "telephone": "+33650657537",
                    "image": "https://lh3.googleusercontent.com/p/AF1QipP4fklkJsXtvRJUyVbP1TczOBQLeQ551U1tJM8K=w408-h272-k-no"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "LocalBusiness",
                    "name": "Ecophotobooth - location photobooth",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "10 Rue Jack London",
                      "addressLocality": "Rezé",
                      "postalCode": "44400",
                      "addressCountry": "FR"
                    },
                    "url": "https://www.ecophotobooth.fr/",
                    "@id": "https://www.ecophotobooth.fr/",
                    "telephone": "+33240262021",
                    "image": "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npH8bBgffjow3rp6DzBTF2QDuPkT3PW9BYA7ljbn5yDht_iILmngrLjD80yWd3x30Wf5Qwyf4aa3yKD5JuRXEj2WSIStcrbwZUTnQ1kD_NbrdMS0wUPNKK_zIVaoMPNImgT247CAWDkiTV_=w408-h306-k-no"
                  }
                }
              ]
            })
          }}
        />
      </div>
    </section>
  );
};

export default SaintHerblain;