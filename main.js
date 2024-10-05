import { createNavbar,createNavBarPages } from './scripts/components/navbar.js';

document.addEventListener('DOMContentLoaded', function() {
    const isAutenticadoJSON = localStorage.getItem('userAutenticado'); 

    console.log(isAutenticadoJSON);

    if (isAutenticadoJSON) {
        const isAutenticado = JSON.parse(isAutenticadoJSON); 

        if (isAutenticado.authenticated === true) {
            console.log('Usuario autenticado:', isAutenticado.name);
            
        } else {
            alert('Usuario no autenticado, será redirigido al inicio de sesión');
            window.location.href = 'pages/login.html';
        }
    } else {
        alert('Usuario no autenticado, será redirigido al inicio de sesión');
        window.location.href = 'pages/login.html';
    }

    createNavbar();
    createNavBarPages();
})