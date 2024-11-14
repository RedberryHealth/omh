// src/backend/services/subscriptionService.ts

// import { connectToDatabase } from '@/backend/db/connect';
import { Subscription } from '../models/subscriptionRequest';

/**
 * Save or update a subscription in the database.
 *
 * @param {string} email - The email address to subscribe.
 * @returns {Promise<{ success: boolean; message: string }>} - Subscription result.
 */
export async function saveSubscription(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    // Connect to the database
    // await connectToDatabase();

    // Check if the email already exists in the database
    const existingSubscription = await Subscription.findOne({ email });

    if (existingSubscription) {
      // Increment the request count if email already subscribed
      existingSubscription.requestCount += 1;
      await existingSubscription.save();
      return { success: true, message: 'Subscription updated' };
    } else {
      // Add new subscription with email and initial request count
      const newSubscription = new Subscription({
        email,
        timestamp: new Date(),
        requestCount: 1
      });
      await newSubscription.save();
      return { success: true, message: 'New subscription saved' };
    }
  } catch (error) {
    console.error('Error saving subscription:', error);
    return { success: false, message: 'Failed to save subscription' };
  }
}
