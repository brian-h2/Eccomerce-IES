import createNavBar from "./scripts/components/navbar.js";

const pages = [
    { title: "Inicio", url: "/index.html" },
    { title: "Zapatillas", url: "/pages/Category/zapatillas.html" },
    { title: "Camisetas", url: "/pages/Category/camisetas.html" },
    { title: "Pantalones", url: "/pages/Category/pantalones.html" },
];

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

    createNavBar(".navBar-pages ul",pages);
})