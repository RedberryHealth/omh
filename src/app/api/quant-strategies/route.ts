import { NextResponse } from 'next/server';

// Quant strategies card data
const cardData = [
  {
    title: 'Advanced Algorithmic Trading',
    description:
      'Our algorithmic trading systems use complex mathematical models and vast data sets to identify and capitalize on market opportunities.',
    image: '/img/advanced-algorithm.png',
    icon: '/img/algorithmic.svg'
  },
  {
    title: 'Machine Learning Integration',
    description:
      'We integrate machine learning techniques to continuously improve our trading strategies. By learning from historical data and adapting to market changes, our systems become more accurate and effective over time.',
    image: '/img/intelligence.png',
    icon: '/img/machine.svg'
  },
  {
    title: 'Highlighting Our Tech Team',
    description:
      'Our quant strategies are developed by a team of experts with advanced degrees such as PhDs in computer modeling, machine learning, and information systems.',
    image: '/img/team.png',
    icon: '/img/techteam.svg'
  },
  {
    title: 'Quantitative Research',
    description:
      'Our team of experts conducts rigorous quantitative research to develop innovative trading strategies. By applying advanced statistical techniques, we uncover hidden patterns and insights that drive our success.',
    image: '/img/image-25.png',
    icon: '/img/research.svg'
  },
  {
    title: 'Fund Performance',
    description:
      'Track the performance of Odin Quant Strategies against industry benchmarks. Our commitment to transparency ensures you stay informed about our monthly and quarterly results.',
    image: '/img/div-teams-icon-yhro4.png',
    icon: '/img/fund.svg'
  }
];

export async function GET() {
  return NextResponse.json(cardData);
}
