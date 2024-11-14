import { NextResponse } from 'next/server';

// Contact methods data
const contactMethods = [
  {
    icon: 'FiMail',
    title: 'Email',
    description: 'Our friendly team is here to help.',
    contactInfo: 'info@odinMerchanthub.com'
  },
  {
    icon: 'FiMessageCircle',
    title: 'Live chat',
    description: 'Our friendly team is here to help.',
    contactInfo: 'Start new chat'
  },
  {
    icon: 'FiMapPin',
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    contactInfo: '365 Rifle Camp Road, Suite 205, Woodland Park, NJ, 07424'
  },
  {
    icon: 'FiPhone',
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    contactInfo: '+1 201-705-7610'
  }
];

// Social media links
const socialLinks = [
  {
    icon: 'FaFacebook',
    link: 'https://www.facebook.com/share/mSg5aBPB2cgbxd7E/?mibextid=LQQJ4d'
  },
  {
    icon: 'TbBrandX',
    link: 'https://x.com/odinmerchanthub'
  },
  {
    icon: 'FaInstagram',
    link: 'https://www.instagram.com/odinmerchanthub'
  },
  {
    icon: 'FaLinkedin',
    link: 'https://www.linkedin.com/company/odin-merchant-hub/'
  },
  {
    icon: 'FaYoutube',
    link: 'https://youtube.com'
  }
];

// Handle GET requests to serve contact methods and social links
export async function GET() {
  return NextResponse.json({ contactMethods, socialLinks });
}
