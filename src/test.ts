import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
	(req as any).user = { name: 'test' }; // ✅ If this throws error, your types are not loaded
	//console.log(req.user,"userrrrr");

	res.send('Hello');
});
