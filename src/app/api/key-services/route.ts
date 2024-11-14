import { NextResponse } from 'next/server';

// Services data to be served by the API
const servicesData = [
  {
    title: 'Unlock the Power of Trading and Investing',
    description:
      'Access AI-driven trading, curated portfolios, and our proprietary stock market timing signals. Experience free stock trading with our user-friendly app.',
    imageSrc:
      '/img/calm-happy-businessman-keeps-eye-his-stock-portfolio-confident-s.png'
  },
  {
    title: 'Currency Navigation',
    description:
      'Navigate currency markets with comprehensive data and insights, empowering individuals and SMEs to make informed decisions.',
    imageSrc: '/img/image-28.png'
  },
  {
    title: 'Empower Your SME with Advanced Solutions',
    description:
      'Seamless payment processing for SMEs with personalised advisory, superior technology & competitive pricing.',
    imageSrc: '/img/secure-transactions-mint-1.svg'
  },
  {
    title: 'Simplify Global Cross-Border Payments',
    description:
      'Utilise robust cross-border payment rails and diverse methods for seamless international transactions. Includes bill pay services and international top-ups.',
    imageSrc: '/img/image-31.png'
  },
  {
    title: 'Odin Quant Strategies',
    description:
      'Advanced algorithms and machine learning for real-time data analysis and automated trading, delivering superior returns for institutional investors.',
    imageSrc: '/img/image-29.png'
  },
  {
    title: 'CBDC Consulting',
    description:
      'Expert consulting for Central Bank Digital Currencies (CBDCs), helping central banks integrate and optimise digital currency systems.',
    imageSrc: '/img/image-30.png'
  }
];

// Handle GET requests to serve services data
export async function GET() {
  return NextResponse.json(servicesData);
}
