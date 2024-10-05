const pages = [
    { title: "Inicio", url: "/index.html" },
    { title: "Zapatillas", url: "/pages/Category/zapatillas.html" },
    { title: "Camisetas", url: "/pages/Category/camisetas.html" },
    { title: "Pantalones", url: "/pages/Category/pantalones.html" },
];

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
}


