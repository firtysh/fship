import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js';
import dataRoutes from './routes/dataRoutes.js';
import db from './db/connection.js';
db.once('open', () => {
    console.log('Database connected !');
});
const app: Express = express();
app.use(cors({
    origin: 'https://fship.vercel.app',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.use('/api', authRoutes);
app.use('/api',dataRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server started on port 5000');
});