// Topic 1 Pure Functions

// PURE — no external state, no side effects
function add(a, b) { return a + b; }
function double1(x) { return x * 2; }
function withGST(price, rate = 18) { return price * (1 + rate / 100); }

// IMPURE — depends on external state
let multiplier = 2;
function impureDouble(x) { return x * multiplier; }   // multiplier could change

// IMPURE — has side effect
function logAndDouble(x) {
  console.log(x);          // side effect: writes to console
  return x * 2;
}

// IMPURE — mutates argument
function addItem(arr, item) {
  arr.push(item);          // mutates input!
  return arr;
}

// PURE version
function addItemPure(arr, item) {
  return [...arr, item];   // returns NEW array
}

// Topic 2 Side Effects at the Edges

  // Side effects pushed to the edges
async function processOrder(orderId) {
  const order = await fetchOrder(orderId);          // side effect (network) — edge

  // ↓ pure transformations in the middle
  const validated = validate(order);
  const taxed     = applyTax(validated);
  const formatted = formatForDisplay(taxed);

  await saveOrder(formatted);                        // side effect (network) — edge
  await sendEmail(formatted.email, formatted);       // side effect (email) — edge
}

// Topic 3 Higher-Order Functions

// HOFs that take a function
const nums = [1, 2, 3, 4, 5];
nums.map((x) => x * 2);            // [2, 4, 6, 8, 10]
nums.filter((x) => x % 2 === 0);   // [2, 4]
nums.reduce((a, b) => a + b, 0);   // 15

// HOFs that return a function (Day 2 callback)
function multiplier(factor) {
  return (x) => x * factor;        // returns a function
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));            // 10
console.log(triple(5));            // 15

// Combining: HOF that takes AND returns a function
function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (called) return result;
    called = true;
    return (result = fn(...args));
  };
}

const init = once(() => "initialised");
console.log(init());   // "initialised"
console.log(init());   // "initialised" (cached, fn NOT called again)

// Topic 4 compose and pipeBuild pipelines

// Build them yourself — they're one-liners
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe    = (...fns) => (x) => fns.reduce     ((acc, fn) => fn(acc), x);

// Some small pure functions
const trim       = (s) => s.trim();
const lower      = (s) => s.toLowerCase();
const split      = (s) => s.split(/\s+/);
const wordCount  = (arr) => arr.length;

// Build the pipeline
const countWords = pipe(trim, lower, split, wordCount);

console.log(countWords("  Hello World from Jaipur  "));   // 4

// Equivalent imperative version is much noisier:
//   let s = "  Hello World ...  ";
//   s = s.trim();
//   s = s.toLowerCase();
//   const arr = s.split(/\s+/);
//   const count = arr.length;

// Topic 5 Curryingfn(a, b, c) → fn(a)(b)(c)

// Manual curry
function add(a, b, c) {
  return a + b + c;
}

function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

addCurried(1)(2)(3);   // 6

// Arrow shorthand — much cleaner
const addC = (a) => (b) => (c) => a + b + c;

// Practical: pre-fill arguments
const tax = (rate) => (price) => price * (1 + rate / 100);
const withGST  = tax(18);   // partially applied — rate fixed at 18
const withVAT  = tax(10);   // rate fixed at 10

console.log(withGST(1000));    // 1180
console.log(withVAT(1000));    // 1100


// Topic 6 Partial Application.bind or hand-rolled

function greet(greeting, time, name) {
  return `${greeting} ${time}, ${name}!`;
}

// Using .bind to partially apply
const sayGoodMorning = greet.bind(null, "Good", "morning");
console.log(sayGoodMorning("Priya"));    // "Good morning, Priya!"
console.log(sayGoodMorning("Aarav"));    // "Good morning, Aarav!"

// Hand-rolled partial
const partial = (fn, ...preset) => (...rest) => fn(...preset, ...rest);

const sayHelloEvening = partial(greet, "Hello", "evening");
console.log(sayHelloEvening("Riya"));    // "Hello evening, Riya!"

// Topic 7 Real PipelineEverything together

const orders = [
  { id: 1, item: "Pen",  price: 50,   quantity: 2 },
  { id: 2, item: "Book", price: 200,  quantity: 1 },
  { id: 3, item: "Bag",  price: 800,  quantity: 1 },
  { id: 4, item: "Mug",  price: 150,  quantity: 3 },
];

// Small pure functions
const lineTotal = (o) => o.price * o.quantity;
const withGST   = (amt) => amt * 1.18;
const round2    = (n)   => Math.round(n * 100) / 100;
const formatINR = (n)   => `₹${n.toLocaleString("en-IN")}`;

const sum = (a, b) => a + b;

// Pipe data through
const grandTotal = pipe(
  (orders) => orders.map(lineTotal),    // [100, 200, 800, 450]
  (totals) => totals.reduce(sum, 0),    // 1550
  withGST,                                // 1829
  round2,                                 // 1829
  formatINR,                              // "₹1,829"
);

console.log(grandTotal(orders));          // "₹1,829"

//Pure function
function addPure(a,b){
    return a+b ;
}
console.log(addPure(1,2));


//Impure function
function addImpure(a,b){
    console.log(a+b);
    return a+b ;
}
console.log(addImpure(1,2));


//Currying
const addCurrying = (a) => (b) => a + b;

const add1 = addCurrying(1);
console.log("Final addition result",add1(2));


//Compose and Pipe
const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);
const pipe    = (...fns) => (x) => 
    fns.reduce     ((acc, fn) => fn(acc), x);

const trim = (s) => s.trim();
const split = (s) => s.split(/\s+/);
const wordCount = (arr) => arr.length;

const wordCountCompose = compose(wordCount, split, trim);
const wordCountPipe = pipe(trim, split, wordCount);

console.log(wordCountCompose("Hello World")); // 2
console.log(wordCountPipe("Hello World")); // 2


//HOF
const nums = [1, 2, 3];
console.log(nums.map((x) => x*2));


//Partial Application
function calculatePrice(discount, tax, price) {
  return price - discount + tax;
}

// Partially apply discount and tax
const premiumCustomerPrice = calculatePrice.bind(null, 100, 20);

console.log(premiumCustomerPrice(1000)); // 920
