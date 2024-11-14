// // src/backend/db/connect.ts

// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable');
// }

// export async function connectToDatabase() {
//   try {
//     // Assert that MONGODB_URI is a string since we've already checked it
//     const { connection } = await mongoose.connect(MONGODB_URI as string);

//     if (connection.readyState === 1) {
//       console.log('Connected to database');
//     }
//   } catch (error) {
//     console.error('Database connection error', error);
//     throw new Error('Database connection failed');
//   }
// }
