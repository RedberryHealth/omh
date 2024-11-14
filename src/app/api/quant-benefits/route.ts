import { NextResponse } from 'next/server';

// Quant benefits card data
const cardsData = [
  {
    image: '/img/percentage.svg',
    title: 'Superior Returns',
    description:
      'Our advanced algorithms and machine learning techniques are designed to deliver superior returns'
  },
  {
    image: '/img/meter.svg',
    title: 'Rapid Execution',
    description:
      'Automated trading ensures rapid execution and optimal performance'
  },
  {
    image: '/img/improvement.svg',
    title: 'Continuous Improvement',
    description:
      'Machine learning integration allows our systems to adapt and improve over time'
  }
];

export async function GET() {
  return NextResponse.json(cardsData);
}
