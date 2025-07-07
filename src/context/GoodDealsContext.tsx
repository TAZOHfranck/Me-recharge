import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Plan } from '../data/plans';

interface GoodDealsContextType {
  selectedPlans: Plan[];
  addPlan: (plan: Plan) => void;
  removePlan: (planId: string) => void;
  clearPlans: () => void;
  getTotalAmount: () => number;
}

const GoodDealsContext = createContext<GoodDealsContextType | undefined>(undefined);

export const useGoodDeals = () => {
  const context = useContext(GoodDealsContext);
  if (!context) {
    throw new Error('useGoodDeals must be used within a GoodDealsProvider');
  }
  return context;
};

interface GoodDealsProviderProps {
  children: ReactNode;
}

export const GoodDealsProvider: React.FC<GoodDealsProviderProps> = ({ children }) => {
  const [selectedPlans, setSelectedPlans] = useState<Plan[]>([]);

  const addPlan = (plan: Plan) => {
    setSelectedPlans(prev => {
      const exists = prev.find(p => p.id === plan.id);
      if (exists) {
        return prev;
      }
      return [...prev, plan];
    });
  };

  const removePlan = (planId: string) => {
    setSelectedPlans(prev => prev.filter(plan => plan.id !== planId));
  };

  const clearPlans = () => {
    setSelectedPlans([]);
  };

  const getTotalAmount = () => {
    return selectedPlans.reduce((total, plan) => total + plan.amount, 0);
  };

  return (
    <GoodDealsContext.Provider value={{
      selectedPlans,
      addPlan,
      removePlan,
      clearPlans,
      getTotalAmount
    }}>
      {children}
    </GoodDealsContext.Provider>
  );
};