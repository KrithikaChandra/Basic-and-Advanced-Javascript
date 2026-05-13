// Day 3 - Operators: Code Snippets

const topic1Snippet = `console.log(10 + 5);   // Addition: 15
console.log(10 - 5);   // Subtraction: 5
console.log(10 * 5);   // Multiplication: 50
console.log(10 / 5);   // Division: 2
console.log(10 % 3);   // Modulus (remainder): 1`;

const topic2Snippet = `console.log(5 == "5");    // Equal to: true
console.log(5 === "5");   // Strictly equal: false
console.log(5 != "5");    // Not equal: false
console.log(5 > 3);       // Greater than: true
console.log(5 <= 5);      // Less than or equal: true`;

const topic3Snippet = `console.log(true && false);  // AND: false
console.log(true || false);  // OR: true
console.log(!true);          // NOT: false`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 3: Operators ===");
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 3);
console.log(5 > 3);

console.log(true && false);
console.log(true || false);
console.log(!true);

console.log(10 > 5 ? "yes" : "no");
