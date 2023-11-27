# API RESTful Node.js, Express e MongoDB

> Avaliação da matéria de Laboratório de Banco de Dados

### Setup do Projeto
```
   git clone https://github.com/danilojmarins/projeto-api.git
   npm install
   npm run dev
```
Acessar: http://localhost:4000/

### Variáveis de Ambiente
- Renomeie o arquivo '.env-example' para '.env'
- Indique as variáveis necessárias para conexão com o MongoDB
- Indique as variáveis de Chave Secreta e Expiração do JWT

### Pacotes Utilizados
```
npm i express               // Framework Web para Node.js
npm i express-validator     // Middleware de validação de dados
npm i mongodb               // Driver oficial do MongoDB para Node.js
npm i jsonwebtoken          // Implementação de JWT
npm i bcryptjs              // Algoritmo de geração de Hashs para armazenamento de senhas
npm i cookie-parser         // Middleware para Parse de Cookies de requisições HTTP
npm i dotenv                // Carrega variáveis de ambiente
npm i nodemon --dev         // Hot-Reload do servidor
```

### Descrição dos Endpoints
<table>
    <thead>
        <tr>
            <th>Método HTTP</th>
            <th>Endpoint</th>
            <th>Descrição</th>
            <th>Autenticado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>GET</code></td>
            <td><code>/</code></td>
            <td>Root - HTML de Login da API</td>
            <td align="center">✖️️</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api</code></td>
            <td>Root da API - Versão e Status da API</td>
            <td align="center">✖️</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros</code></td>
            <td>Lista todos os Livros</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros/:id</code></td>
            <td>Lista um Livro pelo ID</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros/preco/:precoMin- :precoMax/titulo/:titulo</code></td>
            <td>Lista os Livros filtrados por Preço Mínimo e Máximo e por Título</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>DELETE</code></td>
            <td><code>/api/livros/:id</code></td>
            <td>Apaga um Livro pelo ID</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>POST</code></td>
            <td><code>/api/livros</code></td>
            <td>Cria um novo Livro</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>PUT</code></td>
            <td><code>/api/livros</code></td>
            <td>Altera um Livro pelo ID</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/usuarios</code></td>
            <td>Lista todos os Usuários</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/usuarios/validateToken</code></td>
            <td>Valida Token JWT</td>
            <td align="center">✖️</td>
        </tr>
        <tr>
            <td><code>POST</code></td>
            <td><code>/api/usuarios</code></td>
            <td>Cadastro de um novo Usuário</td>
            <td align="center">✖️</td>
        </tr>
        <tr>
            <td><code>POST</code></td>
            <td><code>/api/usuarios/login</code></td>
            <td>Faz o Login de um Usuário</td>
            <td align="center">✖️</td>
        </tr>
        <tr>
            <td><code>POST</code></td>
            <td><code>/api/usuarios/logout</code></td>
            <td>Faz o Logout de um Usuário</td>
            <td align="center">✖️</td>
        </tr>
        <tr>
            <td><code>PUT</code></td>
            <td><code>/api/usuarios/:id</code></td>
            <td>Altera um Usuário pelo ID</td>
            <td align="center">✔</td>
        </tr>
        <tr>
            <td><code>DELETE</code></td>
            <td><code>/api/usuarios/:id</code></td>
            <td>Exclui um Usuário pelo ID</td>
            <td align="center">✔</td>
        </tr>
    </tbody>
</table>

### Descrição das Páginas
<table>
    <thead>
        <tr>
            <th>Arquivo</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>index.html</code></td>
            <td>Página de Login do Usuário</td>
        </tr>
        <tr>
            <td><code>cadastro.html</code></td>
            <td>Página de Cadastro de Usuários</td>
        </tr>
        <tr>
            <td><code>menu.html</code></td>
            <td>Menu Interno</td>
        </tr>
        <tr>
            <td><code>livros.html</code></td>
            <td>Página de CRUD de Livros</td>
        </tr>
    </tbody>
</table>

### Processo de Autenticação JWT

1. Usuário faz Login com e-mail e senha
2. Token JWT é criado com um tempo de expiração
3. Token JWT é armazenado como Cookie httpOnly com header Set-Cookie
4. Quaisquer requisições subsequentes do Client são enviadas com o Cookie
5. Middleware faz o parse do Cookie e verifica a validade do JWT

### Colaboradores
- Danilo José Marins

Link do Projeto: https://projeto-api-nu.vercel.app/