import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Star, Gift } from 'lucide-react';
import { useGoodDeals } from '../context/GoodDealsContext';
import { operators } from '../data/operators';

const GoodDeals: React.FC = () => {
  const { t } = useTranslation();
  const { selectedPlans, removePlan, getTotalAmount } = useGoodDeals();

  const getOperatorById = (id: string) => {
    return operators.find(op => op.id === id);
  };

  const specialOffers = [
    {
      id: 'offer-1',
      title: 'Bonus +50% Data',
      description: 'Obtenez 50% de data en plus sur votre prochain forfait MTN',
      discount: '50%',
      validUntil: '31 Décembre 2024',
      operator: 'mtn'
    },
    {
      id: 'offer-2',
      title: 'Weekend Gratuit',
      description: 'Appels gratuits le weekend avec Orange',
      discount: 'Gratuit',
      validUntil: '15 Janvier 2025',
      operator: 'orange'
    },
    {
      id: 'offer-3',
      title: 'Double Crédit',
      description: 'Doublez votre crédit avec YooMee',
      discount: '100%',
      validUntil: '28 Février 2025',
      operator: 'yoomee'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('goodDeals.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('goodDeals.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selected Plans */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-primary-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5 text-primary-400" />
                  {t('goodDeals.selectedPlans')} ({selectedPlans.length})
                </h2>
                {selectedPlans.length > 0 && (
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t('goodDeals.totalAmount')}</p>
                    <p className="text-2xl font-bold text-primary-400 dark:text-primary-400">
                      {getTotalAmount().toLocaleString()} F
                    </p>
                  </div>
                )}
              </div>

              {selectedPlans.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {t('goodDeals.noPlans')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Commencez par sélectionner des forfaits depuis la page forfaits
                  </p>
                  <Link
                    to="/plans"
                    className="inline-flex items-center bg-primary-400 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors font-medium shadow-lg"
                  >
                    {t('goodDeals.browsePlans')}
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedPlans.map(plan => {
                    const operator = getOperatorById(plan.operatorId);
                    return (
                      <div key={plan.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <img 
                              src={operator?.logo} 
                              alt={operator?.name}
                              className="h-8 w-8 object-contain"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {plan.name}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {operator?.name} • {plan.validity}
                              </p>
                              <div className="flex items-center space-x-4 mt-1">
                                {plan.data && (
                                  <span className="text-xs bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 py-1 rounded">
                                    {plan.data}
                                  </span>
                                )}
                                {plan.calls && (
                                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                                    {plan.calls}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              {plan.amount.toLocaleString()} F
                            </span>
                            <button
                              onClick={() => removePlan(plan.id)}
                              className="text-primary-400 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 p-2"
                              title={t('goodDeals.removePlan')}
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="w-full bg-primary-400 text-white py-3 px-6 rounded-lg hover:bg-primary-500 transition-colors font-medium text-lg shadow-lg">
                      {t('goodDeals.proceedToRecharge')} • {getTotalAmount().toLocaleString()} F
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Special Offers */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-primary-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Gift className="mr-2 h-5 w-5 text-orange-500" />
                {t('goodDeals.specialOffers')}
              </h2>

              <div className="space-y-4">
                {specialOffers.map(offer => {
                  const operator = getOperatorById(offer.operator);
                  return (
                    <div key={offer.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={operator?.logo} 
                            alt={operator?.name}
                            className="h-6 w-6 object-contain"
                          />
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                        <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs px-2 py-1 rounded-full font-medium">
                          {offer.discount}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {offer.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {offer.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Valide jusqu'au {offer.validUntil}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  💡 Astuce
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Combinez plusieurs forfaits pour maximiser vos économies et bénéficier d'offres exclusives !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodDeals;