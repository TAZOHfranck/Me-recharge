export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  details: string;
}

export const products: Product[] = [
  {
    id: 'phone-1',
    name: 'Samsung Galaxy A54',
    description: 'Smartphone Android avec écran 6.4" et appareil photo 50MP',
    price: 285000,
    image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Smartphones',
    details: 'Écran Super AMOLED 6.4", Processeur Exynos 1380, 8GB RAM, 256GB stockage, Triple caméra 50MP + 12MP + 5MP, Batterie 5000mAh avec charge rapide 25W'
  },
  {
    id: 'phone-2',
    name: 'iPhone 14',
    description: 'Smartphone Apple avec puce A15 Bionic et caméra avancée',
    price: 650000,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Smartphones',
    details: 'Écran Super Retina XDR 6.1", Puce A15 Bionic, 128GB stockage, Système de caméra avancé 12MP, Résistant à l\'eau IP68, Compatible 5G'
  },
  {
    id: 'accessory-1',
    name: 'Casque Bluetooth Premium',
    description: 'Casque audio sans fil avec réduction de bruit active',
    price: 45000,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessoires',
    details: 'Réduction de bruit active, Autonomie 30h, Charge rapide, Commandes tactiles, Compatible avec tous les appareils Bluetooth'
  },
  {
    id: 'accessory-2',
    name: 'Powerbank 20000mAh',
    description: 'Batterie externe haute capacité avec charge rapide',
    price: 18000,
    image: 'https://images.pexels.com/photos/4792088/pexels-photo-4792088.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Accessoires',
    details: 'Capacité 20000mAh, Charge rapide 18W, 3 ports USB, Écran LED, Protection contre surcharge et surchauffe'
  },
  {
    id: 'service-1',
    name: 'Réparation d\'écran',
    description: 'Service de réparation professionnel pour écrans cassés',
    price: 25000,
    image: 'https://images.pexels.com/photos/1102252/pexels-photo-1102252.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Services',
    details: 'Réparation rapide en 2h, Pièces d\'origine, Garantie 6 mois, Service à domicile disponible, Compatible avec la plupart des marques'
  },
  {
    id: 'service-2',
    name: 'Configuration téléphone',
    description: 'Service de configuration et transfert de données',
    price: 5000,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Services',
    details: 'Configuration complète, Transfert de données, Installation d\'applications, Formation personnalisée, Support technique inclus'
  }
];