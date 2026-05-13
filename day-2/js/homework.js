// Day 2 - Variables
// Homework

const fullName = "   Gokulkrishna Vinod   ";
const age = 20;
const city = "Kerala";

console.log("Full Name (trimmed): " + fullName.trim());
console.log("Upper case: " + fullName.trim().toUpperCase());
console.log("Length: " + fullName.trim().length);
console.log("Includes 'Gokul': " + fullName.includes("Gokul"));

let price = 1000;
let discount = 0.2;
let finalPrice = price - (price * discount);
console.log("Final price after 20% discount: ₹" + finalPrice);
