// Practice tasks before next class · Advanced Day 13

// 1.Implement compose from scratch (right-to-left). Use it with the same addOne, square, negate as today's task. Confirm the output ordering vs pipe.

function compose(...fns) {
  return input => fns.reduceRight((acc, fn) => fn(acc), input);
}

const addOne = x => x + 1;
const square = x => x * x;
const negate = x => -x;

const result = compose(negate, square, addOne);

console.log(result(5));
// -36

// 2. Refactor any old project function that mutates an array into a pure version. Verify with a test.

//Impure
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

const nums = [3, 1, 2];
sortNumbers(nums);

console.log(nums);
// [1, 2, 3] ← original changed

//Pure
function sortNumbersPure(arr) {
  return [...arr].sort((a, b) => a - b);
}

const nums = [3, 1, 2];
const sorted = sortNumbersPure(nums);

console.log(nums);
// [3, 1, 2]

console.log(sorted);
// [1, 2, 3]

// 3. Implement curry(fn) — given a function of N args, return a curried version. Test with curry(add)(1)(2)(3).

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) =>
      curried(...args, ...nextArgs);
  };
}

// 4. Take the order data from Topic 7 and write a pipeline that returns the AVERAGE order value (excluding GST). Use small pure functions.

const orders = [
  { id: 1, item: "Pen",  price: 50,   quantity: 2 },
  { id: 2, item: "Book", price: 200,  quantity: 1 },
  { id: 3, item: "Bag",  price: 800,  quantity: 1 },
  { id: 4, item: "Mug",  price: 150,  quantity: 3 },
];

// Pure functions
const orderValue = (order) => order.price * order.quantity;

const sum = (numbers) =>
  numbers.reduce((total, num) => total + num, 0);

const average = (numbers) =>
  sum(numbers) / numbers.length;

// Pipeline
const averageOrderValue = average(
  orders.map(orderValue)
);

console.log(averageOrderValue);