
export default function createNavBar(navbarSelector, pages) {
    const navbar = document.querySelector(navbarSelector);
    
    if (navbar) {

        pages.forEach(page => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = page.url;
            link.textContent = page.title;

            listItem.appendChild(link);
            navbar.appendChild(listItem);
        });
    } else {
        console.error(`No se encontró un elemento con el selector ${navbarSelector}`);
    }

    const btnLogout = document.getElementById('btn-logout');

    if(btnLogout) {
        btnLogout.addEventListener('click', () => {
            window.location.href = 'pages/login.html';
        });
    } else {
        console.error("No se encontró el botón de logout.");
    }
}


