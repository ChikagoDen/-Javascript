const products = [
    {id: 1, title: 'Notebook', price: 20000,  url:'img/zagl.png'},
    {id: 2, title: 'Mouse', price: 1500,url:"img/zagl.png"},
    {id: 3, title: 'Keyboard', price: 5000,url:"img/zagl.png"},
    {id: 4, title: 'Gamepad', price: 4500,url:"img/zagl.png"},
];

const renderProduct = (title, price,url) => {
    return `<div class="product-item">
                <img src=${url} alt="фото товара">
                <h3>${title}</h3>
                <p>${price+` &#8381`}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.title, product.price,product.url);
    });
    console.log(productList);
    document.querySelector('.products').innerHTML = productList;
    // insertAdjacentHTML();
};

renderProducts(products);
