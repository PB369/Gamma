import { Router } from 'express';
import { database } from '../database.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { data } = await database.get('/settings?select=*');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { theme, language, haveMFA,  } = req.body;
        const { data } = await database.post('/settings', [{ theme, language, haveMFA }]);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const { data } = await database.patch(`/settings?id=eq.${id}`, { title });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await database.delete(`/settings?id=eq.${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;