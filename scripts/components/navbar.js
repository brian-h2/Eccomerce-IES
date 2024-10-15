import renderProducts from "../components/products.js";

export default function createNavBar(navbarSelector, pages) {
    const navbar = document.querySelector(navbarSelector);
    
    if (navbar) {
        pages.forEach(page => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = page.url;
            link.textContent = page.title;

            link.addEventListener('click', (event) => {
                event.preventDefault(); // Evitar recarga de la página
            
                const selectedCategory = page.category;
            
                if (selectedCategory) {
                    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                    .then(res => res.json())
                    .then(products => {
                        renderProducts(products)
                    })
                   
                    .catch(error => {
                            console.error("Error al obtener los productos:", error);
                    });
                    
                } else if(selectedCategory == null) {
                    window.location.href = '../../index.html';
                }
                window.history.pushState({}, '', page.url);
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
