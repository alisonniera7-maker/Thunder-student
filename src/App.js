import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import AuthRouter from './routes/AuthRouter.js';
import EtudiantRouter from './routes/EtudiantRouter.js';
const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', AuthRouter);
app.use('/etudiants', EtudiantRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
