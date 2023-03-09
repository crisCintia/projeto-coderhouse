const wineName = document.querySelector(".cart__subtitle");
const winePrice = document.querySelector(".product__price__item");
const totalPrice = document.querySelector(".cart__price_total");

//Entrada do usuário para modificar o HTML
let name = prompt("Qual o nome do vinho?");
let price = prompt("Qual o valor do vinho?");
let quantity = prompt("Qual a quantidade de vinhos?");

// Criando Objetos com método construtor a partir de uma classe
class product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    printTotalValue() {
        let change = Number(price.replace(',', '.'));
        // Nome do vinho
        wineName.innerHTML = this.name;
        winePrice.innerHTML = change.toFixed(2).toString().replace('.', ',');

        let mult = change * this.quantity;
        let totalField = mult.toFixed(2).toString().replace('.', ',');
        // Valor total
        totalPrice.textContent = totalField;
    }
}

const wine1 = new product(name, price, quantity);
// console.log(wine1);
wine1.printTotalValue();

// Array contendo os produtos
const products = [];
products.push(wine1);
products.push(new product("Matetic Corralillo", "75,50", 2));
products.push(new product("Vistamar Brisa", "85,80", 3));
products.push(new product("Rio Flor Douro", "80,50", 2));
// console.log(products);

for(const product of products) {
    console.log(product);
}

// Código para indicar o valor total dos vinhos, conforme o usuário for diminuindo ou aumentando a quantidade
const itemValue = document.querySelector(".product__price__item").innerText;
const itemQuantity = document.querySelector(".cart__buttons__quantity");
const totalValue = document.querySelector(".cart__price_total");
const subtractBtn = document.querySelector(".cart__buttons__subtract");
const addBtn = document.querySelector(".cart__buttons__add");
const removeBtn = document.querySelector(".cart__buttons__remove");
const container = document.querySelector(".cart__description");

// let counter = 1;
let counter = quantity;
let removedContainer = false;
let change = Number(itemValue.replace(',', '.'));
itemQuantity.textContent = quantity;

const calculate = () => {
    itemQuantity.textContent = counter;
    let mult = change * counter;
    let totalField = mult.toFixed(2).toString().replace('.', ',');
    totalValue.textContent = totalField;
}

subtractBtn.addEventListener("click", () => {
    if(counter < 1) counter = 0;
    if(counter > 0) counter --;    
    calculate();
});

addBtn.addEventListener("click", () => {
    if(removedContainer == false) counter ++;
    if(removedContainer == true) counter = 0;
    calculate();
});

removeBtn.addEventListener("click", () => {
    container.remove();
    removedContainer = true;
    counter = 0;
    itemQuantity.textContent = 0;
});