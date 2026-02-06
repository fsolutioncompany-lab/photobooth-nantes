import React from 'react';
import { Building, User, MapPin, Mail, FileText, Shield, Eye, Cookie } from 'lucide-react';

const LegalMentions = () => {
  return (
    <section id="mentions-legales" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600">
            Informations légales concernant le site mon-photobooth-nantes.fr
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-12">
          {/* Éditeur du site */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Building className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Éditeur du site</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Raison sociale</h3>
                  <p className="text-gray-700">Fournard Consulting</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Forme juridique</h3>
                  <p className="text-gray-700">Entreprise individuelle</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dirigeant</h3>
                  <p className="text-gray-700">Julian Fournard</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">SIRET</h3>
                  <p className="text-gray-700">888 866 365 00016</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Code APE</h3>
                  <p className="text-gray-700">6312Z – Portails internet</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">contact@mon-photobooth-nantes.fr</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#f49c8a]" />
                <span>Adresse</span>
              </h3>
              <p className="text-gray-700">62 rue du clos toreau, 44200 Nantes, France</p>
            </div>
          </div>

          {/* Hébergement */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Hébergement</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-2">
                <strong>Hébergeur :</strong> Bolt Hosting
              </p>
              <p className="text-gray-700">
                Site hébergé sur la plateforme Bolt Hosting avec infrastructure sécurisée.
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Propriété intellectuelle</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </div>

          {/* Protection des données */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Protection des données personnelles</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Les informations recueillies sur ce site sont nécessaires pour traiter votre demande de devis ou de contact. Elles sont destinées à Fournard Consulting et ne seront en aucun cas cédées ou vendues à des tiers.
              </p>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : 
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
              <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle et ne nécessitent pas votre consentement.
              </p>
              <p>
                Aucun cookie de tracking ou de publicité n'est utilisé sur ce site.
              </p>
            </div>
          </div>

          {/* Responsabilité */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Limitation de responsabilité</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse 
                <a href="mailto:contact@mon-photobooth-nantes.fr" className="text-[#f49c8a] hover:underline ml-1">
                  contact@mon-photobooth-nantes.fr
                </a>
                en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#f49c8a] p-2 rounded-full">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Droit applicable</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-700">
                Tout litige en relation avec l'utilisation du site 
                <strong> mon-photobooth-nantes.fr</strong> est soumis au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#f49c8a] to-[#e88b79] rounded-2xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">Une question sur ces mentions légales ?</h3>
            <p className="mb-4">N'hésitez pas à nous contacter pour toute information complémentaire.</p>
            <a 
              href="mailto:contact@mon-photobooth-nantes.fr"
              className="inline-block bg-white text-[#f49c8a] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
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

export default LegalMentions;