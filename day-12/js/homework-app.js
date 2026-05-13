import calculate, { add, subtract, multiply, divide } from "./calc.js";

// Uses named exports + default. Expected results:
// add(10, 5)              -> 15
// subtract(10, 5)         -> 5
// multiply(10, 5)         -> 50
// divide(10, 5)          -> 2
// calculate("add", 2, 3)  -> 5
void [
  add(10, 5),
  subtract(10, 5),
  multiply(10, 5),
  divide(10, 5),
  calculate("add", 2, 3),
];
