// Task 1 Predict the var hoist
// Type this exact snippet in a fresh JS file: console.log(name); var name = "Priya"; console.log(name);
// BEFORE running it, predict what each console.log will print.
// Now run it. Match your prediction against actual output.
// Add a comment explaining why the FIRST log is undefined and not a ReferenceError.
console.log(name);  //undefined because for var memory is assigned with value undefines
var name = "Priya";
console.log(name); //Priya

// Task 2 Trigger the TDZ
// Type this snippet in a fresh JS file: console.log(city); let city = "Jaipur";
// Predict what happens. Then run it.
// Note the EXACT error name and message.
// Move the let city = "Jaipur" line ABOVE the console.log. Verify the file now runs.
// In a comment, write what TDZ stands for.

// console.log(city); // Reference error
// let city = "Jaipur";
// Uncaught ReferenceError: Cannot access 'city' before initialization at hands-on.js:17:13
//Test 2 
let city = "Jaipur";
console.log(city);
//Temporary Dead Zones


// Task 3 Function declaration vs expression
// Create a JS file. Add these four lines IN THIS ORDER: sayHi(); then greet(); then function sayHi() { console.log("Hi"); } then var greet = function () { console.log("Hello"); };
// Predict which call works and which throws.
// Run the file. Note the exact error type for the failing call.
// In a comment, explain the difference between function declarations and function expressions in terms of hoisting.
sayHi(); //works
// greet(); // throws error 
function sayHi() { console.log("Hi"); }
// var greet = function () { console.log("Hello")};
// hands-on.js:32 Uncaught TypeError: greet is not a function at hands-on.js:32:1
// Function Declarations are fully hoisted.This means they can be called before they are defined in the code whereas function expressions are not fully hoisted because only the variable is hoisted and the function cannot be used before assignment.

// Bonus Trace the Call Stack
// Define three functions in a JS file: multiply(a, b) returns a * b. square(n) returns multiply(n, n). printSquare(n) does console.log(square(n)).
// Call printSquare(5).
// In a comment, draw the call stack at the EXACT moment multiply(5, 5) is at the top — show all four frames stacked.
// Predict the final console output.
// Add console.trace() inside multiply and run again. Compare DevTools' stack trace with your hand-drawn stack.
function multiply(a, b){
    console.trace();
    return a * b;
} 

function square(n){ 
    return multiply(n, n)
}
function printSquare(n){
 console.log(square(n))
}
printSquare(5); //25
//multiply(5,5) , square(5), printSquare(5), global()