import React from 'react';
import { Shield, Eye, Cookie, Lock, User, FileText, Mail, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <section id="politique-confidentialite" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Comment nous protégeons et utilisons vos données personnelles
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-12">
          {/* Introduction */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Fournard Consulting, éditeur du site <strong>mon-photobooth-nantes.fr</strong>, 
                s'engage à protéger la confidentialité de vos données personnelles. Cette politique 
                vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations 
                conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                « Informatique et Libertés ».
              </p>
            </div>
          </div>

          {/* Responsable du traitement */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Responsable du traitement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Entreprise</h3>
                  <p className="text-gray-700">Fournard Consulting</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dirigeant</h3>
                  <p className="text-gray-700">Julian Fournard</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">SIRET</h3>
                  <p className="text-gray-700">888 866 365 00016</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-700">62 rue du clos toreau<br />44200 Nantes, France</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-700">
                    <a href="mailto:contact@mon-photobooth-nantes.fr" className="text-[#f49c8a] hover:underline">
                      contact@mon-photobooth-nantes.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Données collectées */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Données collectées</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Données collectées via le formulaire de contact :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Prénom et nom</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Adresse email</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Type d'événement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Message et détails de votre demande</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Données techniques automatiques :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Adresse IP (anonymisée)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Type de navigateur et version</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>Pages visitées et durée de visite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Finalités du traitement */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Finalités du traitement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Traitement des demandes</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Répondre à vos demandes de devis</li>
                  <li>• Vous contacter pour préciser vos besoins</li>
                  <li>• Établir des propositions commerciales</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Amélioration du service</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Analyser l'utilisation du site</li>
                  <li>• Améliorer l'expérience utilisateur</li>
                  <li>• Optimiser nos services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Base légale */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Base légale du traitement</h2>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données personnelles est fondé sur <strong>votre consentement</strong> 
                lorsque vous remplissez notre formulaire de contact, ainsi que sur notre 
                <strong> intérêt légitime</strong> à répondre à vos demandes et à améliorer nos services.
              </p>
            </div>
          </div>

          {/* Durée de conservation */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Durée de conservation</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Données de contact</h3>
                    <p className="text-gray-700">Conservées pendant <strong>3 ans</strong> à compter du dernier contact</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Données techniques</h3>
                    <p className="text-gray-700">Conservées pendant <strong>13 mois</strong> maximum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vos droits */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Vos droits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit d'accès</h3>
                  <p className="text-gray-700 text-sm">Connaître les données que nous détenons sur vous</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit de rectification</h3>
                  <p className="text-gray-700 text-sm">Corriger ou mettre à jour vos informations</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit à l'effacement</h3>
                  <p className="text-gray-700 text-sm">Demander la suppression de vos données</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit d'opposition</h3>
                  <p className="text-gray-700 text-sm">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit à la portabilité</h3>
                  <p className="text-gray-700 text-sm">Récupérer vos données dans un format lisible</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Droit de limitation</h3>
                  <p className="text-gray-700 text-sm">Limiter le traitement de vos données</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-[#f49c8a] bg-opacity-10 rounded-2xl p-6">
              <p className="text-gray-700 text-center">
                <strong>Pour exercer vos droits :</strong> Contactez-nous à 
                <a href="mailto:contact@mon-photobooth-nantes.fr" className="text-[#f49c8a] hover:underline ml-1">
                  contact@mon-photobooth-nantes.fr
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Cookie className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Politique des cookies</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Cookies techniques (nécessaires)</h3>
                <p className="text-gray-700 mb-3">
                  Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Cookies de session pour la navigation</li>
                  <li>• Cookies de sécurité</li>
                  <li>• Cookies de préférences d'affichage</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Cookies analytiques</h3>
                <p className="text-gray-700 mb-3">
                  Nous n'utilisons actuellement aucun cookie de tracking ou d'analyse sur ce site.
                </p>
                <p className="text-gray-600 text-sm">
                  Si nous devions en utiliser à l'avenir, votre consentement vous sera demandé.
                </p>
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Sécurité des données</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>L'accès non autorisé</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>La modification illicite</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>La divulgation non autorisée</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#f49c8a] rounded-full"></div>
                    <span>La perte accidentelle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Transferts de données */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Transferts de données</h2>
            </div>
            <div className="bg-green-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont hébergées en Europe et ne font l'objet d'aucun transfert 
                vers des pays tiers. Nous ne vendons, ne louons, ni ne partageons vos données avec des tiers 
                à des fins commerciales.
              </p>
            </div>
          </div>

          {/* Modifications */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Modifications de cette politique</h2>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed">
                Cette politique de confidentialité peut être mise à jour pour refléter les changements 
                dans nos pratiques ou pour des raisons légales. Nous vous encourageons à consulter 
                régulièrement cette page. La date de dernière mise à jour est indiquée en bas de cette page.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Questions sur cette politique ?</h3>
            <p className="mb-4">
              Si vous avez des questions concernant cette politique de confidentialité ou l'utilisation 
              de vos données personnelles, n'hésitez pas à nous contacter.
            </p>
            <a 
              href="mailto:contact@mon-photobooth-nantes.fr"
              className="inline-block bg-white text-[#f49c8a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              <Mail className="h-4 w-4 inline mr-2" />
              Nous contacter
            </a>
          </div>

          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;