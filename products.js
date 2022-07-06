const products = [
    {
        id: 1,
        name: 'Lorem ipsum accessories one',
        newPrice: '€9.38',
        oldPrice: '€9.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/4.jpg'
    },
    {
        id:2,
        name: 'Lorem ipsum accessories two',
        newPrice: '€7.38',
        oldPrice: '€8.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/5.jpg'
    },
    {
        id:3,
        name: 'Lorem ipsum accessories three',
        newPrice: '€8.38',
        oldPrice: '€9.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/6.jpg'
    },
    {
        id:4,
        name: 'Lorem ipsum accessories four',
        newPrice: '€9.38',
        oldPrice: '€10.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/7.jpg'
    },
    {
        id:5,
        name: 'Lorem ipsum accessories five',
        newPrice: '€8.38',
        oldPrice: '€9.54',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/8.jpg'
    },
    {
        id: 6,
        name: 'Lorem ipsum accessories six',
        newPrice: '€9.38',
        oldPrice: '€9.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/9.jpg'
    },
    {
        id:7,
        name: 'Lorem ipsum accessories seven',
        newPrice: '€9.38',
        oldPrice: '€9.99',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/10.jpg'
    },    
    {
        id:8, 
        name: 'Lorem ipsum accessories eight',
        newPrice: '€8.38',
        oldPrice: '€9.54',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/3.jpg'
    },
    {
        id: 9,
        name: 'Lorem ipsum accessories nine',
        newPrice: '€9.38',
        oldPrice: '€9.38',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/2.jpg'
    },
    {
        id: 10,
        name: 'Lorem ipsum accessories ten',
        newPrice: '€9.38',
        oldPrice: '€9.99',
        image: 'https://flone.reactdemo.hasthemes.com/assets/img/product/accessories/1.jpg'
    }
]

const productsElement = document.querySelector('.product-items');

for (const product of products) {
    productsElement.innerHTML += ` <div class="product-card">
    <div class="product-card__slideshow">
        <ul>
            <li><a href="#"><img src="${product.image}" alt="product - image"></a></li>
        </ul>
        <div class="product-action">
            <button class="btn-product-action btn-add-product" title="Add to cart" data-id=${product.id}><i class="fa-solid fa-cart-shopping"></i></button>
            <button class="btn-product-action" title="Quick view"><i class="fa-solid fa-eye"></i></button>
            <button class="btn-product-action" title="Add to compare"><i class="fa-solid fa-retweet"></i></button>
        </div>
    </div>
    <p class="product-card__description"><a href="#">${product.name}</a></p>
    <p class="price"><span class="new">${product.newPrice}</span><span class="old">${product.oldPrice}</span></p>
</div>
    `
}

const btnAddProducts = document.querySelectorAll('.btn-add-product');
const countProduct = document.querySelector('.count-product-in-cart');
const cartData = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];
countProduct.innerHTML = cartData.length;

for (const btnAddProduct of btnAddProducts) {
    btnAddProduct.addEventListener("click", (e)=> {
        const id = btnAddProduct.getAttribute('data-id'); 
        const productSelected = products.find(product => product.id == id)
        const productInCart = cartData.find(product => product.id == productSelected.id)
        if (!productInCart) {
            cartData.push(productSelected)
        }
        localStorage.setItem('cartData', JSON.stringify(cartData));
        countProduct.innerHTML = cartData.length;
    })
}