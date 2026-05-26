// Topic 1 Map — Better Keyed Storage

const m = new Map();

m.set("name", "Priya");
m.set(42, "the answer");
m.set(true, "a boolean key");

const userObj = { id: 1 };
m.set(userObj, "value associated with userObj");   // OBJECT as key — Object can't!

console.log(m.get("name"));     // "Priya"
console.log(m.get(userObj));    // "value associated with userObj"
console.log(m.size);            // 4
console.log(m.has(42));         // true
m.delete(42);

// Initialise from an array of pairs
const m2 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(m2.get("a"));       // 1

// Iterate — preserves insertion order
for (const [key, value] of m2) {
  console.log(key, value);
}

// Topic 2 Object ↔ Map Conversion

const obj = { name: "Priya", city: "Jaipur" };

// Object → Map
const map = new Map(Object.entries(obj));
console.log(map.get("name"));    // "Priya"

// Map → Object (keys must be strings/symbols)
const back = Object.fromEntries(map);
console.log(back);                // { name: "Priya", city: "Jaipur" }

// Map iteration helpers
for (const key of map.keys())   console.log("key:", key);
for (const val of map.values()) console.log("val:", val);
for (const [k, v] of map.entries()) console.log(k, "=", v);

map.forEach((value, key) => console.log(key, "=", value));   //

// Topic 3 Set — Unique Values

const s = new Set();

s.add("a");
s.add("b");
s.add("a");                      // duplicate — ignored

console.log(s.size);             // 2
console.log(s.has("a"));         // true
s.delete("b");

// Initialise from an array
const tags = new Set(["js", "react", "js", "node", "react"]);
console.log(tags.size);          // 3   ← duplicates removed

// Most common Set use: deduplicate an array
const arr   = [1, 2, 2, 3, 4, 4, 5];
const uniq  = [...new Set(arr)];
console.log(uniq);               // [1, 2, 3, 4, 5]

// Iterate
for (const v of tags) console.log(v);

// Object identity, not value equality
const set = new Set();
set.add({ id: 1 });
set.add({ id: 1 });              // DIFFERENT object → both kept
console.log(set.size);           // 2

// Topic 4 Set Operations

const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union — A ∪ B
const union = new Set([...a, ...b]);
console.log([...union]);              // [1, 2, 3, 4]

// Intersection — A ∩ B
const inter = new Set([...a].filter((x) => b.has(x)));
console.log([...inter]);              // [2, 3]

// Difference — A − B
const diff = new Set([...a].filter((x) => !b.has(x)));
console.log([...diff]);               // [1]

// Modern (ES2025+, where supported):
// a.union(b); a.intersection(b); a.difference(b);

// Topic 5 When Each

// Use case: caching by request object
const cache = new Map();

function fetchWithCache(req) {
  if (cache.has(req)) return cache.get(req);   // hit
  const result = doFetch(req);
  cache.set(req, result);                       // store
  return result;
}

// Use case: unique tag list from many posts
const allTags = new Set();
posts.forEach((p) => p.tags.forEach((t) => allTags.add(t)));
console.log([...allTags]);

// Topic 6 WeakMap & WeakSetGC-friendly storage

// WeakMap/WeakSet hold WEAK references — entries don't prevent GC. 
// When an object key is no longer referenced anywhere else, the entry vanishes automatically. Keys MUST be objects. 
// NOT iterable.

const wm = new WeakMap();
let user = { id: 1, name: "Priya" };

wm.set(user, { lastSeen: Date.now() });   // key MUST be an object
console.log(wm.get(user));                 // { lastSeen: ... }

user = null;                                // last reference dropped
// Garbage collector eventually removes the entry from wm.
// We cannot observe this directly — that's the point.

// Practical use: per-DOM-node metadata, no leaks when nodes are removed
const dataForElement = new WeakMap();
function attachData(el, data) {
  dataForElement.set(el, data);
}
// When the element is removed from the DOM AND no other reference exists,
// the WeakMap entry is auto-cleaned. No memory leak.

// WeakSet — same idea, just storing object membership
const seen = new WeakSet();
function process(item) {
  if (seen.has(item)) return;     // skip already-processed
  seen.add(item);
  // ... do work
}

// WeakMap is not a cache — entries can vanish at any time. 
// Use WeakMap when you want metadata "attached" to an object that should die with it.

