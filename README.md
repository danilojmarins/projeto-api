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

### Descrição dos Endpoints
<table>
    <thead>
        <tr>
            <th>Método HTTP</th>
            <th>Endpoint</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>GET</code></td>
            <td><code>/</code></td>
            <td>Root do Projeto - HTML de apresetação da API</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api</code></td>
            <td>Root da API - Versão e Status da API</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros</code></td>
            <td>Lista todos os Livros</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros/:id</code></td>
            <td>Lista um Livro pelo ID</td>
        </tr>
        <tr>
            <td><code>GET</code></td>
            <td><code>/api/livros/preco/:precoMin-:precoMax/titulo/:titulo</code></td>
            <td>Lista os Livros filtrados por Preço Mínimo e Máximo e por Título</td>
        </tr>
        <tr>
            <td><code>DELETE</code></td>
            <td><code>/api/livros/:id</code></td>
            <td>Apaga um Livro pelo ID</td>
        </tr>
        <tr>
            <td><code>POST</code></td>
            <td><code>/api/livros</code></td>
            <td>Cria um novo Livro</td>
        </tr>
        <tr>
            <td><code>PUT</code></td>
            <td><code>/api/livros</code></td>
            <td>Altera um Livro pelo ID</td>
        </tr>
    </tbody>
</table>

### Colaboradores
- Danilo José Marins

Link da API Pública: https://projeto-api-nu.vercel.app/