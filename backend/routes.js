import { Router } from 'express';
import { supabase } from './supabase.js';

const router = Router();

router.get('/events', async (req, res) => {
    try {
        const { data } = await supabase.get('/events?select=*');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/events', async (req, res) => {
    try {
        const { title } = req.body;
        const { data } = await supabase.post('/events', [{ title }]);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('events/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const { data } = await supabase.patch(`/todos?id=eq.${id}`, { title });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/events/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await supabase.delete(`/events?id=eq.${id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;