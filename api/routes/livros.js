import express from 'express';
import { connectToDatabase } from '../utils/mongodb.js';
import { check, validationResult } from 'express-validator';

const router = express.Router();
const { db, ObjectId } = await connectToDatabase();
const livros = db.collection('livros');

const validaLivro = [
    check('titulo')
        .not().isEmpty().trim().withMessage('Título é obrigatório.')
    ,
    check('autor')
        .not().isEmpty().trim().withMessage('Autor é obrigatório.')
    ,
    check('publicacao')
        .not().isEmpty().trim().withMessage('Data de Publicação é obrigatório.')
    ,
    check('paginas')
        .not().isEmpty().trim().withMessage('Número de páginas é obrigatório.')
        .isNumeric().withMessage('Número de páginas deve ser um número')
    ,
    check('editora')
        .not().isEmpty().trim().withMessage('Editora é obrigatório.')
    ,
    check('idioma')
        .not().isEmpty().trim().withMessage('Idioma é obrigatório.')
    ,
    check('preco')
        .not().isEmpty().trim().withMessage('Preço é obrigatório.')
        .isNumeric().withMessage('Preço deve ser um número')
    ,
];

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


/*
    GET /api/livros/:id
    Lista Livro pelo ID
*/
router.get('/:id', async (req, res) => {

    const id = req.params.id;

    try {
        const doc = await livros
            .find({ '_id': { $eq: new ObjectId(id) } })
            .toArray()
        ;

        return res.status(200).json(doc);
    }
    catch (err) {
        return res.status(400).json({ 'message': 'Livro não encontrado.' });
    }
});


/*
    GET /api/livros/preco/:precoMin-:precoMax/titulo/:titulo
    Lista Livros filtrando por Preço Mínimo e Máximo e Título
*/
router.get('/preco/:precoMin-:precoMax/titulo/:titulo', async (req, res) => {

    const precoMin = parseFloat(req.params.precoMin);
    const precoMax = parseFloat(req.params.precoMax);
    const titulo = req.params.titulo;

    try {
        const docs = await livros
            .find({
                $and: [
                    { 'preco': { $gte: precoMin, $lte: precoMax } },
                    { 'titulo': { $regex: titulo, $options: 'i' } }
                ]
            })
            .toArray()
        ;

        if (!docs) {
            return res.status(400).json({ 'message': 'Livros não encontrados.' });
        }

        return res.status(200).json(docs);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});


/*
    DELETE /api/livros/:id
    Apaga Livro pelo ID
*/
router.delete('/:id', async (req, res) => {

    const id = req.params.id;

    try {
        const result = await livros.deleteOne({ '_id': { $eq: new ObjectId(id) } });

        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});


/*
    POST /api/livros
    Cria um novo Livro
*/
router.post('/', validaLivro, async (req, res) => {

    req.body.publicacao = new Date(req.body.publicacao);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    await livros
        .insertOne(req.body)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    ;
});


/*
    PUT /api/livros
    Altera um Livro
*/
router.put('/', validaLivro, async (req, res) => {

    req.body.publicacao = new Date(req.body.publicacao);
    
    const id = req.body._id;
    delete req.body._id;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    await livros
        .updateOne(
            { '_id': { $eq: new ObjectId(id) } },
            { $set: req.body }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    ;
});

export default router;