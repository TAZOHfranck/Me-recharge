import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Conditions Générales d'Utilisation
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Objet
              </h2>
              <p>
                Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation de la plateforme Me Recharge,
                service de recharge mobile multiréseau proposé par notre société.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                2. Acceptation des conditions
              </h2>
              <p>
                L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU.
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Services proposés
              </h2>
              <p>
                Me Recharge propose les services suivants :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recharge de crédit mobile pour tous les opérateurs du Cameroun</li>
                <li>Achat de forfaits data, voix et SMS</li>
                <li>Vente de produits électroniques et accessoires</li>
                <li>Services de support client</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Responsabilités
              </h2>
              <p>
                L'utilisateur s'engage à fournir des informations exactes lors de ses transactions.
                Me Recharge ne peut être tenu responsable des erreurs de saisie de l'utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Tarifs et paiement
              </h2>
              <p>
                Les tarifs affichés sont exprimés en Francs CFA (FCFA) et incluent toutes les taxes applicables.
                Le paiement s'effectue via les services de Mobile Money des opérateurs partenaires.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Modification des CGU
              </h2>
              <p>
                Me Recharge se réserve le droit de modifier les présentes CGU à tout moment.
                Les modifications entrent en vigueur dès leur publication sur le site.
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

export default Terms;