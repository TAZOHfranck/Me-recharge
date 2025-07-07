import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, Plus, Check } from 'lucide-react';
import { plans } from '../data/plans';
import { operators } from '../data/operators';
import { useGoodDeals } from '../context/GoodDealsContext';

const Plans: React.FC = () => {
  const { t } = useTranslation();
  const { selectedPlans, addPlan } = useGoodDeals();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  const filteredPlans = useMemo(() => {
    return plans.filter(plan => {
      const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plan.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesOperator = selectedOperator === 'all' || plan.operatorId === selectedOperator;
      const matchesDuration = selectedDuration === 'all' || plan.duration === selectedDuration;
      
      return matchesSearch && matchesOperator && matchesDuration;
    });
  }, [searchTerm, selectedOperator, selectedDuration]);

  const getOperatorById = (id: string) => {
    return operators.find(op => op.id === id);
  };

  const isPlanSelected = (planId: string) => {
    return selectedPlans.some(plan => plan.id === planId);
  };

  const handleSelectPlan = (plan: any) => {
    addPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('plans.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('plans.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-primary-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t('plans.filters.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Operator Filter */}
            <div className="lg:w-48">
              <select
                value={selectedOperator}
                onChange={(e) => setSelectedOperator(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">{t('plans.filters.all')}</option>
                {operators.map(operator => (
                  <option key={operator.id} value={operator.id}>
                    {t(`plans.operators.${operator.id}`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="lg:w-48">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">{t('plans.filters.all')}</option>
                <option value="day">{t('plans.filters.day')}</option>
                <option value="week">{t('plans.filters.week')}</option>
                <option value="month">{t('plans.filters.month')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map(plan => {
            const operator = getOperatorById(plan.operatorId);
            const isSelected = isPlanSelected(plan.id);
            return (
              <div key={plan.id} className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all p-6 border ${isSelected ? 'ring-2 ring-primary-400 dark:ring-primary-400 border-primary-200 dark:border-primary-700' : 'border-gray-200 dark:border-gray-700'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
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
                        {operator?.name}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-primary-400 dark:text-primary-400">
                    {plan.amount.toLocaleString()} F
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {plan.description}
                </p>

                <div className="space-y-2 mb-6">
                  {plan.data && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Data:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{plan.data}</span>
                    </div>
                  )}
                  {plan.calls && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Appels:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{plan.calls}</span>
                    </div>
                  )}
                  {plan.sms && (
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">SMS:</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{plan.sms}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Validité:</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{plan.validity}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleSelectPlan(plan)}
                  disabled={isSelected}
                  className={`w-full py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center shadow-sm ${
                    isSelected 
                      ? 'bg-green-600 text-white cursor-default' 
                      : 'bg-primary-400 text-white hover:bg-primary-500'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Sélectionné
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      {t('plans.selectPlan')}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Aucun forfait trouvé
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Plans;