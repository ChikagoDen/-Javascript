const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500,url:"img/mous.jpg"},
    {id: 3, title: 'Keyboard', price: 5000,url:"img/clava.jpg"},
    {id: 4, title: 'Gamepad', price: 4500},
];
// url -параметр по умолчанию
// убрал ретерн и {}
const renderProduct = (title, price,url="img/zagl.png") => 
    `<div class="product-item">
        <img src=${url} alt="фото товара"> 
        <h3>${title}</h3>
        <p>${price+` &#8381`}</p>
        <button class="by-btn">Добавить в корзину</button>
    </div>`;

// убрал ретерн, (),{}
const renderProducts = list => {
    const productList = list.map( product => renderProduct(product.title, product.price,product.url));
    document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
