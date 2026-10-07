// ===============================
// PRODUCT DATA
// ===============================

const products = [

    {
        id: 1,
        name: "Essential White Tee",
        category: "men",
        price: 799,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Classic Denim Jacket",
        category: "men",
        price: 1799,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Relaxed Black Shirt",
        category: "men",
        price: 999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Oversized Street Hoodie",
        category: "streetwear",
        price: 1499,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Minimal Summer Dress",
        category: "women",
        price: 1299,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Urban Denim Look",
        category: "women",
        price: 1599,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Premium Cargo Pants",
        category: "streetwear",
        price: 1399,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Everyday Oversized Tee",
        category: "streetwear",
        price: 899,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80"
    }

];


// ===============================
// CART
// ===============================

let cart = [];


// ===============================
// DISPLAY PRODUCTS
// ===============================

function displayProducts(productList) {

    const productGrid = document.getElementById("productGrid");

    productGrid.innerHTML = "";

    if (productList.length === 0) {

        productGrid.innerHTML = `
            <p class="no-products">
                No products found.
            </p>
        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <div class="product-category">
                    ${product.category.toUpperCase()}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="product-rating">
                    ⭐ ${product.rating}
                </div>

                <div class="product-price">
                    ₹${product.price}
                </div>

                <button
                    class="product-btn"
                    onclick="addToCart(${product.id})"
                >
                    ADD TO CART
                </button>

            </div>
        `;


        productGrid.appendChild(card);

    });

}


// ===============================
// FILTER PRODUCTS
// ===============================

function filterProducts(category) {

    let filteredProducts;

    if (category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(
            product => product.category === category
        );

    }

    displayProducts(filteredProducts);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ===============================
// SEARCH
// ===============================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase();


    const filteredProducts =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(searchText)

        );


    displayProducts(filteredProducts);

});


// ===============================
// ADD TO CART
// ===============================

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);


    cart.push(product);


    updateCart();


    alert(`${product.name} added to cart!`);
}


// ===============================
// UPDATE CART
// ===============================

function updateCart() {

    document.getElementById("cart-count")
        .textContent = cart.length;


    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "Your cart is empty.";

        cartTotal.textContent = "0";

        return;
    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const cartItem =
            document.createElement("div");


        cartItem.style.marginBottom = "20px";


        cartItem.innerHTML = `

            <div style="
                display:flex;
                gap:12px;
                align-items:center;
            ">

                <img
                    src="${item.image}"
                    style="
                        width:60px;
                        height:70px;
                        object-fit:cover;
                    "
                >

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ₹${item.price}
                    </p>

                    <button
                        onclick="removeFromCart(${index})"
                        style="
                            border:none;
                            background:none;
                            color:#777;
                            cursor:pointer;
                        "
                    >
                        Remove
                    </button>

                </div>

            </div>
        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent = total;

}


// ===============================
// REMOVE FROM CART
// ===============================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ===============================
// OPEN CART
// ===============================

function openCart() {

    document.getElementById("cartModal")
        .style.display = "block";

}


// ===============================
// CLOSE CART
// ===============================

function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";

}


// ===============================
// SHOP NOW
// ===============================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ===============================
// INITIAL LOAD
// ===============================

displayProducts(products);