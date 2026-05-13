/*Task 1 Click Counter
Grab the #counter-btn button and the #count span.
On every click, increment a counter variable and update the span's textContent.
Bonus: after 10 clicks, change the button's text to "Stop clicking!".*/
const counterBtn = document.querySelector("#counter-btn");
const countSpan = document.querySelector("#count");
let counter = 0;
counterBtn.addEventListener("click",() => {
    counter ++;
    countSpan.textContent = `Clicked ${counter} times`;
    if(counter>10){
        counterBtn.textContent = `Stop clicking!`;
    }
})
console.log(counterBtn);
console.log(countSpan);

/*Task 2 Live Input Preview
Grab the #live-input and #preview.
On every keystroke, copy the current value into the preview (use the input event).
Bonus: if the input is empty, show "Start typing..." in the preview.*/
const liveInput = document.querySelector("#live-input")
const preview = document.querySelector("#preview");
liveInput.addEventListener("input",(e) => {
const text = liveInput.value;

    if (text === "") {
        preview.textContent = "Start typing...";
    } else {
        preview.textContent = text;
    }
})

/*Task 3 Form preventDefault
Grab the #reg-form form and #name-field input and #welcome paragraph.
On submit, prevent the default page reload.
Read the input value, and set the welcome paragraph to "Welcome, <name>!" using template literals.
Bonus: if the name field is empty, show "Please enter your name" instead.*/

const regForm = document.querySelector("#reg-form");
const nameField = document.querySelector("#name-field");
const welcomeField = document.querySelector("#welcome");
// const submit = document.querySelector("#submit");
regForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const name = nameField.value;
    if (name === "") {
        welcomeField.textContent = "Please enter your name";
    } else {
        welcomeField.textContent = `Welcome, ${name}!`;
    }
});
console.log(welcomeField);
console.log(nameField);
console.log(regForm);

/*Bonus Event Delegation on List
Grab the #todo-list parent.
Attach ONE click listener that toggles the done class on whichever <li> was clicked.
Use e.target.tagName === "LI" to filter.
Bonus: programmatically add a new <li> to the list with createElement. Confirm clicking it also toggles correctly — without any extra wiring.*/
const toDoList = document.querySelector('#todo-list');
toDoList.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
});
const newLi = document.createElement("li");
toDoList.appendChild(newLi);
console.log(toDoList);
console.log(newLi);
