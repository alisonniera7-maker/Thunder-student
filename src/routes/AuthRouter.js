import { Router } from 'express';
import jwt from 'jsonwebtoken';
const router = Router();
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Identifiants invalides.' });
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  });
  res.status(200).json({ token });
});
export default router;
