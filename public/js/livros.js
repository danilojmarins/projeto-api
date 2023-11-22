//const baseURL = 'http://localhost:4000/api';

document.getElementById('livros-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const livroID = document.getElementById('id').value;

    let livro = {};

    if (livroID) {
        livro = {
            '_id': livroID,
            'titulo': document.getElementById('titulo').value,
            'autor': document.getElementById('autor').value,
            'publicacao': document.getElementById('publicacao').value,
            'paginas': document.getElementById('paginas').value,
            'editora': document.getElementById('editora').value,
            'idioma': document.getElementById('idioma').value,
            'preco': document.getElementById('preco').value,
        }
    }
    else {
        livro = {
            'titulo': document.getElementById('titulo').value,
            'autor': document.getElementById('autor').value,
            'publicacao': document.getElementById('publicacao').value,
            'paginas': document.getElementById('paginas').value,
            'editora': document.getElementById('editora').value,
            'idioma': document.getElementById('idioma').value,
            'preco': document.getElementById('preco').value,
        }
    }

    salvaLivro(livro);
});

async function salvaLivro(livro) {
    await fetch(`${baseURL}/livros`, {
        method: livro.hasOwnProperty('_id') ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
    .then(response => response.json())
    .then(data => {
        if (data.acknowledged) {
            alert(`✔ Livro ${livro.hasOwnProperty('_id') ? 'alterado' : 'incluído'} com sucesso!`);
            document.getElementById('livros-form').reset();
            carregaLivros();
        }
        else if (data.errors) {
            const errorsMessage = data.errors.map(err => err.msg).join('\n');

            document.getElementById('modal').className = 'modal visible';

            document.getElementById('errors').innerHTML = `
                <span>${errorsMessage}</span>
            `;
        }
        else {
            document.getElementById('modal').className = 'modal visible';

            document.getElementById('errors').innerHTML = `
                <span>Erro ao salvar livro.</span>
            `;
        }
    })
    .catch((err) => {
        console.error(`Erro ao salvar livro: ${err}`);
    });
}

async function carregaLivros() {
    const tabela = document.getElementById('dados');
    tabela.innerHTML = '';

    await fetch(`${baseURL}/livros`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((data) => {
        data.forEach((livro) => {
            tabela.innerHTML += `
            <tr>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.publicacao}</td>
                <td>${livro.paginas}</td>
                <td>${livro.editora}</td>
                <td>${livro.idioma}</td>
                <td>${livro.preco}</td>
                <td>
                    <button class="edit" onclick='getLivroById("${livro._id}")'>Editar</button> 
                    <button class="delete" onclick='deleteLivro("${livro._id}")'>Excluir</button>
                </td>
            </tr>
            `
        })
    })
    .catch((err) => {
        console.error(`Erro ao carregar livros: ${err}`);
    });
}

async function deleteLivro(id) {
    if (confirm('Deseja realmente excluir o livro?')) {
        await fetch(`${baseURL}/livros/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.deletedCount > 0) {
                carregaLivros();
            }
        })
        .catch((err) => {
            console.error(`Erro ao excluir livro: ${err}`);
        });
    }
}

async function getLivroById(id) {
    await fetch(`${baseURL}/livros/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data[0]) {
            document.getElementById('id').value = data[0]._id,
            document.getElementById('titulo').value = data[0].titulo,
            document.getElementById('autor').value = data[0].autor,
            document.getElementById('publicacao').value = data[0].publicacao,
            document.getElementById('paginas').value = data[0].paginas,
            document.getElementById('editora').value = data[0].editora,
            document.getElementById('idioma').value = data[0].idioma,
            document.getElementById('preco').value = data[0].preco
        }
    })
    .catch((err) => {
        console.error(`Erro ao carregar livro: ${err}`);
    });
}