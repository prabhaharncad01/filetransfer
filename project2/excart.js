// Sample product data (replace this with your actual data or fetch it from an API)
const products = [{
    "id":1,
    "name":"jaguarclassic",
    "price":50,
    "image":"products/Men/1-1.png"
},
{
    "id":2,
    "name":"versacclassic",
    "price":65,
    "image":"products/Men/2-1.png"
},
{
    "id":3,
    "name":"geiogiaarmania",
    "price":100,
    "image":"products/Men/3-1.png"
},
{
    "id":4,
    "name":"casaius",
    "price":120,
    "image":"products/Men/4-1.png"
},
{
    "id":5,
    "name":"channel",
    "price":50,
    "image":"products/Men/5-1.png"
},
{
    "id":6,
    "name":"classicgiog",
    "price":80,
    "image":"products/Men/6-1.png"
}

];

// Function to add products to HTML
function addProductsToHtml() {
    const listProductHtml = document.querySelector('.listProduct');
    listProductHtml.innerHTML = '';

    products.forEach(product => {
        const newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button class="pro-btn" onclick="addCart(${product.id})">Add To Cart</button>
        `;
        listProductHtml.appendChild(newProduct);
    });
}

// Function to handle adding product to cart
function addCart(productId) {
    // Implement your logic to add the product to the cart
    console.log('Adding product with ID', productId, 'to cart');
}

// Call the function to add products to HTML
addProductsToHtml();
