/*Task 1 Manual Iterator
Build a range(from, to) ITERABLE OBJECT (not a generator) using [Symbol.iterator].
Test with for...of over range(3, 7). Should log 3, 4, 5, 6, 7.
Test with [...range(1, 3)]. Should give [1, 2, 3].*/

function range(from, to) {
  return {
    [Symbol.iterator]() {
      let current = from;

      return {
        next() {
          return current <= to
            ? { value: current++, done: false }
            : { done: true };
        }
      };
    }
  };
}

for (const n of range(3, 7)) console.log(n);
console.log([...range(1, 3)]);

/*Task 2 Range Generator
Re-do Task 1 — but using function*.
Verify the same for...of and spread tests pass.
In a comment, note the line-count difference.*/

function* rangeGenerator(from, to) {
  for (let i = from; i <= to; i++) yield i;
}

for (const n of rangeGenerator(3, 7)) console.log(n);
console.log([...rangeGenerator(1, 3)]);

/*Task 3 Take from Infinite
Write take(iter, n) that takes ONLY the first n values from any iterator/generator.
Build an infinite naturals() generator: 1, 2, 3, ...
Use take(naturals(), 5) to safely get [1, 2, 3, 4, 5] without hanging.*/

function* naturals() {
  let n = 1;
  while (true) yield n++;
}

function take(iter, count) {
  const result = [];

  for (const value of iter) {
    result.push(value);
    if (result.length === count) break;
  }

  return result;
}

console.log(take(naturals(), 5));

/*Bonus Tree Walk with yield*
Build a tree: { value: 1, children: [{ value: 2, children: [{ value: 3, children: [] }] }, { value: 4, children: [] }] }.
Write a generator walk(node) that yields each value in depth-first order.
Use yield* to recurse.
Spread to an array. Should be [1, 2, 3, 4].*/

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3, children: [] }]
    },
    {
      value: 4,
      children: []
    }
  ]
};

function* walk(node) {
  yield node.value;

  for (const child of node.children) {
    yield* walk(child);
  }
}

console.log([...walk(tree)]);