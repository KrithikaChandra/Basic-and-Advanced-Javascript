// /*Task 1 Select and Change Text
// Use document.querySelector to grab the #title element.
// Change its textContent to "Hello, <your name>!".
// Change its inline style.color to "crimson".
// Bonus: also change its style.fontFamily to "Georgia, serif".*/
const title = document.querySelector("#title");
title.textContent = "Hello, World!"
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";
console.log(title);



// /*Task 2 Toggle Dark Theme Class
// Grab the #theme-btn button (we'll wire it up properly tomorrow — for now, run the toggle once at the bottom of your script).
// Use document.body.classList.toggle("dark") to add/remove the dark class on the body.
// Run it twice in your script and observe the page flip.
// Bonus: log whether the class is currently present using contains.*/
// const theme = document.querySelector("#theme-btn");


// /*Task 3 Build a List Dynamically
// Declare: const names = ["Priya", "Aarav", "Riya", "Kabir"];
// Grab the #names-list element.
// For each name, create an <li>, set its textContent to the name, add the class "name-item", and append it to the list.
// Bonus: use template literals to set the textContent to "<index>. <name>" (e.g., "1. Priya").*/
const names = ["Priya", "Aarav", "Riya", "Kabir"];
const list = document.querySelector("#names-list");
names.forEach( (names, index)=> {
    const li = document.createElement('li');
    li.textContent =`{index+1}. ${name}` ;
    li.classList.add("name-item");
    list.appendChild(li);
}
)
console.log(list);

/*Bonus Build a Card
Inside <div id="cards"></div> (add this to your HTML), build a card from this object:
const product = { name: "Laptop", price: 60000, brand: "Dell" };
Create a <div class="card"> with three child elements: an <h3> for the name, a <p> for the brand, and a <span> for the price formatted as "₹60000".
Append the card to #cards.*/
const product = { name: "Laptop", price: 60000, brand: "Dell" };
const cardsContainer = document.querySelector("#cards");
const card = document.createElement("div");
card.classList.add("card");
const title = document.createElement("h3");
title.textContent = product.name;
const brand = document.createElement("p");
brand.textContent = product.brand;
const price = document.createElement("span");
price.textContent = `₹${product.price}`;
card.appendChild(title);
card.appendChild(brand);
card.appendChild(price);
cardsContainer.appendChild(card);


