// src/types/global.d.ts

/* eslint-disable no-var */
import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

export {};
