import { NextResponse } from 'next/server';

// Testimonials data
const testimonials = [
  {
    testimonial:
      "“Odin Merchant Solutions' payment solutions have streamlined our transactions, significantly reducing chargebacks”",
    imageSrc: '/img/ellipse-1.png',
    name: 'Laura M.',
    title: 'Retail Business Owner'
  },
  {
    testimonial:
      '“The personalised advisory services have been invaluable in helping us optimise our financial management”',
    imageSrc: '/img/ellipse-1-1.png',
    name: 'David T.',
    title: 'Tech Startup Founder'
  },
  {
    testimonial:
      '“The advanced technology provided by Odin Merchant Solutions has improved our operational efficiency and supported our growth”',
    imageSrc: '/img/ellipse-1-2.png',
    name: 'Sophia L',
    title: 'Manufacturing Business Owner'
  },
  {
    testimonial:
      "“Odin Merchant Solutions' payment solutions have streamlined our transactions, significantly reducing chargebacks”",
    imageSrc: '/img/ellipse-1.png',
    name: 'Laura M.',
    title: 'Retail Business Owner'
  },
  {
    testimonial:
      '“The personalised advisory services have been invaluable in helping us optimise our financial management”',
    imageSrc: '/img/ellipse-1-1.png',
    name: 'David T.',
    title: 'Tech Startup Founder'
  },
  {
    testimonial:
      '“The advanced technology provided by Odin Merchant Solutions has improved our operational efficiency and supported our growth”',
    imageSrc: '/img/ellipse-1-2.png',
    name: 'Sophia L',
    title: 'Manufacturing Business Owner'
  },
  {
    testimonial:
      "“Odin Merchant Solutions' payment solutions have streamlined our transactions, significantly reducing chargebacks”",
    imageSrc: '/img/ellipse-1.png',
    name: 'Laura M.',
    title: 'Retail Business Owner'
  },
  {
    testimonial:
      '“The personalised advisory services have been invaluable in helping us optimise our financial management”',
    imageSrc: '/img/ellipse-1-1.png',
    name: 'David T.',
    title: 'Tech Startup Founder'
  },
  {
    testimonial:
      '“The advanced technology provided by Odin Merchant Solutions has improved our operational efficiency and supported our growth”',
    imageSrc: '/img/ellipse-1-2.png',
    name: 'Sophia L',
    title: 'Manufacturing Business Owner'
  }
];

export async function GET() {
  return NextResponse.json(testimonials);
}
