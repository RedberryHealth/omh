import { NextResponse } from 'next/server';

// Ensure testimonials array is properly defined
const testimonials = [
  {
    testimonial:
      '“The precision and efficiency of Odin Quant Strategies have significantly boosted our portfolio performance”',
    imageSrc: '/img/ellipse-1-5.png',
    name: 'Alex W.',
    title: 'Hedge Fund Manager'
  },
  {
    testimonial:
      '“Their integration of machine learning sets them apart, continuously improving our trading strategies”',
    imageSrc: '/img/ellipse-1-3.png',
    name: 'Lisa H.',
    title: 'Investment Analyst'
  },
  {
    testimonial:
      '“The quantitative research team at Odin Markets is top-notch, providing invaluable insights and strategies”',
    imageSrc: '/img/ellipse-1-4.png',
    name: 'Mark T.',
    title: 'Institutional Investor'
  },
  {
    testimonial:
      '“The precision and efficiency of Odin Quant Strategies have significantly boosted our portfolio performance”',
    imageSrc: '/img/ellipse-1-5.png',
    name: 'Alex W.',
    title: 'Hedge Fund Manager'
  },
  {
    testimonial:
      '“Their integration of machine learning sets them apart, continuously improving our trading strategies”',
    imageSrc: '/img/ellipse-1-3.png',
    name: 'Lisa H.',
    title: 'Investment Analyst'
  },
  {
    testimonial:
      '“The quantitative research team at Odin Markets is top-notch, providing invaluable insights and strategies”',
    imageSrc: '/img/ellipse-1-4.png',
    name: 'Mark T.',
    title: 'Institutional Investor'
  }
];

export async function GET() {
  return NextResponse.json(testimonials);
}
