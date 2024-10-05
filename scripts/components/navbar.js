const pages = [
    { title: "Inicio", url: "../../index.html" },
    { title: "Zapatillas", url: "../../pages/Category/zapatillas.html" },
    { title: "Camisetas", url: "../../pages/Category/camisetas.html" },
    { title: "Pantalones", url: "../../pages/Category/pantalones.html" },

];

const pages2 = [
    { title: "Inicio", url: "../../index.html" },
    { title: "Zapatillas", url: "./zapatillas.html" },
    { title: "Camisetas", url: "./camisetas.html" },
    { title: "Pantalones", url: "./pantalones.html" },

];

function createNavBarPages() {
    const navbarPages = document.querySelector(".navBar-pages-elements ul");


    // Itera sobre las páginas definidas en pages.js y crea los elementos de la lista
    pages2.forEach(page => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.title;
        
        listItem.appendChild(link);
        navbarPages.appendChild(listItem);
    });
    

}

function createNavbar () {
    const navbarPages = document.querySelector(".navBar-pages ul");

    // Itera sobre las páginas definidas en pages.js y crea los elementos de la lista
    pages.forEach(page => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.title;
        
        listItem.appendChild(link);
        navbarPages.appendChild(listItem);
    });

    
}

// Llama a esta función en la inicialización de las páginas

export { createNavbar, createNavBarPages };