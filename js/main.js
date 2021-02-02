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
        block.insertAdjacentHTML("afterEnd", `Количество товаров в корзине: ${this.count()} , на общую сумму: ${this.sum() +` &#8381`}.`);
    }
};

new ProductList();


// 3. *Некая сеть фастфуда предлагает несколько видов гамбургеров
class Topping {
    constructor(topping, url = "img/zagl.png", count = 1) {
        this.name = topping.name;
        this.price = topping.price;
        this.id = topping.id;
        if (topping.url != undefined)
            this.url = topping.url;
        else this.url = url;
        this.count = count;
        this.Kk = topping.Kk;
    }
    render() {
        return `<div class="topping-item" data-id="${this.id}">
                        <img src=${this.url} alt="фото начинки"> 
                        <h3> ${"Начинка: " + this.name}</h3>
                        <p>${"Цена: " + this.price + ` &#8381`}</p>
                        <p>${"Каллорийность: " + this.Kk}</p>
                    </div>`;
    }
}

class Hamburger {
    listTopping = [{
            id: 1,
            name: "сыр",
            Kk: 20,
            price: 10
        },
        {
            id: 2,
            name: "салат",
            Kk: 5,
            price: 20
        },
        {
            id: 3,
            name: "картоха",
            Kk: 10,
            price: 15
        },
        {
            id: 4,
            name: "приправа",
            Kk: 0,
            price: 15
        },
        {
            id: 5,
            name: "майонез",
            Kk: 5,
            price: 20
        },
    ];
    // size:1-большой,2-маленький
    constructor(size, toping, container = '.hamberger') {
        this.container = container;
        this.allTopping = toping;
        this.size = size;
        this.render();
        this.sum();
        this.sumKk();
    }
    // Добавить добавку
    addTopping(topping) {
        this.allTopping.push(topping);
    }
    // Убрать добавку по Id
    removeTopping(toppingId) {
        const arr=[];
        for(let i=0;i<this.allTopping.length;i++){
            if(this.allTopping[i].id!=toppingId) {
                arr.push(this.allTopping[i]);
            }
        }
       this.allTopping=arr;
      }
    // сумма всех товаров
    sum() {
        let Sum;
        if (this.size == 1)
            Sum = 50;
        else Sum = 100;
        for (let product of this.allTopping) {
            const productObject = new Topping(product);
            Sum += parseInt(productObject.price);
        }
        return Sum;
    }
    // количество начинки
    count() {
        return this.allTopping.length;
    }
    // Колличество ккалл
    sumKk() {
        let Sum;
        if (this.size == 1)
            Sum = 20;
        else Sum = 40;
        for (let product of this.allTopping) {
            const productObject = new Topping(product);
            Sum += parseInt(productObject.Kk);
        }
        return Sum;
    }
    render() {
        const block1 = document.querySelector(this.container);
        let div = document.createElement('div');
        div.className = "alert";
        block1.append( div);
        let div2 = document.createElement('div2');
        div2.className = "alert2";
        div.append( div2);
        const block = document.querySelector(".alert2");
        let flag = 0;
        for (let product of this.allTopping) {
            const productObject = new Topping(product);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
        for (let i = 0; i < this.allTopping.length; i++) {
            if (this.allTopping[i].id < 4) flag++;
        }
        if (flag == 0) {
            block.insertAdjacentHTML('beforeend', `Нет обязательной начинки!!!`);
        } else {
            if(this.size==1)
            block.insertAdjacentHTML('afterend', `Это маленький гамбургер (50 рублей, 20 калорий). Количество начинки в гамбургере: ${this.count()} ,
                каллорийность: ${this.sumKk()}, цена гамбургера: ${this.sum() +` &#8381`}.`);
            else
            block.insertAdjacentHTML('afterend', `Это большой гамбургер (100 рублей, 40 калорий). Количество начинки в гамбургере: ${this.count()} ,
                каллорийность: ${this.sumKk()}, цена гамбургера: ${this.sum() +` &#8381`}.`);
        }
    }
    // очистка гамбургера
    clining(){
        const block=document.querySelector(".alert");
         block.remove();
    }
    // Получить список добавок
    getToppings() {  
        const block1 = document.querySelector(this.container);
        let div = document.createElement('div');
        div.className = "alert";
        block1.append( div);
        let div2 = document.createElement('div2');
        div2.className = "alert2";
        div.append( div2);
        const block = document.querySelector(".alert2");
        for (let product of this.listTopping) {
            const productObject = new Topping(product);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
            block.insertAdjacentHTML('beforebegin', `СПИСОК ДОБАВОК`);
      }
// Узнать размер гамбургера
      getSize() {  
        const block1 = document.querySelector(this.container); 
        let div = document.createElement('div');
        div.className = "alert";
        block1.append( div);
        let div2 = document.createElement('div2');
        div2.className = "alert2";
        div.append( div2);
        const block = document.querySelector(".alert2");  
        if(this.size==1) block.insertAdjacentHTML('afterbegin', `Гамбургер маленький`);
        else  block.insertAdjacentHTML('afterbegin', `Гамбургер большой`);
        }
// Узнать цену
        calculatePrice() {    
            const block1 = document.querySelector(this.container); 
            let div = document.createElement('div');
            div.className = "alert";
            block1.append( div);
            let div2 = document.createElement('div2');
            div2.className = "alert2";
            div.append( div2);
            const block = document.querySelector(".alert2");  
            block.insertAdjacentHTML('afterbegin', `Цена гамбургера: ${this.sum() +` &#8381`}.`);
        }
// Узнать калорийность      
        calculateCalories() {  
            const block1 = document.querySelector(this.container); 
            let div = document.createElement('div');
            div.className = "alert";
            block1.append( div);
            let div2 = document.createElement('div2');
            div2.className = "alert2";
            div.append( div2);
            const block = document.querySelector(".alert2");  
            block.insertAdjacentHTML('afterbegin', `Каллорийность гамбургера: ${this.sumKk()}`);
        }
};
// выбор начинки
let Topping22 = [{
    id: 1,
    name: "сыр",
    Kk: 20,
    price: 10
},
{
    id: 3,
    name: "картоха",
    Kk: 10,
    price: 15
},
{
    id: 5,
    name: "майонез",
    Kk: 5,
    price: 20
},
];
// 1-маленький,2-большой
let Gamburg=new Hamburger(2, Topping22);

// // добавим приправу
// Gamburg.clining();
// let add={
//     id: 4,
//     name: "приправа",
//     Kk: 0,
//     price: 15
// };
// Gamburg.addTopping(add);
// Gamburg.render();

// // Удалим картоху
// Gamburg.removeTopping(3);
// Gamburg.clining();
// Gamburg.render();

// // вывод всех доступных добавок
// Gamburg.clining();
// Gamburg.getToppings()

// // вывод размера гамбургера
// Gamburg.clining();
// Gamburg.getSize();

// // выод цены гамбургера
// Gamburg.clining();
// Gamburg.calculatePrice();

// // вывод ккалорий гамбургера
// Gamburg.clining();
// Gamburg.calculateCalories();
