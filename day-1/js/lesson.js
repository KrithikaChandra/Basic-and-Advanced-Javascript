// Day 1 - Basics: Code Snippets

const topic1Snippet = `console.log("Hello, World!");`;

const topic2Snippet = `console.log(2 + 3);
console.log("Name: " + "Gokul");
console.log(10 > 5);`;

const topic3Snippet = `// This is a comment
console.log("This runs"); // This comment explains the line above

/* This is a multi-line comment
   It can span multiple lines
   Useful for longer explanations */`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 1: Basics ===");
console.log("Hello, World!");
console.log(2 + 3);
console.log("Name: " + "Gokul");
console.log(10 > 5);
