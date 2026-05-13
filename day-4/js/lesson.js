// Day 4 - Control Flow: Code Snippets

const topic1Snippet = `let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}`;

const topic2Snippet = `let score = 45;
if (score >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}`;

const topic3Snippet = `let grade = 75;
if (grade >= 80) {
  console.log("A");
} else if (grade >= 60) {
  console.log("B");
} else {
  console.log("C");
}`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 4: Control Flow ===");

let score = 75;
if (score >= 80) {
  console.log("A");
} else if (score >= 60) {
  console.log("B");
} else {
  console.log("C");
}

let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
