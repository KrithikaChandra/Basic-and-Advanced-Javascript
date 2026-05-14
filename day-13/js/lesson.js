console.log(a);        // undefined          ← var hoisted with undefined
var a = 1;

// console.log(b);        // ReferenceError     ← let hoisted, but in TDZ
// let b = 2;

// console.log(c);        // ReferenceError     ← const hoisted, but in TDZ
// const c = 3;

greet();               // "Hi"               ← function declaration: full body hoisted
function greet() { console.log("Hi"); }

// var — silent undefined (the old, problematic behaviour)
console.log(score);    // undefined            ← no error, but probably not what you wanted
var score = 90;

// let — TDZ catches the bug for you
// console.log(level);    // ReferenceError       ← TDZ — Cannot access 'level' before initialization
// let level = 5;

// The TDZ "ends" exactly when the let/const line runs:
{
  // <-- start of block. 'mark' is in TDZ here
  // console.log(mark);  // would throw
  let mark = 87;
  console.log(mark);    // 87  ← TDZ has ended, mark is initialised
}

// Function declaration — works BEFORE its definition
sayHi();           // "Hi"      ← full body hoisted
function sayHi() {
  console.log("Hi");
}

// Function expression with var — TypeError
greet();           // TypeError: greet is not a function
                   //   ↑ greet was hoisted with value 'undefined'.
                   //     Calling undefined() throws TypeError.
var greet = function () {
  console.log("Hello");
};

// Function expression with const — ReferenceError (TDZ)
welcome();         // ReferenceError: Cannot access 'welcome' before initialization
const welcome = function () {
  console.log("Welcome");
};

// Arrow function — same as const above (always TDZ if let/const)
shout();           // ReferenceError
const shout = () => console.log("HEY");