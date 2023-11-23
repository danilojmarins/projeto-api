const baseURL = 'https://projeto-api-nu.vercel.app/api';

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmar-senha');

confirmaSenha.addEventListener('change', () => {
    if (confirmaSenha.value !== senha.value) {
        confirmaSenha.setCustomValidity('As senhas devem ser iguais.');
    }
    else {
        confirmaSenha.setCustomValidity('');
    }
});

document.getElementById('cadastro-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formattedName = nome.value.replace(' ', '+');
    const avatar = `https://ui-avatars.com/api/?name=${formattedName}`;

    const cadastroData = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        avatar: avatar
    };

    fetch(`${baseURL}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cadastroData)
    })
    .then(response => response.json())
    .then((data) => {
        if (data.acknowledged) {
            alert('✔ Cadastro realizado com sucesso. Faça o Login.');
            window.location.href = 'index.html';
        }
        else if (data.errors) {
            const errorsMessage = data.errors.map(error => error.msg).join('\n');

            document.getElementById('modal').className = 'modal visible';

            document.getElementById('errors').innerHTML = `
                <span>${errorsMessage}</span>
            `;
        }
        else {
            document.getElementById('modal').className = 'modal visible';

            document.getElementById('errors').innerHTML = `
                <span>Não foi possível efetuar o cadastro.</span>
            `;
        }
    })
    .catch((err) => {
        console.error(`Erro durante o cadastro: ${err}`);
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').className = 'modal';
});