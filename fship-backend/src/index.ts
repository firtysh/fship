import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js';
import db from './db/connection.js';
db.once('open', () => {
    console.log('Database connected !');
});
const app: Express = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log('Server started on port 3000');
});