// Day 2 - Variables: Code Snippets

const topic1Snippet = `var name = "Alice";
let age = 25;
const country = "India";`;

const topic2Snippet = `let firstName = "John";
let _age = 30;
let $price = 100;`;

const topic3Snippet = `var x = 1;  // Can be redeclared and reassigned
let y = 2;  // Cannot be redeclared, can be reassigned
const z = 3; // Cannot be redeclared or reassigned`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 2: Variables ===");
var x = 10;
let y = 20;
const z = 30;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

function testVar() {
  if (true) {
    var v = "var";
  }
  console.log("var accessible in function:", v);
}

testVar();

function testLet() {
  if (true) {
    let l = "let";
  }
  console.log("let is block-scoped");
}

testLet();
