import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema({
  email: { type: String, required: true },
  timestamp: { type: Date, required: true },
  requestCount: { type: Number, default: 1 }
});

export const Subscription =
  mongoose.models.Subscription ||
  mongoose.model('Subscription', subscriptionSchema);
