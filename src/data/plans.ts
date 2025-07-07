export interface Plan {
  id: string;
  operatorId: string;
  name: string;
  description: string;
  amount: number;
  duration: 'day' | 'week' | 'month';
  data?: string;
  calls?: string;
  sms?: string;
  validity: string;
}

export const plans: Plan[] = [
  // MTN Plans
  {
    id: 'mtn-1',
    operatorId: 'mtn',
    name: 'MTN Daily 500MB',
    description: 'Forfait journalier avec 500MB + appels illimités',
    amount: 500,
    duration: 'day',
    data: '500MB',
    calls: 'Illimités',
    sms: '50 SMS',
    validity: '24h'
  },
  {
    id: 'mtn-2',
    operatorId: 'mtn',
    name: 'MTN Weekly 2GB',
    description: 'Forfait hebdomadaire avec 2GB + appels illimités',
    amount: 2000,
    duration: 'week',
    data: '2GB',
    calls: 'Illimités',
    sms: '200 SMS',
    validity: '7 jours'
  },
  {
    id: 'mtn-3',
    operatorId: 'mtn',
    name: 'MTN Monthly 10GB',
    description: 'Forfait mensuel avec 10GB + appels illimités',
    amount: 8000,
    duration: 'month',
    data: '10GB',
    calls: 'Illimités',
    sms: '1000 SMS',
    validity: '30 jours'
  },

  // Orange Plans
  {
    id: 'orange-1',
    operatorId: 'orange',
    name: 'Orange Daily 1GB',
    description: 'Forfait journalier avec 1GB + appels illimités',
    amount: 600,
    duration: 'day',
    data: '1GB',
    calls: 'Illimités',
    sms: '100 SMS',
    validity: '24h'
  },
  {
    id: 'orange-2',
    operatorId: 'orange',
    name: 'Orange Weekly 3GB',
    description: 'Forfait hebdomadaire avec 3GB + appels illimités',
    amount: 2500,
    duration: 'week',
    data: '3GB',
    calls: 'Illimités',
    sms: '300 SMS',
    validity: '7 jours'
  },
  {
    id: 'orange-3',
    operatorId: 'orange',
    name: 'Orange Monthly 15GB',
    description: 'Forfait mensuel avec 15GB + appels illimités',
    amount: 10000,
    duration: 'month',
    data: '15GB',
    calls: 'Illimités',
    sms: '1500 SMS',
    validity: '30 jours'
  },

  
  // YooMee Plans
  {
    id: 'yoomee-1',
    operatorId: 'yoomee',
    name: 'YooMee Daily 600MB',
    description: 'Forfait journalier avec 600MB + appels illimités',
    amount: 450,
    duration: 'day',
    data: '600MB',
    calls: 'Illimités',
    sms: '60 SMS',
    validity: '24h'
  },
  {
    id: 'yoomee-2',
    operatorId: 'yoomee',
    name: 'YooMee Weekly 2.2GB',
    description: 'Forfait hebdomadaire avec 2.2GB + appels illimités',
    amount: 1900,
    duration: 'week',
    data: '2.2GB',
    calls: 'Illimités',
    sms: '220 SMS',
    validity: '7 jours'
  },
  {
    id: 'yoomee-3',
    operatorId: 'yoomee',
    name: 'YooMee Monthly 11GB',
    description: 'Forfait mensuel avec 11GB + appels illimités',
    amount: 7800,
    duration: 'month',
    data: '11GB',
    calls: 'Illimités',
    sms: '1100 SMS',
    validity: '30 jours'
  },

  // Camtel Plans
  {
    id: 'camtel-1',
    operatorId: 'camtel',
    name: 'Camtel Daily 400MB',
    description: 'Forfait journalier avec 400MB + appels illimités',
    amount: 300,
    duration: 'day',
    data: '400MB',
    calls: 'Illimités',
    sms: '40 SMS',
    validity: '24h'
  },
  {
    id: 'camtel-2',
    operatorId: 'camtel',
    name: 'Camtel Weekly 1.8GB',
    description: 'Forfait hebdomadaire avec 1.8GB + appels illimités',
    amount: 1500,
    duration: 'week',
    data: '1.8GB',
    calls: 'Illimités',
    sms: '180 SMS',
    validity: '7 jours'
  },
  {
    id: 'camtel-3',
    operatorId: 'camtel',
    name: 'Camtel Monthly 8GB',
    description: 'Forfait mensuel avec 8GB + appels illimités',
    amount: 6000,
    duration: 'month',
    data: '8GB',
    calls: 'Illimités',
    sms: '800 SMS',
    validity: '30 jours'
  },

  // Blue Plans
  {
    id: 'blue-1',
    operatorId: 'blue',
    name: 'Blue Daily 800MB',
    description: 'Forfait journalier avec 800MB + appels illimités',
    amount: 550,
    duration: 'day',
    data: '800MB',
    calls: 'Illimités',
    sms: '80 SMS',
    validity: '24h'
  },
  {
    id: 'blue-2',
    operatorId: 'blue',
    name: 'Blue Weekly 3.5GB',
    description: 'Forfait hebdomadaire avec 3.5GB + appels illimités',
    amount: 2200,
    duration: 'week',
    data: '3.5GB',
    calls: 'Illimités',
    sms: '350 SMS',
    validity: '7 jours'
  },
  {
    id: 'blue-3',
    operatorId: 'blue',
    name: 'Blue Monthly 14GB',
    description: 'Forfait mensuel avec 14GB + appels illimités',
    amount: 8500,
    duration: 'month',
    data: '14GB',
    calls: 'Illimités',
    sms: '1400 SMS',
    validity: '30 jours'
  }
];