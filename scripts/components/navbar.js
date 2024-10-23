import renderProducts from "./products.js";

export default async function createNavBar(navbarSelector, pages) {
    const navbar = document.querySelector(navbarSelector);
    
    if (navbar) {
        pages.forEach(page => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");

            link.href = page.url; // Esto es para navegar o usar con renderProducts
            link.textContent = page.title;

            // Agregar el evento 'click' para renderizar productos cuando se haga clic
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Evita la navegación automática por enlace

                if(link.textContent === 'Inicio') {
                    window.location.href = '../../index.html'
                } else {
                    const category = link.textContent;                    
                    renderProducts(category);
                }

            });

            listItem.appendChild(link);
            navbar.appendChild(listItem);
        });
    } else {
        console.error(`No se encontró un elemento con el selector ${navbarSelector}`);
    }

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            window.location.href = 'pages/login.html';
        });
    } else {
        console.error("No se encontró el botón de logout.");
    }
}
