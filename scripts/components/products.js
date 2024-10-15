export default function renderProducts(product) {

    const bloqueRender = document.getElementById('products-container');
    const loadingIndicator = document.getElementById('loading');
    

    if (!bloqueRender) {
        console.error("El contenedor de productos no existe en el DOM.");
        return;
    }

    loadingIndicator.style.display = 'none';
    bloqueRender.innerHTML = '';

    product.forEach(product => {
        const producto = document.createElement('div');
        producto.classList.add('producto');
        producto.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} $</p>
            <div class="button">
                <button class="btn-more">+</button>
                <button class="btn-delete">-</button>
            </div>
        `;
        bloqueRender.appendChild(producto);
    });
}


