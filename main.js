import createNavBar from "./scripts/components/navbar.js";
import renderProductsIndex from "./scripts/components/productsIndex.js";

const pages = [
    { title: "Inicio", url: "/index.html", category: null, url: "/index.html"},
    { title: "Zapatillas", url: "/pages/Category/zapatillas.html", category: "women's clothing" },
    { title: "Camisetas", url: "/pages/Category/camisetas.html", category: "men's clothing" },
    { title: "Pantalones", url: "/pages/Category/pantalones.html", category: "jewelery" },
];

document.addEventListener('DOMContentLoaded', function() {
    const isAutenticadoJSON = localStorage.getItem('userAutenticado'); 

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

    createNavBar(".navBar-pages ul", pages);
    renderProductsIndex()
    
});
