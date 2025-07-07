import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { detectOperator } from '../../data/operators';

interface RechargeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RechargeModal: React.FC<RechargeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    recipientNumber: '',
    amount: '',
    payerNumber: '',
    promoCode: ''
  });
  const [recipientOperator, setRecipientOperator] = useState(null);
  const [payerOperator, setPayerOperator] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const operator = detectOperator(formData.recipientNumber);
    setRecipientOperator(operator);
  }, [formData.recipientNumber]);

  useEffect(() => {
    const operator = detectOperator(formData.payerNumber);
    setPayerOperator(operator);
  }, [formData.payerNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleReset = () => {
    setFormData({
      recipientNumber: '',
      amount: '',
      payerNumber: '',
      promoCode: ''
    });
    setShowConfirmation(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  if (showConfirmation) {
    return (
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all border border-primary-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                  {t('recharge.confirmation.title')}
                </Dialog.Title>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('recharge.confirmation.followSteps')}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-400 dark:bg-primary-900 dark:text-primary-300 rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('recharge.confirmation.step1')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-400 dark:bg-primary-900 dark:text-primary-300 rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('recharge.confirmation.step2')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-400 dark:bg-primary-900 dark:text-primary-300 rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {t('recharge.confirmation.step3')}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleClose}
                    className="w-full bg-primary-400 text-white py-2 px-4 rounded-lg hover:bg-primary-500 transition-colors font-medium shadow-lg"
                  >
                    {t('recharge.confirmation.close')}
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all border border-primary-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                {t('recharge.title')}
              </Dialog.Title>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('recharge.recipientNumber')}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.recipientNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, recipientNumber: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white pr-10"
                    placeholder="6XXXXXXXX"
                    required
                  />
                  {recipientOperator && (
                    <div className="absolute right-3 top-2.5 text-lg">
                      <img 
                        src={recipientOperator.logo} 
                        alt={recipientOperator.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('recharge.amount')}
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white"
                  placeholder="1000"
                  min="100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('recharge.payerNumber')}
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.payerNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, payerNumber: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white pr-10"
                    placeholder="6XXXXXXXX"
                    required
                  />
                  {payerOperator && (
                    <div className="absolute right-3 top-2.5 text-lg">
                      <img 
                        src={payerOperator.logo} 
                        alt={payerOperator.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('recharge.promoCode')}
                </label>
                <input
                  type="text"
                  value={formData.promoCode}
                  onChange={(e) => setFormData(prev => ({ ...prev, promoCode: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 dark:bg-gray-700 dark:text-white"
                  placeholder="PROMO123"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-primary-400 text-white py-2 px-4 rounded-lg hover:bg-primary-500 transition-colors font-medium shadow-lg"
                >
                  {t('recharge.validate')}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default RechargeModal;