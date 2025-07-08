import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, CreditCard, CheckCircle, MapPin, Download } from 'lucide-react';

interface HomeProps {
  onRechargeClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onRechargeClick }) => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('landing.howItWorks.step1.title'),
      description: t('landing.howItWorks.step1.description'),
      icon: Smartphone
    },
    {
      title: t('landing.howItWorks.step2.title'),
      description: t('landing.howItWorks.step2.description'),
      icon: CreditCard
    },
    {
      title: t('landing.howItWorks.step3.title'),
      description: t('landing.howItWorks.step3.description'),
      icon: CreditCard
    },
    {
      title: t('landing.howItWorks.step4.title'),
      description: t('landing.howItWorks.step4.description'),
      icon: CheckCircle
    }
  ];

  return (
    <div className=" bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[url('/hero.webp')] opacity-80 bg-center bg-cover">

        <div className="bg-white dark:bg-gray-900 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl text-black-100 mb-8 max-w-3xl mx-auto">
              {t('landing.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onRechargeClick}
                className="bg-white text-primary-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center shadow-lg"
              >
                {t('landing.hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/plans"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-400 transition-colors flex items-center justify-center"
              >
                {t('landing.hero.viewPlans')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('landing.howItWorks.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 text-primary-400 dark:text-primary-300 rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Credit Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('landing.offlineCredit.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {t('landing.offlineCredit.description')}
              </p>
              <button className="bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors flex items-center shadow-lg">
                <MapPin className="mr-2 h-5 w-5" />
                {t('landing.offlineCredit.findStore')}
              </button>
            </div>
            <div className="relative">
              <img
                   src={`${import.meta.env.BASE_URL}image.webp`}
                alt="Point de vente"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-16 bg-primary-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                    src={`${import.meta.env.BASE_URL}transaction.webp`}
                alt="Mobile Apps"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('landing.mobileApps.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {t('landing.mobileApps.description')}
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mr-4 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t('landing.mobileApps.downloadIOS')}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t('landing.mobileApps.downloadAndroid')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;