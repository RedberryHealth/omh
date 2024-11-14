import { NextResponse } from 'next/server';

// Core values data to be served by the API
const coreValues = [
  {
    icon: 'MdOutlineLightbulb',
    title: 'Open Possibilities',
    description:
      'Experience the power of financial empowerment with Odin Markets. We believe in opening up a world of possibilities for our customers, allowing them to take control of their financial lives and explore new horizons of investment and growth.'
  },
  {
    icon: 'FaKey',
    title: 'Democratise Access',
    description:
      'We are committed to democratizing finance by breaking down barriers and providing access to a wide range of financial products and services. Join us in our mission to make finance inclusive for all.'
  },
  {
    icon: 'FaUsers',
    title: 'Inclusive and Genuine',
    description:
      'Odin Markets embraces diversity and fosters genuine connections with our customers. We prioritize building trust and delivering personalized financial solutions that cater to your unique needs.'
  },
  {
    icon: 'FaPuzzlePiece',
    title: 'Next-Generation Solutions',
    description:
      'We develop and support next-generation financial solutions. Our comprehensive suite of financial tools and services empowers your entire financial journey, ensuring simplicity and seamlessness in managing your finances.'
  }
];

// Handle GET requests to serve core values data
export async function GET() {
  return NextResponse.json(coreValues);
}
