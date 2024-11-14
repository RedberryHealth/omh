// src/backend/models/contact.ts

import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export const Contact = models.Contact || model('Contact', ContactSchema);