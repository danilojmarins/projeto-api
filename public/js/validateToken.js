const baseURL = 'https://projeto-api-nu.vercel.app/api';

document.addEventListener('DOMContentLoaded', () => {
    fetch(`${baseURL}/usuarios/validateToken`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((data) => {
        if (!data.valid) {
            window.location.href = 'index.html';
        }
    })
    .catch((err) => {
        console.error(`Erro ao validar Token: ${err}`);
    });
});

const logoutBTN = document.getElementById('logout');

logoutBTN.addEventListener('click', () => {
    fetch(`${baseURL}/usuarios/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        window.location.href = 'index.html';
    })
    .catch((err) => {
        console.error(`Erro ao realizar Logout: ${err}`);
    });
});