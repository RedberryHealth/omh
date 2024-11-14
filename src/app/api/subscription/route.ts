// src/app/api/subscription/route.ts
import { NextResponse } from 'next/server';
// import { connectToDatabase } from '@/backend/db/connect';
import { Subscription } from '@/backend/models/subscriptionRequest';
import { sendEmail } from '@/backend/services/mailService';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // await connectToDatabase();

    // Check if email already exists
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      existingSubscription.requestCount += 1;
      await existingSubscription.save();
    } else {
      const newSubscription = new Subscription({
        email,
        timestamp: new Date(),
        requestCount: 1
      });
      await newSubscription.save();
    }

    // Send email using the email service
    const emailResult = await sendEmail(
      email,
      'Subscription Confirmation',
      'Thank you for subscribing to our newsletter!'
    );

    if (!emailResult.success) {
      return NextResponse.json(
        { message: 'Subscription successful but email failed to send.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Subscription successful and email sent!'
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to subscribe' + error },
      { status: 500 }
    );
  }
}
