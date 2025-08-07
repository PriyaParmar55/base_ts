import { Schema, model, Document } from 'mongoose';
import { IUser } from './User';
import { IProduct } from './Product';

export interface ICartItem {
	product: IProduct['_id'];
	quantity: number;
}

export interface ICart extends Document {
	user: IUser['_id'];
	items: ICartItem[];
}

const cartSchema = new Schema<ICart>(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		items: [
			{
				product: { type: Schema.Types.ObjectId, ref: 'Product' },
				quantity: { type: Number, default: 1 },
			},
		],
	},
	{ timestamps: true },
);

export default model<ICart>('Cart', cartSchema);
