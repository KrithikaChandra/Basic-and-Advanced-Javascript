// app.js

import formatPrice, {PI, add , multiply } from "./mathUtils.js";
console.log(multiply(4, 5));

import { multiply as product } from "./mathUtils.js";
console.log(product(10, 2));

import divide from "./mathUtils.js";
console.log(divide(20, 5));

import division from "./mathUtils.js";
console.log(division(10, 5));


console.log(PI);

console.log(add(2, 3));

console.log(formatPrice(450));


// import { add as sum } from "./mathUtils.js";

// console.log(sum(10, 20));

// import * as math from "./mathUtils.js";

// console.log(math.add(1, 2));

// console.log(math.PI);