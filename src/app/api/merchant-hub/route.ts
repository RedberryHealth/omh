import { NextResponse } from 'next/server';

// Image data
const imageData = [
  {
    src: '/img/vector-7.png',
    width: 15,
    height: 15,
    className: 'absolute w-[15px] h-[15px] top-[-1008px] left-[-1658px]'
  },
  {
    src: '/img/vector-1.svg',
    width: 5,
    height: 5,
    className: 'absolute w-[5px] h-[5px] top-20 left-[-215px]'
  },
  {
    src: '/img/vector-7.png',
    width: 5,
    height: 5,
    className: 'absolute w-[5px] h-[5px] top-[-963px] left-[-1592px]'
  },
  {
    src: '/img/vector-3.svg',
    width: 10,
    height: 10,
    className: 'absolute w-2.5 h-2.5 top-[150px] left-[-124px]'
  },
  {
    src: '/img/vector-4.svg',
    width: 15,
    height: 15,
    className: 'absolute w-[15px] h-[15px] top-[35px] left-[299px]'
  },
  {
    src: '/img/vector-7.png',
    width: 5,
    height: 5,
    className: 'absolute w-[5px] h-[5px] top-[-2512px] left-[-955px]'
  },
  {
    src: '/img/vector-6.svg',
    width: 5,
    height: 5,
    className: 'absolute w-[5px] h-[5px] top-20 left-[375px]'
  },
  {
    src: '/img/vector-7.png',
    width: 10,
    height: 10,
    className: 'absolute w-2.5 h-2.5 top-[-2442px] left-[-859px]'
  }
];

// Benefits card data
const benifitsCardData = [
  {
    image: '/img/effeciency.svg',
    title: 'Enhanced Efficiency',
    description:
      'Our solutions streamline your business processes, saving you time and resources.'
  },
  {
    image: '/img/cost-reduction.svg',
    title: 'Cost Reduction',
    description:
      'Reduce operational costs with our advanced technology and secure payment systems.'
  },
  {
    image: '/img/growth-support.svg',
    title: 'Growth Support',
    description:
      'Receive expert guidance and innovative tools to support your business growth.'
  }
];

// Card data
const cardData = [
  {
    title: 'Seamless Payment Processing',
    description:
      'Streamline your payment processes with Odin Merchant Solutions.',
    image:
      '/img/we-believe-in-transparency-and-fairness-ensuring-that-every-tra.png'
  },
  {
    title: 'Personalised Advisory',
    description:
      'Benefit from our expert advisory services tailored to your business needs.',
    image: '/img/shutterstock-1792803193-2.png'
  },
  {
    title: 'Advanced Technology',
    description:
      'Leverage the latest technology to enhance your business operations.',
    image: '/img/images-1.png'
  }
];

// Partner data
const partnersData = [
  { src: '/img/mastercard.svg', alt: 'Mastercard' },
  { src: '/img/visa.svg', alt: 'Visa' },
  { src: '/img/paypal.svg', alt: 'Paypal' },
  { src: '/img/stripe.svg', alt: 'Stripe' },
  { src: '/img/atlassian.svg', alt: 'Atlassian' },
  { src: '/img/apex.svg', alt: 'Apex' },
  { src: '/img/celestial.svg', alt: 'Celestial' },
  { src: '/img/2twice.svg', alt: '2Twice' }
];

export async function GET() {
  return NextResponse.json({
    imageData,
    benifitsCardData,
    cardData,
    partnersData
  });
}
