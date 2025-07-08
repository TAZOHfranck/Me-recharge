import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GoodDealsProvider } from './context/GoodDealsContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import RechargeModal from './components/Modals/RechargeModal';
import Home from './pages/Home';
import Plans from './pages/Plans';
import GoodDeals from './pages/GoodDeals';
import ECommerce from './pages/ECommerce';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Assistant from './pages/Assistant';
import './i18n';

function App() {
  const { ready } = useTranslation();
  const [isRechargeModalOpen, setIsRechargeModalOpen] = useState(false);

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    
   <GoodDealsProvider>
     {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
          <Header onRechargeClick={() => setIsRechargeModalOpen(true)} />
          
          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={<Home onRechargeClick={() => setIsRechargeModalOpen(true)} />} 
              />
              <Route path="/plans" element={<Plans />} />
              <Route path="/good-deals" element={<GoodDeals />} />
              <Route path="/ecommerce" element={<ECommerce />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/assistant" element={<Assistant />} />
            </Routes>
          </main>

          <Footer />

          <RechargeModal 
            isOpen={isRechargeModalOpen}
            onClose={() => setIsRechargeModalOpen(false)}
          />
        </div>
      </Router>
  {/* </BrowserRouter>      */}
    </GoodDealsProvider>

  
  );
}

export default App;