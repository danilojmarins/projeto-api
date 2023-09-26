import express from 'express';
import { connectToDatabase } from '../utils/mongodb.js';

const router = express.Router();
const { db, ObjectId } = await connectToDatabase();

const livros = db.collection('livros');

/*
    GET /api/livros
    Lista todos os Livros
*/
router.get('/', async (req, res) => {
    try {
        const docs = await livros.find().toArray();

        if (!docs) {
            return res.status(400).json({ 'message': 'Livros não encontrados.' });
        }

        return res.status(200).json(docs);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});

export default router;