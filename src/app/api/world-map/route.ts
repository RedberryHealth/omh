import { NextResponse } from 'next/server';

// Contact information data
const contactInfo = [
  {
    title: 'Support',
    description: 'Our friendly team is here to help.',
    icon: 'MdSupportAgent',
    contactText: 'info@odinMerchanthub.com'
  },
  {
    title: 'Live chat',
    description: 'Our friendly team is here to help.',
    icon: 'FaComments',
    contactText: 'Start new chat'
  },
  {
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    icon: 'FaPhoneAlt',
    contactText: '+1 201-705-7610'
  }
];

// Markers data
const markers = [
  {
    coordinates: [-100.006, 20.7128],
    name: 'New York, USA',
    address: '365 Rifle Camp Road, Suite 205, Woodland Park, NJ, 07424',
    img: '/img/usa-icon.svg',
    alt: 'Icon usa'
  },
  {
    coordinates: [-15.2, 5.0444],
    name: 'Cairo, Egypt',
    address: 'Cairo, Egypt',
    img: '/img/icon-egypt.png',
    alt: 'Icon egypt'
  }
];

// Handle GET requests to serve contact information and markers
export async function GET() {
  return NextResponse.json({ contactInfo, markers });
}
