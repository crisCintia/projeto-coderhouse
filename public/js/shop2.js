const wineName = document.querySelector(".cart__subtitle");
const winePrice = document.querySelector(".product__price__item");
const totalPrice = document.querySelector(".cart__price_total");

let name = prompt("Qual o nome do vinho?");
let price = prompt("Qual o valor do vinho?");
let quantity = prompt("Qual a quantidade de vinhos?");

// Constructor Function
function attributes(name, price, quantity) {
    let change = Number(price.replace(',', '.'));

    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.printTotalValue = function() {        
        wineName.innerHTML = this.name;
        // winePrice.innerHTML = this.price;
        winePrice.innerHTML = change.toFixed(2).toString().replace('.', ',');

        let mult = change * this.quantity;
        let totalField = mult.toFixed(2).toString().replace('.', ',');
        totalPrice.textContent = totalField;
    }
}

// const wine1 = new attributes("Barone Montalto", "77,80", 3);
const wine1 = new attributes(name, price, quantity);
console.log(wine1);
wine1.printTotalValue();

// const wine2 = new attributes("Matetic Corralillo", "75,50", 5);
// const wine2 = new attributes(name, price, quantity);
// console.log(wine2);
// wine2.printTotalValue();

// const itemValue = document.querySelector(".product__price__item");
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
    // let total = itemValue.textContent * itemQuantity.textContent;
    // total = Number(total);
    // totalValue.textContent = total.toFixed(2);

    // let mult = change * itemQuantity.textContent;
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