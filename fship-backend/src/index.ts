import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js';
import db from './db/connection.js';
db.once('open', () => {
    console.log('Database connected !');
});
const app: Express = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.use('/api', authRoutes);


app.listen(5000, () => {
    console.log('Server started on port 5000');
});