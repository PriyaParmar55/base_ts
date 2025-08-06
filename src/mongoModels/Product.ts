import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: String,
  stock: { type: Number, default: 0 },
}, { timestamps: true });

export default model<IProduct>('Product', productSchema);
