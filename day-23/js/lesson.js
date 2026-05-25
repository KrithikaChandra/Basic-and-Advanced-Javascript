// Topic 1 The Iterator Protocol

const arr = ["a", "b", "c"];
const it  = arr[Symbol.iterator]();        // get the iterator object

console.log(it.next());    // { value: "a", done: false }
console.log(it.next());    // { value: "b", done: false }
console.log(it.next());    // { value: "c", done: false }
console.log(it.next());    // { value: undefined, done: true }

// for...of is sugar over this protocol:
for (const ch of arr) {
  console.log(ch);
}
// Internally: while not done → { value, done } = it.next() → use value

// Topic 2 Make an Object Iterable

const range1 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// Now range works with for...of, spread, destructuring
for (const n of range1) console.log(n);    // 1, 2, 3, 4, 5
console.log([...range1]);                  // [1, 2, 3, 4, 5]
const [first, ...rest] = range1;
console.log(first, rest);                 // 1 [2, 3, 4, 5]


// Topic 3 Generators with function*yield = pause

function* simple() {
  yield 1;          // pause and return 1
  yield 2;          // resume next time, then return 2
  yield 3;
}

const g = simple();           // generator object — function NOT yet running
console.log(g.next());        // { value: 1, done: false }
console.log(g.next());        // { value: 2, done: false }
console.log(g.next());        // { value: 3, done: false }
console.log(g.next());        // { value: undefined, done: true }

// Generators are iterables — for...of works directly
for (const n of simple()) console.log(n);    // 1, 2, 3

// Re-do range with a generator — much shorter than Topic 2!
function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

console.log([...range(1, 5)]);                // [1, 2, 3, 4, 5]

function* g1() {
  yield "a";
  yield "b";
}
const it1 = g1();
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().done);

// Topic 4 Infinite Sequences
//Will cause hang so didnt add here

// Topic 5 yield* — DelegatingYield from another iterable


function* a() {
  yield 1;
  yield 2;
}

function* b() {
  yield 0;
  yield* a();           // yield each value from a() in turn
  yield* [10, 20];      // arrays are iterables — works too
  yield 99;
}

console.log([...b()]);    // [0, 1, 2, 10, 20, 99]

// Practical: flatten nested data with recursion
function* flatten(items) {
  for (const item of items) {
    if (Array.isArray(item)) yield* flatten(item);   // recurse
    else                     yield item;
  }
}

console.log([...flatten([1, [2, [3, [4, 5]]], 6])]);   // [1, 2, 3, 4, 5, 6]

// Topic 6 Two-Way: next(value)Coroutines

function* dialog() {
  const name = yield "What's your name?";        // first yield → its return is from .next("Priya")
  const age  = yield `Hi ${name}! How old?`;     // second yield → from .next(25)
  return `${name}, ${age}, recorded.`;
}

const g2 = dialog();
console.log(g2.next().value);            // "What's your name?" — first yield
console.log(g2.next("Priya").value);     // "Hi Priya! How old?"  — name = "Priya"
console.log(g2.next(25).value);          // "Priya, 25, recorded."  — age = 25, fn returns

// Topic 7 Pagination Generatorasync function* + for await

// Simulated paged API
function fetchPage(page) {
  // Imagine an API call returning 3 items per page, up to page 4
  const data = {
    1: ["pen", "book", "bag"],
    2: ["mug", "lamp", "fan"],
    3: ["chair", "desk", "rug"],
    4: ["plant", "vase"],
  };
  return Promise.resolve(data[page] || []);
}

async function* paginate() {
  let page = 1;
  while (true) {
    const items = await fetchPage(page);
    if (items.length === 0) return;     // no more pages
    yield* items;                        // yield each item one by one
    page++;
  }
}

(async () => {
  for await (const item of paginate()) {     // for-await-of — Day 7 callback
    console.log(item);
  }
  // pen, book, bag, mug, lamp, fan, chair, desk, rug, plant, vase
})();