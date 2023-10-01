# API RESTful Node.js, Express e MongoDB

> Avaliação da matéria de Laboratório de Banco de Dados

### Setup do Projeto
```
   git clone https://github.com/danilojmarins/projeto-api.git
   npm install
   npm run dev
```
Accessar: http://localhost:4000/

### Variáveis de Ambiente
- Renomeie o arquivo '.env-example' para '.env'
- Indique as variáveis necessárias para conexão com o MongoDB

### Descrição dos Endpoints
<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>Descrição</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>/</th>
            <th>Root do Projeto - HTML de apresetação da API</th>
        </tr>
        <tr>
            <th>/api</th>
            <th>Root da API - Versão e Status da API</th>
        </tr>
        <tr>
            <th>/api/livros</th>
            <th>Lista todos os Livros</th>
        </tr>
        <tr>
            <th>/api/livros/:id</th>
            <th>Lista um Livro pelo ID</th>
        </tr>
        <tr>
            <th>/api/livros/preco/:precoMin-:precoMax/titulo/:titulo</th>
            <th>Lista os Livros filtrados por Preço Mínimo e Máximo e por Título</th>
        </tr>
    </tbody>
</table>