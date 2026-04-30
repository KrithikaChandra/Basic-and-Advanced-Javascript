//Day 5 Homework
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

// Day 6 work
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

// const add = (a, b) => {
//   return a + b;
// };

// const add2 = (a, b) => a + b;

// const square = x => x * x;

// const greet = () => "Hello!";

// console.log(add(2, 3));
// console.log(square(4));
// console.log(greet());

// Day 6 Homework
// Task 1
function area(length, width){
return length*width;
}
console.log(area(20,30));
console.log(area(1,2));
console.log(area(23,25));

const areaArrow = (length,width) =>  length*width;

console.log(area(20,30));
console.log(area(1,2));
console.log(area(23,25));

//Task 2
function greet(name='Guest') {
    return "Hello, " + name ;
}
console.log(greet('Priya'));
console.log(greet('Aarav'));
console.log(greet());
console.log(greet(null));

// Task 3
const cToF = (celsius) => celsius * 9/5 +32;
console.log(cToF(0));
console.log(cToF(100));
console.log(cToF(37));
console.log(cToF(45));

// Bonus
const double = n => n*2;
console.log(double(2));
console.log(double(4));
console.log(double(8));

let total = 0;
function addToTotal (n) {
    total  += n;
    return total;
}
console.log(addToTotal(2));
console.log(addToTotal(4));
console.log(addToTotal(6));
//Pure function is easier to reason as its output doesnt depend on outer state, same input gives same outputs

function kmToMiles(km){
    return km*0.621;
}
console.log(kmToMiles(100));

function gstAmount(price, rate = 18){
    return price *(rate/100);
}
console.log(gstAmount(1000));
console.log(gstAmount(1000,20));

function fullName(first, last){
    return "Full name: " + first + " " + last;
}
console.log(fullName("Krithika", "Ramachandran"));

function isAdult(age){
    if(age>=18) return true;
    else return false;
}
console.log(isAdult(18));
console.log(isAdult(11));


