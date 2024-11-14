// // src/lib/mongodb.ts
// import mongoose from 'mongoose';

// // Ensure the MONGODB_URI environment variable is defined
// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }

// // Use let to assign the cached connection
// const cached = globalThis.mongoose || { conn: null, promise: null };

// // If globalThis.mongoose doesn't exist, initialize it
// if (!globalThis.mongoose) {
//   globalThis.mongoose = cached;
// }

// export async function connectToDatabase(): Promise<mongoose.Mongoose> {
//   // If a connection already exists, return it
//   if (cached.conn) {
//     return cached.conn;
//   }

//   // If no promise exists, create a new one to connect to the database
//   if (!cached.promise) {
//     const opts: mongoose.ConnectOptions = {
//       bufferCommands: false
//     };

//     cached.promise = mongoose
//       .connect(MONGODB_URI, opts)
//       .then(mongooseInstance => {
//         return mongooseInstance;
//       });
//   }

//   // Await the promise and cache the connection
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
