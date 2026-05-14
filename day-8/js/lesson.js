//Topic Object Literals
const user = {
  name: "Priya",
  age: 24,
  city: "Jaipur",
  isActive: true,
  hobbies: ["reading", "trekking"],
  address: {
    street: "MI Road",
    pincode: "302001"
  }
};

console.log(user);

//Topic 2 Dot vs Bracket
const user2 = { name: "Priya", age: 24, "favourite color": "blue" };

// Dot — clean
console.log(user2.name);              // Priya
console.log(user2.age);               // 24

// Bracket — when key is dynamic
const field = "name";
console.log(user2[field]);            // Priya  ← variable

// Bracket — when key has spaces/special chars
console.log(user2["favourite color"]); // blue   (can't do user.favourite color)

// Property doesn't exist? undefined — no error
console.log(user2.email);             // undefined

const u = { name: "Priya" };
console.log(u.name);
const f = "name";
console.log(u[f]);
// console.log(u.email);

// Toic 3 Add Update Delete
const user3 = { name: "Priya", age: 24 };

// Add
user3.email = "priya@example.com";
user3.city = "Jaipur";

// Update — same syntax
user3.age = 25;

// Delete
delete user3.city;

console.log(user3);
// { name: "Priya", age: 25, email: "priya@example.com" }

//Topic 4 Method & this
const user4 = {
  name: "Aarav",
  age: 22,

  greet() {
    return `Hello, I am ${this.name}`;
  },

  birthday() {
    this.age += 1;
    return `Happy birthday! ${this.name} is now ${this.age}`;
  }
};

console.log(user4.greet());      // Hello, I am Aarav
console.log(user4.birthday());   // Happy birthday! Aarav is now 23
console.log(user4.age);          // 23 (changed)

//Topic 5 Destructuring
const user5 = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };

// Without destructuring — verbose
const name1 = user5.name;
const age1 = user5.age;

// WITH destructuring — clean
const { name, age } = user5;
console.log(name, age);   // Riya 23

// Rename — pull `name` but call it `userName`
const { name: userName, city } = user;
console.log(userName, city);   // Riya Jaipur

// Default values — when property is missing
const { phone = "N/A" } = user5;
console.log(phone);            // "N/A"

// Use it in function parameters
const greet = ({ name, age }) => `Hi ${name}, age ${age}`;
console.log(greet(user5));      // Hi Riya, age 23


// const u = { a: 1, b: 2 };
// const { a, b } = u;
// console.log(a, b);
// const { phone = "N/A" } = u;
// console.log(phone);

//Topic 6 Object.keys · values · entries
const user6 = { name: "Anaya", age: 21, city: "Jaipur" };

console.log(Object.keys(user6));     // ["name", "age", "city"]
console.log(Object.values(user6));   // ["Anaya", 21, "Jaipur"]
console.log(Object.entries(user6));  // [["name","Anaya"], ["age",21], ["city","Jaipur"]]

// Combine with array methods — clean!
Object.entries(user6).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


//Topic 7 Object.assign & Spread
const a = { name: "Priya" };
const b = { age: 24 };

// Object.assign — merge into first arg
const merged = Object.assign({}, a, b);
console.log(merged);    // { name: "Priya", age: 24 }

// Modern way — spread (same as arrays)
const merged2 = { ...a, ...b };
console.log(merged2);   // { name: "Priya", age: 24 }

// Spread to copy (shallow)
const copy = { ...a };