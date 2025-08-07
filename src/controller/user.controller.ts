import { Request, Response } from 'express';
import { User } from '../mongoModels/User';
import jwt from 'jsonwebtoken';

export const getUsers = async (req: Request, res: Response) => {
	try {
		res.json({ user: req.user });
	} catch (error) {
		console.log(error, 'errrrrrrrrrrrrrrrrr');
	}
};

export const userLogin = async (req: Request, res: Response) => {
	try {
		const { email } = req.body;

		// Fake login: find or create user
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({ name: 'Test User', email, role: 'user' });
			await user.save();
		}

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!, {
			expiresIn: '1h',
		});

		res.json({ token });
	} catch (error) {
		console.log(error, 'errrrrrrrrrrrrrrrrr');
	}
};

export const testFun = async (req: Request, res: Response) => {
	try {
		let user = User.aggregate([
			{
				$group: {
					_id: '$gender',
					total: { $sum: 1 },
					avgAge: { $avg: '$age' },
				},
			},
		]);
		res.json({ user });
	} catch (error) {
		console.log(error, 'errrrrrrrrrrrrrrrrr');
	}
};
