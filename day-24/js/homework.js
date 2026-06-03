// Take a folder of three small modules and write a barrel index.js for it.
// Use both named re-exports and export *.

// ===== utils/add.js =====

export function add(a, b) {
    return a + b;
}


// ===== utils/multiply.js =====

export function multiply(a, b) {
    return a * b;
}


// ===== utils/constants.js =====

export const PI = 3.14159;
export const APP_NAME = "MyApp";


// ===== utils/index.js =====

// Named re-exports
export { add } from "./add.js";
export { multiply } from "./multiply.js";

// Export everything from constants.js
export * from "./constants.js";


// ===== app.js =====

import { add, multiply, PI, APP_NAME } from "./utils/index.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(PI);
console.log(APP_NAME);

/*
Output:

5
20
3.14159
MyApp
*/


// Add a dynamic import() for a feature in a small Vite app. 
// Open DevTools Network tab and watch the chunk load only when triggered.

// ===== src/feature.js =====

export function showFeature() {
    console.log("Feature loaded!");
}


// ===== src/main.js =====

const btn = document.querySelector("#load-feature");

btn.addEventListener("click", async () => {
    const module = await import("./feature.js");

    module.showFeature();
});


// Build a tiny circular dependency on purpose (a.js↔b.js with a value used at top level). 
// Observe the bug. Refactor to fix it.

// =========================
// BAD VERSION (Circular Dependency)
// =========================

// ===== a.js =====

import { valueB } from "./b.js";

export const valueA = valueB + 1;

console.log("A:", valueA);


// ===== b.js =====

import { valueA } from "./a.js";

export const valueB = valueA + 1;

console.log("B:", valueB);


// ===== main.js =====

import "./a.js";