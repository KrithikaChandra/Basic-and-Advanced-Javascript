// Build a button that, when clicked, changes the page background to a random color (use Math.random() for RGB).
const button = document.querySelector("#new-btn");
button.addEventListener("click" , (e)=> {
    console.log("button clicked");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

// Build an input field that turns red if the value is shorter than 3 characters, green otherwise. Live, on input.
const input = document.querySelector("#live-input");
input.addEventListener("input", (e) => {
    const text = input.value
    if(text.length<3){
        input.style.color = "red";
    }
    else {
        input.style.color = "green";
    }
})
// Build a form with two number inputs and a submit button. On submit (with preventDefault) show their sum below.

const sumForm = document.querySelector("#sum-form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const result = document.querySelector("#result");
sumForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    const sum = number1 + number2;
    result.textContent = `Sum: ${sum}`;
});

// Build a list of 5 items. Use event delegation so clicking any item logs its text. Add a 6th item dynamically and verify it works.
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});

const newItem = document.createElement("li");
newItem.textContent = "Study JavaScript";

todoList.appendChild(newItem);
