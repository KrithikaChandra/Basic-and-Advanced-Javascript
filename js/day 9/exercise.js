// const name = "Priya";
// const age = 24;

// // Old way — string concatenation
// const msg1 = "Hello, " + name + ". You are " + age + " years old.";
// console.log(msg1);

// // Template literal — clean
// const msg2 = `Hello, ${name}. You are ${age} years old.`;
// console.log(msg2);
// // Multiline — no \n
// const address = `MI Road
// Jaipur 302001
// Rajasthan`;
// console.log(address);

// // Expressions inside ${...}
// const total = 1180;
// const summary = `Total ${total >= 1000 ? "qualifies" : "doesn't qualify"} for free shipping.`;
// console.log(summary);
// // Math, function calls
// const taxed = `Final price: ₹${(1000 * 1.18).toFixed(2)}`;
// console.log(taxed);

// //Topic 2 Array Destructuring

// const colors = ["red", "green", "blue"];

// // Basic
// const [first, second, third] = colors;
// console.log(first, second, third);   // red green blue

// // Skip with comma
// const [, , last] = colors;
// console.log(last);                   // blue

// // Default values
// const [a, b, c, d = "yellow"] = colors;
// console.log(d);                      // yellow (filled in)

// // Swap variables — no temp needed
// let x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y);                   // 2 1

// // Rest pattern — gather the rest
// const nums = [1, 2, 3, 4, 5];
// const [head, ...tail] = nums;
// console.log(head);    // 1
// console.log(tail);    // [2, 3, 4, 5]

// const [a1, b1, ...rest] = [10, 20, 30, 40, 50];
// console.log(a1, b1, rest);

// //Topic 3 Object Destructuring
// const user = {
//   name: "Aarav",
//   age: 22,
//   address: {
//     city: "Jaipur",
//     pincode: "302001"
//   }
// };

// // Nested
// const { address: { city } } = user;
// console.log(city);                      // Jaipur

// // Rename + default
// const { name: userName, phone = "N/A" } = user;
// console.log(userName, phone);           // Aarav N/A

// // Rest with objects — gather remaining keys
// const { name1, ...rest1 } = user;
// console.log(name);    // Aarav
// console.log(rest);    // { age: 22, address: { ... } }

// // In function parameters — super common in React
// const greet = ({ name, age }) => `${name} is ${age}`;
// console.log(greet(user));               // Aarav is 22

// With defaults in params — robust
const showInfo = ({ name = "Guest", role = "User" } = {}) =>
  `${role}: ${name}`;
console.log(showInfo());                // User: Guest
console.log(showInfo({ name: "Riya" })); // User: Riya
console.log(showInfo({ name: "Riya", role: "Admin" })); 
console.log(showInfo({ role: "SuperAdmin" })); 


// const defaultInfo = { name: "Guest", role: "User" }; 
// const showInfo = (info = defaultInfo) =>
//   `${info.role}: ${info.name}`;
 
// console.log(showInfo());                      // "User: Guest"
// console.log(showInfo({ name: "Riya", role: "User" })); // "User: Riya"
// const u = { a: 1, b: 2, c: 3 };
const { a, ...rest } = u;
console.log(rest);

//Topic 4 Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));         // 6
console.log(sum(1, 2, 3, 4, 5));   // 15
console.log(sum());                // 0

// Combined with regular params
function greet(greeting, ...names) {
  return names.map(n => `${greeting}, ${n}`).join(" | ");
}
console.log(greet("Hi", "Priya", "Aarav", "Riya"));

//Topic 5 Spread — Object Spread
const a1 = [1, 2, 3];
const b = [4, 5, 6];

// Array spread — recap
console.log([...a1, ...b]);          // [1, 2, 3, 4, 5, 6]
console.log(Math.max(...a1));        // 3

// Object spread — copy + override
const user = { name: "Priya", age: 24, city: "Jaipur" };
const updated = { ...user, age: 25 };
console.log(updated);
// { name: "Priya", age: 25, city: "Jaipur" }

// Merge objects (later wins on conflict)
const defaults = { theme: "light", notifications: true };
const userPrefs = { theme: "dark" };
const final = { ...defaults, ...userPrefs };
console.log(final);   // { theme: "dark", notifications: true }

// Topic 6 Defaults: || vs ??
console.log(0 || "default");        // "default"  (0 is falsy)
console.log("" || "default");       // "default"
console.log(null || "default");     // "default"

// ?? — only null/undefined triggers
console.log(0 ?? "default");        // 0          (0 is valid!)
console.log("" ?? "default");       // ""
console.log(null ?? "default");     // "default"
console.log(undefined ?? "default"); // "default"

// Real example — count of items
const count = userInputCount ?? 1; 

//Topic 7 Computed Property Names
const fieldName = "email";
const value = "priya@x.in";

// Old way
const user1 = {};
user[fieldName] = value;

// Modern — computed in the literal
const user2 = {
  name: "Priya",
  [fieldName]: value,
  [`is_${fieldName}_verified`]: true
};
console.log(user2);
// { name: "Priya", email: "priya@x.in", is_email_verified: true }