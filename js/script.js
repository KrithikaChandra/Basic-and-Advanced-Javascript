// // Task 1

// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// // Bonus
// for (let i = 1; i <= 10; i++) {

//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// // Task 2

// let sum = 0;
// let i = 1;
// while (i <= 100) {
//     sum = sum + i;
//     i++;
// }
// console.log("Total Sum =", sum);

// // Bonus
// let oddSum = 0;
// let j = 1;

// while (j <= 100) {
//     if (j % 2 !== 0) {
//         oddSum += j;
//     }
//     j++;
// }

// console.log("Odd Sum =", oddSum);

// //Task 3
// const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

// for (const name of names) {
//     console.log(name);
// }
// let count = 0;

// for (const name of names) {
//     if (name.length > 4) {
//         count++;
//     }
// }
// console.log("Names longer than 4 letters:", count);

// // Bonus 
// for (const letter of "Jaipur") {
//     console.log(letter);
// }



// //Task 4
// const student = {
//     name: "Anaya",
//     age: 21,
//     city: "Jaipur",
//     course: "B.Tech"
// };

// // Print keys and values
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }

// let propertyCount = 0;
// for (const key in student) {
//     propertyCount++;
// }

// console.log("Total properties:", propertyCount);
// 'use strict'
// greet("Priya");
// greet("Aarav");
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// function silent() {
//   console.log("doing stuff");
// }
// const x = silent();
// console.log(x);

// function add(a, b) { return a + b; }
// console.log(add(5, 3));

// function silent() { console.log("hi"); }
// const x = silent();
// console.log(x);

// const greet = function(name) {
//   return "Hello, " + name;
// };
// console.log(greet("Krithika"));

const add = (a, b) => {
  return a + b;
};

// Implicit return — single expression, no braces
const add2 = (a, b) => a + b;

// Single param — parens optional
const square = x => x * x;

// Zero params — keep ()
const greet = () => "Hello!";

console.log(add(2, 3));
console.log(square(4));
console.log(greet());

 
