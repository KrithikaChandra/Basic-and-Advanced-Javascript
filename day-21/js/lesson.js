// Topic 1 Shallow vs Deep Clone

const original = {
  name: "Priya",
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// Shallow clones — three common ways, all behave the same
const a = { ...original };               // spread
const b = Object.assign({}, original);   // Object.assign
const c = JSON.parse(JSON.stringify(original));  // deep, but only for plain JSON data!

// Mutate the nested address on the shallow clone
a.address.city = "Mumbai";

console.log(original.address.city);      // "Mumbai"  ← original ALSO changed!
console.log(a.address === original.address);   // true — same nested object

// JSON deep clone is independent
c.address.city = "Delhi";
console.log(original.address.city);      // still "Mumbai" — c is independent

// But JSON loses Date, undefined, functions, Map, Set, ...
const tricky = { d: new Date(), m: new Map(), u: undefined };
console.log(JSON.parse(JSON.stringify(tricky)));   // { d: "...", m: {} }  ← lost!


// Topic 2 structuredCloneModern · Built-in · Handles Date/Map/Set

const original = {
  name: "Priya",
  date: new Date(),
  nested: { city: "Jaipur" },
  scores: new Map([["math", 90]]),
};

const copy = structuredClone(original);

copy.nested.city = "Mumbai";
console.log(original.nested.city);   // still "Jaipur" — true deep clone

// Preserves types JSON can't
console.log(copy.date instanceof Date);   // true
console.log(copy.scores instanceof Map);  // true

// Limitation: cannot clone functions, DOM nodes, or class instances with prototypes
// structuredClone({ fn: () => {} });   // throws DataCloneError


// Topic 3 Object.freezeShallow lock

const config = Object.freeze({
  host: "api.example.com",
  port: 8080,
  retries: 3,
});

config.port = 9000;             // silently ignored (or throws in strict mode)
console.log(config.port);       // 8080

// Shallow — nested still mutable
const user = Object.freeze({
  name: "Priya",
  address: { city: "Jaipur" },
});

user.name = "Anaya";            // ignored
user.address.city = "Mumbai";   // SUCCEEDS — address itself isn't frozen!
console.log(user.address.city); // "Mumbai"

// Deep freeze — recurse manually
function deepFreeze(obj) {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") deepFreeze(v);
  });
  return Object.freeze(obj);
}

const fully = deepFreeze({ a: 1, n: { x: 2 } });
fully.n.x = 99;
console.log(fully.n.x);         // still 2

// Topic 4 Immutable UpdatesSpread + replace · Never mutate

const user = {
  name: "Priya",
  age: 25,
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// 1. Update a top-level field
const u1 = { ...user, age: 26 };          // age: 26, everything else copied
console.log(u1.age, user.age);            // 26  25  ← user unchanged

// 2. Update a nested field — must spread the nested object too
const u2 = {
  ...user,
  address: { ...user.address, city: "Mumbai" },
};
console.log(u2.address.city, user.address.city);   // "Mumbai" "Jaipur"

// 3. Add to an array immutably (NOT push)
const u3 = { ...user, hobbies: [...user.hobbies, "swimming"] };
console.log(u3.hobbies);                  // ["reading", "trekking", "swimming"]
console.log(user.hobbies);                // ["reading", "trekking"]    ← unchanged

// 4. Remove from an array immutably (NOT splice)
const u4 = { ...user, hobbies: user.hobbies.filter((h) => h !== "trekking") };
console.log(u4.hobbies);                  // ["reading"]

// 5. Update one item in an array of objects
const tasks = [{ id: 1, done: false }, { id: 2, done: false }];
const t1 = tasks.map((t) => t.id === 1 ? { ...t, done: true } : t);
console.log(t1[0].done);                  // true
console.log(tasks[0].done);               // false  ← original unchanged

// Topic 5 Advanced DestructuringDefaults · Renames · Nested · Rest

// 1. Defaults — when the property is undefined
const { name, role = "user" } = { name: "Priya" };
console.log(name, role);         // "Priya" "user"

// 2. Rename
const { name: userName, role: userRole = "user" } = { name: "Aarav" };
console.log(userName, userRole); // "Aarav" "user"

// 3. Nested destructuring
const config = {
  api: { host: "api.example.com", port: 8080 },
  db:  { host: "db.example.com",  port: 5432 },
};
const { api: { host: apiHost, port: apiPort } } = config;
console.log(apiHost, apiPort);   // "api.example.com" 8080

// 4. Array destructuring with defaults and rest
const [first = "?", second = "?", ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

// 5. Function parameter destructuring (everyday React pattern)
function Card({ title, subtitle = "—", actions = [] }) {
  console.log(title, subtitle, actions);
}
Card({ title: "Hello", actions: ["delete"] });    // "Hello" "—" ["delete"]

// Topic 6 Computed Keys[ expression ] as the key

const field = "city";
const value = "Mumbai";

// Static key
const a = { city: "Jaipur" };
// Computed (dynamic) key
const b = { [field]: value };
console.log(b);                  // { city: "Mumbai" }

// Practical — generic update helper
function updateField(obj, key, value) {
  return { ...obj, [key]: value };       // computed key!
}

const user = { name: "Priya", age: 25 };
console.log(updateField(user, "age", 26));    // { name: "Priya", age: 26 }
console.log(updateField(user, "city", "Jaipur")); // { name: "Priya", age: 25, city: "Jaipur" }

// Topic 7 Optional Chaining + Nullish Coalescing?. and ?? on deep data

const response = {
  user: {
    name: "Priya",
    profile: {
      bio: null,
      // city missing
    },
  },
};

// Walk safely — return undefined at any missing step
const city = response?.user?.profile?.city;
console.log(city);                // undefined  (no crash)

// With a fallback
const cityOrDefault = response?.user?.profile?.city ?? "Unknown";
console.log(cityOrDefault);       // "Unknown"

// Method call is also safe
const upper = response?.user?.name?.toUpperCase?.();
console.log(upper);               // "PRIYA"

// Array index — with ?. it's `?.[ ]`
const first = response?.user?.tags?.[0] ?? "no tags";
console.log(first);               // "no tags"