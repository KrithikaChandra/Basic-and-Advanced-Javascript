// Day 5 - Loops: Homework Exercises

const topic1Snippet = `// Exercise 1: FizzBuzz (1-50)
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`;

const topic2Snippet = `// Exercise 2: Find square root
let n = 1;

while (n * n <= 1000) {
  n++;
}

console.log(n); // 32

// Exercise 3: Triangle Pattern
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}`;

const topic3Snippet = `// Exercise 4: Find Maximum
const scores = [88, 72, 95, 60, 41];

let max = scores[0];

for (const score of scores) {
  if (score > max) {
    max = score;
  }
}

console.log(max); // 95`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run all homework exercises
console.log("=== Day 5: Loops - Homework Exercises ===");

console.log("--- Exercise 1: FizzBuzz (1-50) ---");
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("--- Exercise 2: Find square root ---");
let n = 1;

while (n * n <= 1000) {
  n++;
}

console.log("Smallest n where n² > 1000:", n); // 32

console.log("--- Exercise 3: Triangle Pattern ---");
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}

console.log("--- Exercise 4: Find Maximum ---");
const scores = [88, 72, 95, 60, 41];

let max = scores[0];

for (const score of scores) {
  if (score > max) {
    max = score;
  }
}

console.log("Maximum score:", max); // 95
