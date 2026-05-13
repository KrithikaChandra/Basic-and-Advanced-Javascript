// Add a <p> to a page and change its text three times — once with textContent, once with innerHTML adding a <strong> tag, then back to plain text.
const list = document.createElement('p');

list.textContent = "Hello";

list.innerHTML = "Hi";

list.textContent = "How are u";

console.log(list);

// Build a list of 5 items in HTML. Use a JS loop to add the class even to even-indexed items.
const list2 = document.querySelector("item-list");

for(let i = 0;i<5;i++){
    const li = document.createElement('li');
    li.textContent = `Item {i+1}`;

    if(i%2==0){
        li.classList.add('even');
    }
    
    list.appendChild('li');
}

// Create a button programmatically with createElement, set its text to "Click me", give it an ID and a class, append it to body.
const button = document.createElement('button');

button.textContent = "Click me";

button.id = "click-btn";

button.classList.add("click");

document.body.appendChild(button);

console.log(button);

// Take an array of 3 product objects (name, price). Build 3 cards from them dynamically.
const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Headphones", price: 5000 }
];
const cardContainer = document.querySelector('#cards');
products.forEach((product) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `₹${product.price}`;

    card.appendChild(title);
    card.appendChild(price);

    cardsContainer.appendChild(card);
});