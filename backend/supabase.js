import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const supabase = axios.create({
    baseURL: `${process.env.SUPABASE_URL}/rest/v1`,
    headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
        "Content-Type": 'application/json',
    }
});