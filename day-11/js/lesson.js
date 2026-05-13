// const btn = document.querySelector("#theme-btn");

// btn.addEventListener("click", () => {
//   console.log("Button clicked!");
// });

// // You can attach multiple listeners — all run
// btn.addEventListener("click", () => {
//   console.log("Second handler also fires");
// });
// const btn1 = document.querySelector("#my-btn");

// btn1.addEventListener("click", (e) => {
//   console.log(e.type);            // "click"
//   console.log(e.target);          // the <button> element
//   console.log(e.target.textContent);   // its text
//   console.log(e.clientX, e.clientY);   // mouse coordinates
// });

// // Input — e.target.value is what the user typed
// const input = document.querySelector("#name-input");
// input.addEventListener("input", (e) => {
//   console.log("User typed:", e.target.value);
// });

// // Keyboard — e.key is which key
// document.addEventListener("keydown", (e) => {
//   console.log("Pressed:", e.key);   // "a", "Enter", "ArrowUp"
// });

document.querySelectorAll("#todo-list li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
});