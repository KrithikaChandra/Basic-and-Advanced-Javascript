/*Task 1 Map vs Object
Build a Map of products: "pen" → 50, "book" → 200, "bag" → 800.
Iterate with for...of and log each as "item: ₹price".
Use .has, .get, .delete, .size.
Convert it to an Object with Object.fromEntries and back to a Map with new Map(Object.entries(...)).*/

const m = new Map();

m.set("pen", 50);
m.set("book", 200);
m.set("bag", 800);
 
console.log(m);
for (const [item, price] of m) {
  console.log(`Item : ${item}  Price: ₹${price}`);
}

console.log(m.has("Pen"));
console.log(m.get("Book"));
console.log(m.size);
m.delete("Pen");
console.log(m);

const obj = Object.fromEntries(m);
console.log(m);

const back = new Map(Object.entries(obj));
console.log(back);

/*Task 2 Deduplicate with Set
Take an array of student IDs with duplicates: [101, 102, 103, 101, 104, 102, 105].
Use a Set to deduplicate. Convert back to an array.
Now compute the count of UNIQUE IDs.
Try with mixed types [1, "1", 1, true, 1n] — predict and verify.*/

const studentIds = [101, 102, 103, 101, 104, 102, 105];

const uniqueIds = [...new Set(studentIds)];
console.log(uniqueIds);

console.log(`Count of Unique Ids ${uniqueIds.length}`);

const mixed = [1, "1", 1, true, 1n];

const uniqueMixed = [...new Set(mixed)];
console.log(uniqueMixed);

console.log(`Count of Uniques Id ${uniqueMixed.length}`);

/*Task 3 Cache with Map
Write memoize(fn) from Day 2 — but this time use a Map instead of an object.
Wrap an expensiveSquare(n) that logs "computing..." and returns n * n.
Verify that calling it twice with 5 only logs "computing..." once.
Then add a cache.size check.*/

function memoize(fn) {
  const cache = new Map();

  function memoized(arg) {
    if (cache.has(arg)) {
      console.log(`Fetching from cache for ${arg}`);
      return cache.get(arg);
    }

    const result = fn(arg);

    cache.set(arg, result);

    return result;
  }

  // Expose cache for inspection
  memoized.cache = cache;

  return memoized;
}

function expensiveSquare(n) {
  console.log("computing...");
  return n * n;
}

const memoizedSquare = memoize(expensiveSquare);

memoizedSquare(5);
memoizedSquare(5);
memoizedSquare(10);

console.log(memoizedSquare.cache.size);
// 2


/*Bonus WeakMap for Private Data
Use a WeakMap to store "metadata" for objects without modifying them.
Build a tiny attach/get API: attach(obj, data) and get(obj).
Test by attaching { lastClick: Date.now() } to two button objects.
Drop one of the button references. Conceptually, the WeakMap entry will be GC'd.*/

const metaData = new WeakMap();

function attach(obj, data) {
  metaData.set(obj, data);
}

// Get metadata for an object
function get(obj) {
  return metaData.get(obj);
}

let button1 = { id: "save-btn" };
let button2 = { id: "delete-btn" };

attach(button1, { lastClick: Date.now() });
attach(button2, { lastClick: Date.now() });

console.log(get(button1));
console.log(get(button2));


