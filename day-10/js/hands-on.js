// Task 1: DOM Selection
// Click button to see elements selected in console

let selectBtn = document.querySelector("#select-btn");

selectBtn.addEventListener("click", function() {
  // Select elements from the page
  let heading = document.querySelector("h1");
  let box = document.querySelector(".box");
  let items = document.querySelectorAll("li");

  // Check what you selected
  console.log("=== Task 1: Selection ===");
  console.log("Heading:", heading);
  console.log("Box:", box);
  console.log("Number of items:", items.length);
  console.log("All items:", items);
  
  selectBtn.textContent = "Check console (F12)";
});


// Task 2: Modify Content
// Click button to change content and styling

let modifyBtn = document.querySelector("#modify-btn");

modifyBtn.addEventListener("click", function() {
  let title = document.querySelector("#title");
  if (title) {
    title.querySelector("h4").textContent = "Welcome to JavaScript!";
    title.style.backgroundColor = "#90EE90";
  }

  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(function(p) {
    p.style.color = "#1976D2";
    p.style.fontSize = "16px";
    p.style.fontWeight = "bold";
  });
  
  modifyBtn.textContent = "Content Modified!";
  modifyBtn.disabled = true;
});


// Task 3: Create Elements
// Click button to dynamically create and add new elements

let createBtn = document.querySelector("#create-btn");
let elementCount = 0;

createBtn.addEventListener("click", function() {
  elementCount++;
  
  let container = document.querySelector("#element-container");
  
  // Create new element
  let newDiv = document.createElement("div");
  newDiv.className = "box";
  newDiv.style.padding = "15px";
  newDiv.style.background = "#FFE0B2";
  newDiv.style.margin = "10px 0";
  newDiv.style.borderRadius = "4px";
  newDiv.style.border = "1px solid #FF9800";
  newDiv.textContent = `New Element #${elementCount} - Created Dynamically!`;

  // Add to page
  if (container) {
    container.appendChild(newDiv);
  }
  
  createBtn.textContent = `Elements Created: ${elementCount}`;
});
