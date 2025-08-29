import { Router } from 'express';
import { database } from '../database.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { data } = await database.get('/calendar?select=*&order=created_at.asc');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await database.get(`/calendar?id=eq.${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { user_id, color, date, title, isFinished, time, link, address, description } = req.body;
        const { data } = await database.post('/calendar', [{ color, date, title, isFinished, time, link, address, description }]);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFields = req.body;
        const { data } = await database.patch(`/calendar?id=eq.${id}`, updatedFields, {
            headers: {
                Prefer: 'return=representation'
            }
        });
        res.json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await database.delete(`/calendar?id=eq.${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;