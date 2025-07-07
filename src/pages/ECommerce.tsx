import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@headlessui/react';
import { X, MessageCircle } from 'lucide-react';
import { products } from '../data/products';

const ECommerce: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWhatsAppContact = (product: any) => {
    const message = `Bonjour, je suis intéressé(e) par le produit : ${product.name}`;
    const whatsappUrl = `https://wa.me/237691066393?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('ecommerce.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('ecommerce.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {product.price.toLocaleString()} F
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {product.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {t('ecommerce.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <Dialog open={!!selectedProduct} onClose={() => setSelectedProduct(null)} className="relative z-50">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                      {selectedProduct.name}
                    </Dialog.Title>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="mb-4">
                          <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                            {selectedProduct.category}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {selectedProduct.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Détails du produit
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedProduct.details}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {selectedProduct.price.toLocaleString()} F
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-4">
                      <button
                        onClick={() => handleWhatsAppContact(selectedProduct)}
                        className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {t('ecommerce.contactWhatsApp')}
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                      >
                        {t('ecommerce.cancel')}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ECommerce;