// src/app/api/contact/route.ts
import { saveContactMessage } from '@/backend/services/mailService'; // Import the saveContactMessage function
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const result = await saveContactMessage(name, email, message);

  if (result.success) {
    return NextResponse.json({ message: 'Message sent successfully!' });
  }
  // comment
  return NextResponse.json(
    { error: 'Failed to send message' },
    { status: 500 }
  );
}
