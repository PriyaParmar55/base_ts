// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../mongoModels/User';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(' ')[1];
	if (!token) return res.status(401).json({ message: 'Token missing' });

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { _id: string };
		const user = await User.findById(decoded._id);
		if (!user) return res.status(401).json({ message: 'User not found' });

		req.user = user;
		next();
	} catch (err) {
		res.status(403).json({ message: 'Invalid token' });
	}
};
