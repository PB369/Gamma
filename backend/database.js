import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const database = axios.create({
    baseURL: `${process.env.DATABASE_URL}/rest/v1`,
    headers: {
        apikey: process.env.DATABASE_SERVICE_KEY,
        Authorization: `Bearer ${process.env.DATABASE_SERVICE_KEY}`,
        "Content-Type": 'application/json',
    }
});