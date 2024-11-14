import { NextResponse } from 'next/server';

// Testimonials data to be served by the API
const testimonials = [
  {
    id: 1,
    text: '“Odin Markets transformed my trading experience with their AI-driven insights. Odin Markets transformed my trading experience with their AI-driven insights.Odin Markets transformed my trading experience with their AI-driven insights”',
    name: 'John D',
    title: 'Customer',
    imgSrc: '/img/ellipse-325.svg'
  },
  {
    id: 2,
    text: '“Their currency navigator is a game-changer for my business. Their currency navigator is a game-changer for my business. Their currency navigator is a game-changer for my business. Their currency navigator is a game-changer for my business. Their currency navigator is a game-changer for my business. Their currency navigator is a game-changer for my business.”',
    name: 'Sarah K',
    title: 'Head of Upwork',
    imgSrc: '/img/ellipse-326.svg'
  },
  {
    id: 3,
    text: '“Odin Markets transformed my trading experience with their AI-driven insights. Odin Markets transformed my trading experience with their AI-driven insights.Odin Markets transformed my trading experience with their AI-driven insights”',
    name: 'John D',
    title: 'Customer',
    imgSrc: '/img/ellipse-326-6.svg'
  }
];

// Handle GET requests to serve testimonials data
export async function GET() {
  return NextResponse.json(testimonials);
}
