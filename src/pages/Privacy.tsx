import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Politique de Confidentialité
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Collecte des données
              </h2>
              <p>
                Me Recharge collecte les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Numéros de téléphone pour les transactions</li>
                <li>Adresse e-mail pour les communications</li>
                <li>Données de navigation pour améliorer nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                2. Utilisation des données
              </h2>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Traiter vos transactions de recharge</li>
                <li>Vous contacter concernant nos services</li>
                <li>Améliorer la qualité de nos services</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Protection des données
              </h2>
              <p>
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données
                contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Partage des données
              </h2>
              <p>
                Nous ne partageons vos données personnelles avec des tiers que dans les cas suivants :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Avec les opérateurs mobiles pour traiter vos recharges</li>
                <li>Avec nos partenaires de paiement pour traiter vos transactions</li>
                <li>Lorsque la loi l'exige</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Vos droits
              </h2>
              <p>
                Vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit de portabilité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Contact
              </h2>
              <p>
                Pour toute question concernant cette politique de confidentialité,
                vous pouvez nous contacter à : contact@merecharge.cm
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;