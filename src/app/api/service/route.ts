import { NextResponse } from 'next/server';

const services = [
  {
    title: 'Merchant Hub',
    description:
      'Odin Merchant Solutions provides SMEs with cutting-edge financial solutions',
    href: '/services/merchant-hub'
  },
  // {
  //   title: 'Odin Currency Navigator',
  //   description:
  //     'Navigate currency markets with comprehensive data and insights',
  //   href: '/services/currency-navigator'
  // },
  {
    title: 'Odin Quant',
    description:
      'Advanced algorithms and machine learning for real-time data analysis',
    href: '/services/quant-fund'
  }
  // {
  //   title: 'Odin Trading Hub',
  //   description:
  //     'AI-driven trading and proprietary stock market timing signals',
  //   href: '/services/trading-hub'
  // },
  // {
  //   title: 'CBDC Consulting',
  //   description:
  //     'Expert consulting for Central Bank Digital Currencies (CBDCs)',
  //   href: '/services/cbdc-consulting'
  // },
  // {
  //   title: 'Global Payments',
  //   description:
  //     'Facilitate international transactions with our global payments platform',
  //   href: '/services/global-payments'
  // }
];

export async function GET() {
  return NextResponse.json(services);
}
