// src/app/api/register/route.ts

import { NextResponse } from 'next/server';
import { registerUser } from '@/backend/services/userService';

export async function POST(req: Request) {
  try {
    const data = await req.json(); // Get the JSON data from the request body

    const {
      firstName,
      lastName,
      email,
      message,
      businessPurpose,
      privacyPolicy
    } = data;

    // Validate that all fields are present
    if (
      !firstName ||
      !lastName ||
      !email ||
      !message ||
      !businessPurpose ||
      privacyPolicy === undefined
    ) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Register the user
    const result = await registerUser({
      firstName,
      lastName,
      email,
      message,
      businessPurpose,
      privacyPolicy
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing registration' },
      { status: 500 }
    );
  }
}
