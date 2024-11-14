import { NextResponse } from 'next/server';

// Carousel data to be served by the API
const carouselData = [
  {
    title: 'Unlock the Power of Trading and Investing',
    description:
      'With our Trading Hub, you gain access to AI-driven trading, curated portfolios, and our proprietary stock market timing signals. Experience free stock trading with our user-friendly app, designed to make investing easier and more accessible.',
    image:
      '/img/we-are-committed-to-fueling-progress-maximizing-collective-pote.png'
  },
  {
    title: 'Currency Navigator',
    description:
      'Navigate the currency markets with confidence using our innovative tools and insights. Our Currency Navigator offers comprehensive data and trends, empowering individuals and SMEs to make informed decisions in the complex world of currency exchange.',
    image:
      '/img/we-strive-to-empower-you-with-the-freedom-to-make-informed-finan.png'
  },
  {
    title: 'Empower Your SME with Advanced Solutions',
    description:
      'For small and medium-sized enterprises, our advanced solutions provide seamless payment processing. With personalised advisory, superior technology, and competitive pricing, we ensure your business thrives. Say goodbye to fraud and chargebacks with our cutting-edge solutions.',
    image:
      '/img/we-believe-in-transparency-and-fairness-ensuring-that-every-tra.png'
  },
  {
    title: 'Simplify Global Cross-Border Payments',
    description:
      'Our Global Payments platform revolutionises international transactions. Utilise robust cross-border payment rails to ensure your money moves seamlessly across borders. Experience diverse payment methods that cater to your specific needs, whether it’s B2B, C2C, or beyond.',
    image:
      '/img/we-offer-you-the-tools-features-and-markets-to-make-your-money.png'
  },
  {
    title: 'Pioneering Future Opportunities',
    description:
      'At Odin Markets, we merge the expertise of quantitative researchers with the power of machine learning and advanced algorithms. Our Quant Strategies analyse vast amounts of data in real-time, uncovering and capitalising on market opportunities with precision.',
    image: '/img/1x-1.png'
  }
];

// Handle GET requests to serve carousel data
export async function GET() {
  return NextResponse.json(carouselData);
}
