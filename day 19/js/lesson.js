// Topic 1 async Always Returns a Promise

async function greet() {
  return "Namaste";                    // plain return value — but...
}

const result = greet();
console.log(result);                   // Promise { "Namaste" }   ← it's a Promise!

result.then((msg) => console.log(msg));   // "Namaste"

// Equivalent without async sugar:
function greetOld() {
  return Promise.resolve("Namaste");
}

// Topic 2 await Pauses the async Function

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Priya" }), 500);
  });
}

// .then style
function withThen() {
  fetchUser(7).then((user) => {
    console.log("got:", user);
  });
}

// async/await style — reads like sync code
async function withAwait() {
  const user = await fetchUser(7);     // pause here for ~500ms
  console.log("got:", user);            // then continue
}

withAwait();

async function f() {
  return 1;
}
console.log(f());
console.log(await f());


// Topic 3 try / catch for Async ErrorsFamiliar from Basic Day 12
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) reject(new Error("Bad id"));
      else        resolve({ id, name: "Priya" });
    }, 300);
  });
}

async function showUser(id) {
  try {
    const user = await fetchUser(id);
    console.log("got:", user);
  } catch (err) {
    console.error("failed:", err.message);
  } finally {
    console.log("done");
  }
}

showUser(7);     // got: { id: 7, name: "Priya" } / done
showUser(-1);    // failed: Bad id                / done


// Topic 4 Sequential vs ParallelThe most common perf bug
function fetchProduct(id) {
  return new Promise((res) => setTimeout(() => res({ id, price: 100 }), 1000));
}

// SLOW — sequential (3 seconds total)
async function slow() {
  const t0 = Date.now();
  const a = await fetchProduct(1);     // wait 1s
  const b = await fetchProduct(2);     // then wait 1s more
  const c = await fetchProduct(3);     // then wait 1s more
  console.log(`Took ${Date.now() - t0}ms`);   // ~3000ms
}

// FAST — parallel (1 second total)
async function fast() {
  const t0 = Date.now();
  const [a, b, c] = await Promise.all([   // all three start IMMEDIATELY
    fetchProduct(1),
    fetchProduct(2),
    fetchProduct(3),
  ]);
  console.log(`Took ${Date.now() - t0}ms`);   // ~1000ms
}

// Use sequential ONLY when each step depends on the previous one.
// For independent fetches, ALWAYS Promise.all.


// Topic 5 The forEach TrapforEach ignores Promises

const ids = [1, 2, 3];

// BUG — finishes before any fetch completes
async function bug() {
  console.log("start");
  ids.forEach(async (id) => {
    const p = await fetchProduct(id);     // Promise returned but ignored by forEach
    console.log("got", p);
  });
  console.log("end");                     // logs BEFORE any "got"
}

// FIX 1 — for...of (sequential)
async function sequential() {
  console.log("start");
  for (const id of ids) {
    const p = await fetchProduct(id);
    console.log("got", p);
  }
  console.log("end");                     // logs AFTER all "got"
}

// FIX 2 — Promise.all + map (parallel, preferred)
async function parallel() {
  console.log("start");
  const results = await Promise.all(
    ids.map((id) => fetchProduct(id)),    // each returns a Promise; map collects them
  );
  results.forEach((p) => console.log("got", p));
  console.log("end");
}

// Topic 6 Top-Level awaitIn ES modules

// In an ES module (e.g., main.js with type="module" or .mjs)
const response = await fetch("/api/config");
const config = await response.json();

console.log("Config loaded:", config);

// In a regular script — TOP-LEVEL await is a SyntaxError.
// Always wrap in an IIFE-like async function for legacy contexts:
(async () => {
  const r = await fetch("/api/config");
  const c = await r.json();
  console.log(c);
})();


// Topic 7 Mixing with .thenPick whichever reads cleanest

async function getUserName(id) {
  const user = await fetchUser(id);
  return user.name;                    // returns inside async = resolved value
}

// Caller can use either style
getUserName(7).then((name) => console.log(name));   // .then-style call

(async () => {
  const name = await getUserName(7);                // await-style call
  console.log(name);
})();
