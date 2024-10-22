export default async function renderProducts(category) {
    try {
        // Obtener el contenedor principal del inicio
        const mainContent = document.getElementById('main-content');
        
        // Limpiar el contenido del inicio
        if (mainContent) {
            mainContent.innerHTML = ''; // Limpia todo el contenido del inicio
        }

        // Hacer la solicitud a la API o al archivo JSON
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
                            <button class="btn-more">+</button>
                            <button class="btn-delete">-</button>
                        </div>
                    `;

                    // Agregar el producto a la lista
                    productList.appendChild(li);
                });

                // Agregar la lista de productos al contenedor principal
                mainContent.appendChild(productList);
            } else {
                // Mostrar un mensaje si no se encuentran productos
                const errorMessage = document.createElement('p');
                errorMessage.innerText = "No se encontraron productos para esta categoría.";
                mainContent.appendChild(errorMessage);
            }
        }
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}
