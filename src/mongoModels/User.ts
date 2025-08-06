// models/User.ts

import { Document, model, Schema } from 'mongoose';

export interface IUser  extends Document {
  name: string;
  email: string;
  age: number;
  gender: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<IUser>('User', UserSchema);
