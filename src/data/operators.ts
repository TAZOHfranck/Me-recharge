export interface Operator {
  id: string;
  name: string;
  logo: string;
  prefixes: string[];
  color: string;
}

export const operators: Operator[] = [
  {
    id: 'mtn',
    name: 'MTN',
    logo: 'https://i0.wp.com/l-frii.com/wp-content/uploads/2022/02/Le-nouveau-logo-de-MTN-suscite-une-avalanche-de-reactions-sur-la-toile-Photo.png?w=600&ssl=1',
    prefixes: ['67', '68', '650', '651', '652', '653', '654'],
    color: '#FFCC00'
  },
  {
    id: 'orange',
    name: 'ORANGE',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png',
    prefixes: ['69', '655', '656', '657', '658', '659'],
    color: '#FF7900'
  },
  
  {
    id: 'yoomee',
    name: 'YooMee',
    logo: 'https://tse3.mm.bing.net/th/id/OIP.7THADE8hlMwDedc9KbqbiAHaCh?rs=1&pid=ImgDetMain&o=7&rm=3',
    prefixes: ['620', '621', '622', '623', '624', '625'],
    color: '#00AA44'
  },
  {
    id: 'camtel',
    name: 'CAMTEL',
    logo: 'https://tse2.mm.bing.net/th/id/OIP.FcD0bUJZQYtOGNL3pwxEewAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
    prefixes: ['233', '234', '235', '236', '237', '238'],
    color: '#CC0000'
  },
  {
    id: 'blue',
    name: 'BLUE',
    logo: 'https://tse1.mm.bing.net/th/id/OIP.EyQBJDpFz8Q-14svyBr4ewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    prefixes: ['695', '696', '697', '698', '699'],
    color: '#0099DD'
  }
];

export const detectOperator = (phoneNumber: string): Operator | null => {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  
  for (const operator of operators) {
    for (const prefix of operator.prefixes) {
      if (cleanNumber.startsWith(prefix)) {
        return operator;
      }
    }
  }
  
  return null;
};