import { NextResponse } from 'next/server';

// Team members data to be served by the API
const teamMembers = [
  {
    imgSrc: '/img/image-16.png',
    name: 'Ahmed Elhenawy',
    position: 'Founder, CEO'
  },
  {
    imgSrc: '/img/paste-image-1.png',
    name: 'Jocelyn Schleifer',
    position: 'Managing Director'
  },
  {
    imgSrc: '/img/image-14.png',
    name: 'Jocelyn Schleifer',
    position: 'Managing Director'
  },
  {
    imgSrc: '/img/paste-image-2.png',
    name: 'Jocelyn Schleifer',
    position: 'Managing Director'
  },
  {
    imgSrc: '/img/image-15.png',
    name: 'Jocelyn Schleifer',
    position: 'Managing Director'
  },
  {
    imgSrc: '/img/paste-image-3.png',
    name: 'Jocelyn Schleifer',
    position: 'Managing Director'
  }
];

// Handle GET requests to serve team members data
export async function GET() {
  return NextResponse.json(teamMembers);
}
