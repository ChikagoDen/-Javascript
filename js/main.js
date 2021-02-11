'use strict';

class Product {
    constructor(product, url = "img/zagl.png", count = 1) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        if (product.url != undefined)
            this.url = product.url;
        else this.url = url;
        // количество на складе
        if (this.count != undefined)
            this.count = product.count;
        else this.count = count;
        // артикул,описание,вес,размер,комплектация
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                        <img src=${this.url} alt="фото товара"> 
                        <h3>${this.title}</h3>
                        <p>${this.price + ` &#8381`}</p>
                        <button class="by-btn">Добавить в корзину</button>
                    </div>`;
    }
    // можно добавить несколько рендеров, для более детального просмотра товара, узнать сколько осталось на складе.
};
// можно создать классы для продуктовых товаров и для промышленных


class ProductList {
    #goods; //инкапсуляция
    #allProducts;
    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];
        this.#fetchGoods();

        this.#render();
        this.sum();
    }
    #fetchGoods() {
        this.#goods = [{
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500,
                url: "img/mous.jpg"
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000,
                url: "img/clava.jpg"
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
        ];
    }
    // сумма всех товаров
    sum() {
        let Sum = 0;
        for (let product of this.#goods) {
            const productObject = new Product(product);
            Sum += parseInt(productObject.price);
        }
        return Sum;
    }
    // количество всех товаров
    count() {
        return this.#goods.length;
    }
    #render() {
        const block = document.querySelector(this.container);
        for (let product of this.#goods) {
            const productObject = new Product(product);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
        block.insertAdjacentHTML("afterEnd", `<p class="qwer">Количество товаров в корзине: ${this.count()} , на общую сумму: ${this.sum() +` &#8381`}.</p>`);
    }
};

new ProductList();