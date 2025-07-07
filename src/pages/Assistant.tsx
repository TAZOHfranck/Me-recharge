import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

const Assistant: React.FC = () => {
  // const { t } = useTranslation();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const helpTopics = [
    {
      id: 'recharge',
      title: 'Comment effectuer une recharge',
      description: 'Guide étape par étape pour recharger votre crédit',
      steps: [
        'Cliquez sur "Recharger maintenant" sur la page d\'accueil',
        'Saisissez le numéro du destinataire',
        'Entrez le montant à recharger',
        'Saisissez votre numéro de paiement',
        'Validez la transaction',
        'Suivez les instructions de paiement Mobile Money'
      ]
    },
    {
      id: 'operators',
      title: 'Opérateurs supportés',
      description: 'Liste des opérateurs avec lesquels vous pouvez recharger',
      content: 'Nous supportons tous les opérateurs du Cameroun : MTN, Orange, YooMee, Camtel et Blue.'
    },
    {
      id: 'payment',
      title: 'Modes de paiement',
      description: 'Comment payer vos recharges',
      content: 'Vous pouvez payer via Mobile Money (MTN MoMo, Orange Money) en composant *126# et en suivant les instructions.'
    },
    {
      id: 'issues',
      title: 'Problèmes courants',
      description: 'Solutions aux problèmes fréquents',
      content: 'Si votre recharge n\'arrive pas, vérifiez que le numéro est correct et que votre paiement a été confirmé. Contactez-nous si le problème persiste.'
    }
  ];

  const frequentQuestions = [
    {
      question: 'Combien de temps prend une recharge ?',
      answer: 'Les recharges sont instantanées après confirmation du paiement.'
    },
    {
      question: 'Puis-je annuler une recharge ?',
      answer: 'Une fois la recharge confirmée, elle ne peut pas être annulée. Assurez-vous de vérifier les informations avant de valider.'
    },
    {
      question: 'Y a-t-il des frais supplémentaires ?',
      answer: 'Nos tarifs sont transparents et incluent tous les frais. Aucun frais caché n\'est appliqué.'
    },
    {
      question: 'Comment contacter le support ?',
      answer: 'Vous pouvez nous contacter via WhatsApp, email ou le formulaire de contact sur notre site.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Assistant Me Recharge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trouvez de l'aide rapidement pour utiliser nos services
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://wa.me/237XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition-colors text-center"
          >
            <MessageCircle className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm opacity-90">Chat en direct</p>
          </a>
          <a
            href="tel:+237XXXXXXXXX"
            className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            <Phone className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Téléphone</h3>
            <p className="text-sm opacity-90">Appel direct</p>
          </a>
          <a
            href="mailto:contact@merecharge.cm"
            className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition-colors text-center"
          >
            <Mail className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-90">Support par email</p>
          </a>
        </div>

        {/* Help Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Aide guidée
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helpTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {topic.title}
                  </h3>
                  <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {topic.description}
                </p>
                
                {selectedTopic === topic.id && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    {topic.steps ? (
                      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {topic.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {topic.content}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Frequent Questions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {frequentQuestions.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;