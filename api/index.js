import express from 'express';
import cookieParser from 'cookie-parser';
import rotasLivros from './routes/livros.js';
import rotasUsuarios  from './routes/usuarios.js';

const PORT = 4000 || process.env.PORT;

const app = express();

// Parse JSON
app.use(express.json());

// Parse HTTP cookies da requisição
app.use(cookieParser());

// Rota para servir arquivos estáticos
app.use('/', express.static('public'));

// Configura Favicon
app.use('/favicon.ico', express.static('public/images/computer.png'));

// Rota base da API
app.get('/api', (req, res) => {
    return res.json({
        'message': 'API Rodando',
        'version': '1.0.0'
    });
});

app.use('/api/livros', rotasLivros);
app.use('/api/usuarios', rotasUsuarios);

// Tratamento de Rotas Inválidas
app.use((req, res) => {
    return res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            message: `A rota ${req.originalUrl} não existe`,
            param: `invalid route`
        }]
    });
});

// Inicialização do Server
app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));