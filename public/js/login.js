const baseURL = 'http://localhost:4000/api';

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const loginData = {
        email,
        senha
    };

    fetch(`${baseURL}/usuarios/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then((data) => {
        if (data.success === true) {
            window.location.href = 'menu.html';
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
                <span>Não foi possível efetuar o login. Verifique suas credenciais.</span>
            `;
        }
    })
    .catch((err) => {
        console.error(`Erro durante o login: ${err}`);
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').className = 'modal';
});