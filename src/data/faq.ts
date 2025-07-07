export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Comment effectuer une recharge ?',
    answer: 'Cliquez sur "Recharger maintenant", saisissez le numéro du destinataire et le montant, puis suivez les instructions pour payer via Mobile Money.',
    category: 'Recharge'
  },
  {
    id: 'faq-2',
    question: 'Quels opérateurs sont supportés ?',
    answer: 'Nous supportons tous les opérateurs du Cameroun : MTN, Orange, YooMee, Camtel et Blue.',
    category: 'Opérateurs'
  },
  {
    id: 'faq-3',
    question: 'Les recharges sont-elles instantanées ?',
    answer: 'Oui, les recharges sont traitées instantanément après confirmation du paiement.',
    category: 'Recharge'
  },
  {
    id: 'faq-4',
    question: 'Puis-je recharger un autre numéro ?',
    answer: 'Oui, vous pouvez recharger n\'importe quel numéro, pas seulement le vôtre.',
    category: 'Recharge'
  },
  {
    id: 'faq-5',
    question: 'Que faire si ma recharge n\'arrive pas ?',
    answer: 'Contactez notre service client via WhatsApp ou le formulaire de contact. Nous résoudrons le problème rapidement.',
    category: 'Support'
  },
  {
    id: 'faq-6',
    question: 'Y a-t-il des frais cachés ?',
    answer: 'Non, tous nos prix sont transparents. Aucun frais caché n\'est appliqué.',
    category: 'Tarifs'
  }
];