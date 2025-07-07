import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Smartphone, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  onRechargeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRechargeClick }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav.plans'), href: '/plans' },
    { name: t('nav.goodDeals'), href: '/good-deals' },
    { name: t('nav.ecommerce'), href: '/ecommerce' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.faq'), href: '/faq' },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-primary-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
                   src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Me Recharge Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Me Recharge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-400 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
              title={t('footer.language')}
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
              title={t('footer.theme')}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={onRechargeClick}
              className="bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors font-medium shadow-sm"
            >
              {t('nav.recharge')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'text-primary-400 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleLanguage}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
                >
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>
              </div>
              <button
                onClick={() => {
                  onRechargeClick();
                  setIsMenuOpen(false);
                }}
                className="bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors font-medium"
              >
                {t('nav.recharge')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;