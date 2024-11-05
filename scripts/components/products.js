import renderCart from "./cart.js";

export default async function renderProducts(category) {
    try {
        // Obtener el contenedor principal del inicio
        const mainContent = document.getElementById('main-content');
        const productFavorite = document.getElementById('productsfavorites');
        const title = document.getElementById('titleFavorite');

        if (mainContent && productFavorite) {
            mainContent.innerHTML = ''; 
            productFavorite.innerHTML = '';
            title.innerHTML = '';
        }

        const response = await fetch('../../data/products.json');
        const products = await response.json();

        if (category) {
            // Buscar la categoría seleccionada en los productos
            const selectedCategory = products.productos.find(
                producto => producto.categoria.toLowerCase() === category.toLowerCase()
            );

            if (selectedCategory && mainContent) {
                // Crear el título de la categoría
                const title = document.createElement('h3');
                title.innerText = selectedCategory.categoria;
                mainContent.appendChild(title);
                title.classList.add('title')

                // Crear una lista para los productos
                const productList = document.createElement('ul');
                productList.classList.add('product-list');

                // Renderizar los productos de la categoría seleccionada
                selectedCategory.items.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add('producto');

                    li.innerHTML = `
                        <img src="${item.img}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                        <div class="buttons">
                            <button class="btn-more" id="btn-more">+</button>
                            <button class="btn-delete" id="btn-delete">-</button>
                            <button class="btn-cart" id="btn-cart">🛒</button>
                        </div>
                    `;

                    // Agregar el producto a la lista
                    productList.appendChild(li);
                });

                // Agregar la lista de productos al contenedor principal
                mainContent.appendChild(productList);
                renderCart()

            } else {
                const errorMessage = document.createElement('p');
                errorMessage.innerText = "No se encontraron productos para esta categoría.";
                mainContent.appendChild(errorMessage);
            }
        }
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}
