// Day 5 - Loops: Code Snippets

const topic1Snippet = `for (let i = 0; i < 5; i++) {
  console.log(i);
}`;

const topic2Snippet = `let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}`;

const topic3Snippet = `let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}`;

const topic4Snippet = `let person = { name: "Alice", age: 25, city: "Delhi" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;

// Run demonstrations
console.log("=== Day 5: Loops ===");
console.log("for loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("\nwhile loop:");
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("\nfor...of:");
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}

console.log("\nfor...in:");
let person = { name: "Alice", age: 25, city: "Delhi" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
