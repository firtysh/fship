import { config } from 'dotenv';
config();

import mongoose, { Connection } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';


try {
    mongoose.connect(MONGO_URI);
} catch (error) {
    console.log(error);
}

const db: Connection = mongoose.connection;
export default db;