
export default async function renderProducts(category) {
    try {
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
            const selectedCategory = products.productos.find(
                producto => producto.categoria.toLowerCase() === category.toLowerCase()
            );

            if (selectedCategory && mainContent) {
                const titleElement = document.createElement('h3');
                titleElement.innerText = selectedCategory.categoria;
                mainContent.appendChild(titleElement);
                titleElement.classList.add('title');

                const productList = document.createElement('ul');
                productList.classList.add('product-list');

                selectedCategory.items.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add('producto');
                    li.innerHTML = `
                        <img src="${item.img}" alt="${item.title}">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                        <div class="buttons">
                            <button class="btn-more" data-id="${item.id}">+</button>
                        </div>
                    `;
                    productList.appendChild(li);
                });

                mainContent.appendChild(productList);

                // Eventos para agregar al carrito
                document.querySelectorAll(".btn-more").forEach(btn => {
                    btn.addEventListener("click", () => {
                        addToCart(btn.dataset.id, selectedCategory)
                });
                });
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

// Carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const btnCart = document.getElementById('btn-cart')


btnCart.addEventListener('click', () => {
    renderCartProducts()
})

function addToCart(itemId, category) {
    const item = category.items.find(item => item.id === parseInt(itemId));
    if (item) {
        carrito.push(item);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado correctamente')
        renderCartProducts();
    }
}

function renderCartProducts() {
    let cartContainer = document.querySelector('.cart-container');
    const mainContent = document.querySelector('main');

    if (!cartContainer) {
        cartContainer = document.createElement('div');
        cartContainer.classList.add('cart-container');
        cartContainer.innerHTML = `
            <button class="close-cart">Cerrar</button>
            <button class="clean-cart">Limpiar</button>
            <h1 class="title">Tu Carrito</h1>
            <ul class="cart-items"></ul>
            <p>Total: $<span class="cart-total">0</span></p>
        `;
        mainContent.appendChild(cartContainer);

        cartContainer.querySelector('.close-cart').addEventListener('click', () => {
            cartContainer.classList.remove('show');
        });

        cartContainer.querySelector('.clean-cart').addEventListener('click', () => {
            localStorage.removeItem('carrito');
            carrito = [];
            alert('Carrito vaciado correctamente');
            renderCartProducts();
        });
    }

    cartContainer.classList.add('show');

    const cartItems = cartContainer.querySelector('.cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    let idItem = 0;

    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('listCart');
        listItem.innerHTML = `
            <h1 class="title-item">${item.title}</h1>
            <h2 class="title-price">$${item.price}</h2>
            <img src="${item.img}" alt="${item.title}">
            <button class="btn-delete" data-id="${item.id}">Eliminar</button>
        `;
        idItem = item.id
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartContainer.querySelector('.cart-total').textContent = total;
    

    cartItems.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.getAttribute('data-id');
            carrito = carrito.filter(item => item.id !== parseInt(itemId));
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto eliminado correctamente')
            renderCartProducts();
        });
    });
}
