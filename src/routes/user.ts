import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middleware/auth';
import jwt from 'jsonwebtoken';
import { User } from '../mongoModels/User';
import { getUsers, testFun, userLogin } from '../controller/user.controller';

const router = Router();

// router.get('/me', authMiddleware, (req: Request, res: Response) => {
//     console.log(req.user,"userrrrr");

//   res.json({ user: req.user });
// });
router.get('/me', authMiddleware, getUsers);

router.get('/test', testFun);

router.post('/login', userLogin);

export default router;
