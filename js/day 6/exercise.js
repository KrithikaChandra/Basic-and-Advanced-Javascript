'use strict'
greet("Priya");
greet("Aarav");
function greet(name) {
  console.log("Hello, " + name + "!");
}

function silent() {
  console.log("doing stuff");
}
const x = silent();
console.log(x);

function add(a, b) { return a + b; }
console.log(add(5, 3));

function silent() { console.log("hi"); }
const y = silent();
console.log(y);

const greet = function(name) {
  return "Hello, " + name;
};
console.log(greet("Krithika"));

const add = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const square = x => x * x;

const greet = () => "Hello!";

console.log(add(2, 3));
console.log(square(4));
console.log(greet());
