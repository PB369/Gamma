import { Router } from 'express';
import { database } from '../database.js';

const router = Router();

router.get('/users', async (req, res) => {
    try {
        const { data } = await database.get('/users?select=*');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/users', async (req, res) => {
    try {
        const { title } = req.body;
        const { data } = await database.post('/users', [{ title }]);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const { data } = await database.patch(`/users?id=eq.${id}`, { title });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await database.delete(`/users?id=eq.${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;