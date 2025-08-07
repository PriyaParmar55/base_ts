// config/index.ts
import dotenv from 'dotenv';
dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL || '';

if (!DATABASE_URL) {
	throw new Error('DATABASE_URL is not defined in .env file');
}
