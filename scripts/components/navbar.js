const pages = [
    { title: "Inicio", url: "../../index.html" },
    { title: "Remeras", url: "../../pages/Category/remeras.html" },
];

function createNavbar () {
    const navbarPages = document.querySelector(".navBar-pages ul");

    // Limpia el contenido existente si es necesario
    navbarPages.innerHTML = '';

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

// Llama a esta función en la inicialización de tus páginas

export { createNavbar };