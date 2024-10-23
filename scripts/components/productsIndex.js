export default async function renderProductsIndex() {
    try {
        const productsFavorites = document.getElementById('productsfavorites');
        
        // Limpiamos el contenedor de productos favoritos
        productsFavorites.innerHTML = '';
        
        const response = await fetch('../../data/products.json');
        const data = await response.json();
        

        const products = data.productos; 

        if (!products || products.length === 0) {
            console.error('No se encontraron productos en el archivo JSON');
            return;
        }

        for (let i = 0; i < products.length; i++) {
            const items = products[i].items;

            // Filtramos los productos que son favoritos (isFavorite: true)
            const favoriteItems = items.filter(item => item.isFavorite);
        
            favoriteItems.forEach(favorite => {
                const card = createProductCard(favorite);
                productsFavorites.appendChild(card);
            });
        }

    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}


function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="product-image"/>
    `;

    return card;
}
