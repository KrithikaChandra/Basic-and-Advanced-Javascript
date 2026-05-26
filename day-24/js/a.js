// // utils.js — named exports
// // export function formatPrice(p) { return `₹${p}`; }
// // export function gst(p, rate = 18) { return p * rate / 100; }
// // export const TAX_RATE = 18;

// import * as utils from "./utils.js";
// console.log(utils.formatPrice(100));
// console.log(utils.gst(100));
// console.log(utils.TAX_RATE);

// a.js
import { fromB } from "./b.js";
export const fromA = "I am A";
console.log("a sees fromB =", fromB);  