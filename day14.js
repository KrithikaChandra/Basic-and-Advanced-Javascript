// // 1. Counter — private state
// function makeCounter() {
// let count = 0; // private — cannot be reached from outside
// return function () {
// count++; // each call mutates the SAME closed-over count
// return count;
// };
// }
// const c = makeCounter();
// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3

// // console.log(count) // ReferenceError — count is private to the closure


// // 2. Private variables — bank account
// function createAccount(initial) {
// let balance = initial; // PRIVATE — no one outside can touch it
// return {
// deposit: (amt) => balance += amt,
// withdraw: (amt) => balance -= amt,
// getBalance: () => balance,
// };
// }
// const acc = createAccount(1000);
// acc.deposit(500);
// console.log(acc.getBalance()); // 1500
// // acc.balance // undefined — truly private


// // 3. Memoization — cache expensive results
// function memoize(fn) {
// const cache = {}; // closed-over cache, lives across calls
// return function (n) {
// if (n in cache) return cache[n]; // hit → return cached
// cache[n] = fn(n); // miss → compute and store
// return cache[n];
// };
// }

// const slowSquare = (n) => { console.log("computing..."); return n * n; };
// const fastSquare = memoize(slowSquare);
// fastSquare(5); // "computing..." → 25
// fastSquare(5); // 25 (no log — served from cache)


// // Basic IIFE — runs once, creates a private scope
// (function () {
// const secret = "hidden"; // not visible outside
// console.log("IIFE ran");
// })();

// // IIFE with parameters
// (function (city) {
// console.log(`Greetings from ${city}`);
// })("Jaipur");

// // Arrow IIFE (modern)
// (() => {
// const x = 42;
// console.log(x);
// })();


// function makeCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3

// console.log(counter2()); // 1
// console.log(counter2()); // 2



// function whoAmI() {
// console.log(this);
// }
// whoAmI();

// const user = { name: "Priya", whoAmI };
// user.whoAmI(); // logs the user object — called as a method

// const other = { name: "Aarav", whoAmI };
// other.whoAmI(); 

// function greet(city, lang) {
// console.log(`${this.name} from ${city} speaks ${lang}`);
// }
// const u = { name: "Priya" };
// // call — invoke now, args listed
// greet.call(u, "Jaipur", "Hindi"); // "Priya from Jaipur speaks Hindi"


// // apply — invoke now, args as array
// greet.apply(u, ["Jaipur", "Hindi"]); // same output
// // bind — returns a new function for later
// const greetPriya = greet.bind(u, "Jaipur"); // partially applied: city pre-set
// greetPriya("English"); // "Priya from Jaipur speaks English"
// greetPriya("Marathi"); // "Priya from Jaipur speaks Marathi"
// // Once bound, this CANNOT be re-bound
// greetPriya.call({ name: "Aarav" }, "Tamil"); // still "Priya from Jaipur speaks Tamil"


// const user = {
// name: "Priya",// Regular function — has its own this
// regular: function () {
// console.log(this.name); // "Priya" ← implicit binding
// const arrow = ()=>{console.log(this.name)}
// arrow();
// },
// // Arrow — no own this; inherits from enclosing scope (here: module/global)
// arrow: () => {
// console.log(this.name); // undefined ← arrow doesn't see user as this
// },
// };
// user.regular(); // "Priya"
// user.arrow(); // undefined ← surprise! arrow as a method is usually wrong


// Task 1 Predict the `this`
// Type the following snippet exactly: a user object with name: "Priya" and a method greet()
// { console.log(this.name); } . Then call user.greet() . Then assign const g =
// user.greet and call g() .
// Predict the output of each call BEFORE running.
// Run. Note actual output.
// In a comment, explain why the second call lost the this .

// Task 1: Predict the value of this in different function calls




const user = {
  name: "Priya",
  greet: function () {
    console.log(this.name);
  },
};

user.greet(); 
const g = user.greet;
g(); 

