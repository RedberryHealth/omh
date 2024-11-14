// src/backend/models/user.ts

import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    businessPurpose: { type: String, required: true },
    privacyPolicy: { type: Boolean, required: true }
  },
  { timestamps: true }
);

export const User = models.User || model('User', UserSchema);
