// src/backend/services/userService.ts

import { User } from '../models/user';
// import { connectToDatabase } from '../db/connect';

export async function registerUser(userData: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  businessPurpose: string;
  privacyPolicy: boolean;
}) {
  try {
    // await connectToDatabase();

    // Save the user data to the database
    const newUser = new User(userData);
    await newUser.save();

    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Error registering user' };
  }
}
