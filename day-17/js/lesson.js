// Topic 1 Class Syntax Basics

class User {
constructor(name, city) { // runs when you call `new User(...)`
this.name = name; // instance properties — own to each user
this.city = city;
}
greet() { // method — lives on User.prototype (shared)
console.log(`Hi, I'm ${this.name} from ${this.city}`);
}
}
const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet(); // "Hi, I'm Priya from Jaipur"
b.greet(); // "Hi, I'm Aarav from Mumbai"
// Proof that classes ARE functions under the hood:
console.log(typeof User); // "function"
console.log(a.greet === b.greet); // true — shared via prototype
console.log(Object.getPrototypeOf(a) === User.prototype); // true (Day 4!)


// Topic 2 Getters and Setters

class Product {
constructor(name, priceInPaise) {
this.name = name;
this._priceInPaise = priceInPaise; // convention: _ means "internal, please don't touch"
}
// getter — called as p.priceInRupees (NO parentheses!)
get priceInRupees() {
return this._priceInPaise / 100;
}
// setter — called as p.priceInRupees = 50
set priceInRupees(rupees) {
if (rupees < 0) throw new Error("Price cannot be negative");
this._priceInPaise = rupees * 100;
}
get priceWithGST() {
return this.priceInRupees * 1.18; // 18% GST — derived, no storage
}
}
const p = new Product("Notebook", 5000); // ₹50.00
console.log(p.priceInRupees); // 50 ← getter
console.log(p.priceWithGST); // 59 ← derived
p.priceInRupees = 100; // setter
console.log(p.priceInRupees); // 100
// p.priceInRupees = -10; // throws — validation in setter


//Topic 3 extends and super

class Animal {
constructor(name) {
this.name = name;
}
speak() {
console.log(`${this.name} makes a sound`);
}
}
class Dog extends Animal {
constructor(name, breed) {
super(name); // MUST call super before using `this`
this.breed = breed; // own to Dog instances
}
speak() { // override
super.speak(); // call parent's speak first (optional)
console.log(`${this.name} barks!`);
}
}
const d = new Dog("Bruno", "Labrador");
d.speak();
// "Bruno makes a sound" ← from Animal via super.speak()
// "Bruno barks!" ← from Dog's override
console.log(d instanceof Dog); // true
console.log(d instanceof Animal); // true — extends sets up the chain


// Topic 4 static Methods
 
class MathUtils {
static gst(amount, rate = 18) { // call as MathUtils.gst(...)
return amount * (rate / 100);
}
static format(amount) {
return `₹${amount.toFixed(2)}`;
}
}
console.log(MathUtils.gst(1000)); // 180
console.log(MathUtils.format(1180)); // "₹1180.00"
// Static factory pattern — common
class User {
constructor(name) { this.name = name; }
static fromEmail(email) { // factory: parses an email into a User
const name = email.split("@")[0];
return new User(name);
}
}
const u = User.fromEmail("priya@example.com");
console.log(u.name); // "priya"
// const m = new MathUtils();
// m.gst(100); // TypeError — static is on the class, not instances


// static method 

class MathUtils {
static gst(amount, rate = 18) { // call as MathUtils.gst(...)
return amount * (rate / 100);
}
static format(amount) {
return `₹${amount.toFixed(2)}`;
}
}
console.log(MathUtils.gst(1000)); // 180
console.log(MathUtils.format(1180)); // "₹1180.00"

// Static factory pattern — common
class User {
constructor(name) { this.name = name; }
static fromEmail(email) { // factory: parses an email into a User
const name = email.split("@")[0];
return new User(name);
}
}
const u = User.fromEmail("priya@example.com");
console.log(u.name); // "priya"
// const m = new MathUtils();
// m.gst(100); // TypeError — static is on the
// class, not instances


// Topic 5 Private Fields with #

class BankAccount {
#balance; // declared private field
#transactions = []; // can have a default
constructor(initial) {
this.#balance = initial;
}
deposit(amt) {
this.#balance += amt;
this.#transactions.push({ type: "deposit", amt });
}
withdraw(amt) {
if (amt > this.#balance) throw new Error("Insufficient funds");
this.#balance -= amt;
this.#transactions.push({ type: "withdraw", amt });
}
get balance() { return this.#balance; }
get history() { return [...this.#transactions]; } // copy — don't expose internal
array
}
const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.balance); // 1300
console.log(acc.history); // [{ type: "deposit", ...}, { type: "withdraw", ...}]
// console.log(acc.#balance); // SyntaxError — # is enforced by the language


// Topic 6 Custom Error Classes

class AppError extends Error {
constructor(message, code) {
super(message); // Error's own constructor handles message
this.name = this.constructor.name; // sets to "ValidationError" or "NotFoundError"
this.code = code;
}
}
class ValidationError extends AppError {
constructor(field, message) {
super(message, "VALIDATION_FAILED");
this.field = field;
}
}
class NotFoundError extends AppError {
constructor(resource) {
super(`${resource} not found`, "NOT_FOUND");
}
}
// Usage
function validateAge(age) {
if (age < 0) throw new ValidationError("age", "Must be non-negative");
if (age > 150) throw new ValidationError("age", "Must be under 150");
}
try {
validateAge(-5);
} catch (e) {
if (e instanceof ValidationError) {
console.log(`[${e.code}] ${e.field}: ${e.message}`);
// "[VALIDATION_FAILED] age: Must be non-negative"
}
}

// ## Step-by-step value assignment



// **Line executed:**
// ```javascript
// throw new ValidationError("age", "Must be non-negative")
// ```



// ### Inside `ValidationError` constructor:
// ```javascript
// constructor(field, message) {  // field = "age", message = "Must be non-negative"
//   super(message, "VALIDATION_FAILED");  // passes "Must be non-negative" and "VALIDATION_FAILED" UP to AppError
//   this.field = field;  // assigns "age" to this.field
// }
// ```



// ### Inside `AppError` constructor:
// ```javascript
// constructor(message, code) {  // message = "Must be non-negative", code = "VALIDATION_FAILED"
//   super(message);  // passes "Must be non-negative" UP to Error
//   this.name = this.constructor.name;  // assigns "ValidationError" to this.name
//   this.code = code;  // assigns "VALIDATION_FAILED" to this.code
// }
// ```



// ### Inside `Error` constructor (built-in):
// ```javascript
// // Built-in Error constructor takes the message and stores it as this.message
// this.message = message;  // message = "Must be non-negative"
// ```



// ## Final object:
// ```javascript
// {
//   message: "Must be non-negative",  // from Error constructor
//   name: "ValidationError",          // from AppError
//   code: "VALIDATION_FAILED",        // from AppError  
//   field: "age"                      // from ValidationError
// }
// ```



// ## Why `[VALIDATION_FAILED] age: Must be non-negative`?
// - `e.code` → `"VALIDATION_FAILED"`
// - `e.field` → `"age"`  
// - `e.message` → `"Must be non-negative"`



// The catch block just prints them in that order.

// Topic 7 Classes are Sugar

// PRE-ES6 (yesterday)
function Person(name) { this.name = name; }
Person.prototype.greet = function () { console.log(this.name); };

// ES6 (today)
class Person {
constructor(name) { this.name = name; }
greet() { console.log(this.name); }
}
