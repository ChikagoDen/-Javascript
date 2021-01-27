// 'use strict';

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

// убрал ретерн, (),{},убрал productList
// 1вариант
// const renderProducts = list => {
//     document.querySelector('.products').innerHTML = list.map( product => renderProduct(product.title, product.price,product.url)).join("");
// };

// 2вариант
// function renderProducts(arr){
//     for(i=0;i<arr.length;i++){
//     document.querySelector('.products').insertAdjacentHTML('beforeEnd',renderProduct(arr[i].title,arr[i].price,arr[i].url))
//     }
// };

// 2 вариант стрелочная функция, плохо понимаю как я это сделал)
function renderProducts(arr){
    arr.forEach(good => { document.querySelector('.products').insertAdjacentHTML('beforeEnd',renderProduct(good.title, good.price,good.url));});
}

renderProducts(products);
