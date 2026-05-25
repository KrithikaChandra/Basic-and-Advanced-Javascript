// Topic 1 Every Object Has a Prototype

const user = { name: "Priya" };
// Every object literal's prototype is Object.prototype
console.log(Object.getPrototypeOf(user) === Object.prototype); // true
// user has no .toString() of its own — but it can call one!
console.log(user.toString()); // "[object Object]"
// Why? toString lives on Object.prototype.
console.log(Object.prototype.hasOwnProperty("toString")); // true
// At the END of the chain: null
console.log(Object.getPrototypeOf(Object.prototype)); // null



// Topic 2 Object.create

const animal = {
eat() { console.log(`${this.name} is eating`); },
sleep() { console.log(`${this.name} is sleeping`); },
};
// dog inherits from animal
const dog = Object.create(animal);
dog.name = "Bruno";
dog.eat(); // "Bruno is eating" ← method found on animal (the prototype)
dog.sleep(); // "Bruno is sleeping" ← same path
// Confirm the link
console.log(Object.getPrototypeOf(dog) === animal); // true
// Own properties vs inherited
console.log(dog.hasOwnProperty("name")); // true ← on dog itself
console.log(dog.hasOwnProperty("eat")); // false ← inherited from animal

// Topic 3 The Prototype Chain

const grandparent = { lastName: "Sharma" };
const parent = Object.create(grandparent);
parent.firstName = "Priya";
const child = Object.create(parent);
child.age = 5;
// READ — walks up
console.log(child.age); // 5 ← own
console.log(child.firstName); // "Priya" ← from parent
console.log(child.lastName); // "Sharma" ← from grandparent
console.log(child.toString); // ƒ ← from Object.prototype (one more step)
// WRITE — creates an own property; the prototype is untouched
child.firstName = "Anaya";
console.log(child.firstName); // "Anaya" ← own property now shadows parent's
console.log(parent.firstName); // "Priya" ← prototype unchanged

// Topic 4 hasOwnProperty vs in

const animal = { eat() {} };
const dog = Object.create(animal);
dog.bark = () => console.log("woof");
console.log(dog.hasOwnProperty("bark")); // true — dog has its own bark
console.log(dog.hasOwnProperty("eat")); // false — eat is inherited
console.log("bark" in dog); // true — found on dog
console.log("eat" in dog); // true — found on animal (chain)
console.log("toString" in dog); // true — found on Object.prototype

// Topic 5 Constructor Functions

// Constructor function (capitalised by convention)
function User(name, city) {
this.name = name; // own property on the new object
this.city = city;
}
// Methods go on the SHARED prototype — not duplicated per instance
User.prototype.greet = function () {
console.log(`Hi, I'm ${this.name} from ${this.city}`);
};
const a = new User("Priya", "Jaipur");
const b = new User("Aarav", "Mumbai");
a.greet(); // "Hi, I'm Priya from Jaipur"
b.greet(); // "Hi, I'm Aarav from Mumbai"
// Both share the SAME greet function reference
console.log(a.greet === b.greet); // true
console.log(Object.getPrototypeOf(a) === User.prototype); // true
// Inheritance — Admin extends User
function Admin(name, city, level) {
User.call(this, name, city); // borrow User's constructor
this.level = level;
}
Admin.prototype = Object.create(User.prototype); // chain Admin → User
Admin.prototype.constructor = Admin; // restore constructor pointer
Admin.prototype.power = function () {
console.log(`${this.name} has level ${this.level}`);
};
const ad = new Admin("Riya", "Bangalore", 5);
ad.greet(); // inherited from User.prototype
ad.power(); // own to Admin.prototype


// Topic 6 Don't Modify Built-in Prototypes

// DON'T do this (in real code)
Array.prototype.last = function () {
return this[this.length - 1];
};
const fruits = ["apple", "mango", "banana"]
console.log(fruits.last()); // "banana"

// Looks neat, but...
// 1. Every Array everywhere now has .last — including in libraries you import
// 2. ECMAScript may add a real .last in future and clash with yours
// 3. for...in over an array now includes 'last' as a key in some traversal patterns
// SAFER alternative — a free function or a utility
function last(arr) { return arr[arr.length - 1]; }
console.log(last(fruits)); // "banana"

// Topic 7 Mental Model

// Property read ,Property write ,Method call, End of chain 
