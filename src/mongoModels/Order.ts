import { Schema, model, Document } from 'mongoose';

export interface IOrderItem {
  product: Schema.Types.ObjectId;
  quantity: number;
}

export interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
}

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export default model<IOrder>('Order', orderSchema);
