import express from 'express';
import dotenv from 'dotenv';
import usersRoute from './routes/usersRoute.js';
import calendarRoute from './routes/calendarRoute.js';
import settingsRoute from './routes/settingsRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/users', usersRoute);
app.use('/calendar', calendarRoute);
app.use('/settings', settingsRoute);

app.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`);
})