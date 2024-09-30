import { createNavbar } from './scripts/components/navbar.js';

document.addEventListener('DOMContentLoaded', function() {
    const isAutenticado = localStorage.getItem('userAutenticado'); //Obtendremos en el local storage el valor almacenado en este caso sera false

    if (isAutenticado === 'true') {
        console.log('Usuario autenticado')
    } else {
        alert('Usuario no autenticado, sera redirigido al inicio de sesion')
        window.location.href = 'pages/login.html';
    }
    createNavbar();
})