// Topic 1 Why Patterns?Vocabulary for structure

// Patterns are recurring solutions to recurring problems. They give developers a SHARED VOCABULARY — saying "use pub-sub here" instantly conveys structural intent.
//  They're idioms, not features.

// Topic 2 Module PatternClosures · ES modules

// CLASSIC closure-based module (pre-ES6)
const counter = (function () {
  let count = 0;                    // private — captured in closure

  function increment() { count++; }
  function get()       { return count; }

  return { increment, get };        // public API
})();

counter.increment();
counter.increment();
console.log(counter.get());         // 2
console.log(counter.count);         // undefined — count is private!

// MODERN ES-module equivalent (Day 12 callback)
// counter.js
//   let count = 0;
//   export function increment() { count++; }
//   export function get()       { return count; }
//   // count is NOT exported → private

// Topic 3 Observer (Pub/Sub)Subject notifies subscribers

// Tiny pub/sub from scratch
function createEmitter() {
  const listeners = new Map();      // event → Set of callbacks (Day 10!)

  return {
    on(event, callback) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(callback);
    },
    off(event, callback) {
      listeners.get(event)?.delete(callback);
    },
    emit(event, ...args) {
      listeners.get(event)?.forEach((cb) => cb(...args));
    },
  };
}

const bus = createEmitter();

function onUserSignup(user) {
  console.log("welcome email →", user.email);
}

bus.on("user:signup", onUserSignup);
bus.on("user:signup", (user) => console.log("audit log →", user.id));

// Some service emits the event
bus.emit("user:signup", { id: 1, email: "priya@example.com" });
// Both listeners fire:
//   welcome email → priya@example.com
//   audit log → 1

// Topic 4 Factory

// Without factory — caller picks the class
class Car   { constructor() { this.kind = "car"; } }
class Bike  { constructor() { this.kind = "bike"; } }
class Truck { constructor() { this.kind = "truck"; } }

// Factory — caller asks for what they need by name
function vehicleFactory(type) {
  switch (type) {
    case "car":   return new Car();
    case "bike":  return new Bike();
    case "truck": return new Truck();
    default:      throw new Error(`Unknown vehicle: ${type}`);
  }
}

const v1 = vehicleFactory("car");
const v2 = vehicleFactory("bike");
console.log(v1.kind, v2.kind);   // "car" "bike"

// Closure-based factory (no class needed)
function createUser(name, role = "user") {
  return {
    name,
    role,
    greet() { return `Hi, I'm ${this.name} (${this.role})`; },
  };
}

const u1 = createUser("Priya");
const u2 = createUser("Aarav", "admin");
console.log(u1.greet());         // "Hi, I'm Priya (user)"
console.log(u2.greet());         // "Hi, I'm Aarav (admin)"



// Topic 5 SingletonExactly one instance

// Classic singleton class (works, but rare in modern JS)
class Logger {
  static #instance = null;       // private static field

  constructor() {
    if (Logger.#instance) return Logger.#instance;   // hand back existing
    Logger.#instance = this;
    this.logs = [];
  }

  log(msg) { this.logs.push(msg); console.log("[LOG]", msg); }
}

const a = new Logger();
const b = new Logger();
a.log("hello");
console.log(a === b);            // true — same instance
console.log(b.logs);             // ["hello"]

// MODERN equivalent — just export an instance
// logger.js
//   class Logger { ... }
//   export default new Logger();
//
// Anywhere:
//   import logger from "./logger.js";
//   logger.log("hi");
//   // every importer shares the same instance — modules are evaluated ONCE

// Topic 6 ES6 ProxyTrap reads/writes

const target = { name: "Priya", age: 25 };

const handler = {
  get(obj, prop) {
    console.log(`reading ${prop}`);
    return prop in obj ? obj[prop] : `?? unknown: ${prop}`;
  },
  set(obj, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("age must be a number");
    }
    console.log(`setting ${prop} = ${value}`);
    obj[prop] = value;
    return true;                  // signal success — required
  },
};

const user = new Proxy(target, handler);

console.log(user.name);            // logs "reading name", returns "Priya"
console.log(user.unknown);         // "reading unknown", returns "?? unknown: unknown"
user.age = 26;                     // logs "setting age = 26"
// user.age = "old";               // throws TypeError

// Practical: build a tiny reactive system
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      onChange(prop, value);       // notify on every write
      return true;
    },
  });
}

const state = reactive({ count: 0 }, (key, val) => {
  console.log(`state.${key} changed to ${val}`);
});

state.count = 1;                   // "state.count changed to 1"
state.count = 5;                   // "state.count changed to 5"