//Topic 1 Named vs Default
// utils.js — named exports
export function formatPrice(p) { return `₹${p}`; }
export function gst(p, rate = 18) { return p * rate / 100; }
export const TAX_RATE = 18;

// main.js
import { formatPrice, gst, TAX_RATE } from "./utils.js";


//Topic 2 Aliasing & Namespace
// Rename on import
import { formatPrice as fp } from "./utils.js";
fp(100);

// Rename on export
export { formatPrice as format } from "./utils.js";

// Namespace import — pull EVERYTHING under one object
import * as utils from "./utils.js";
console.log(utils.formatPrice(100));
console.log(utils.gst(100));
console.log(utils.TAX_RATE);



//Topic 3 Barrels — Single Import Path

// components/index.js — the barrel
export { default as Button } from "./Button.js";
export { default as Card }   from "./Card.js";
export { default as Modal }  from "./Modal.js";

// You can also re-export named exports:
export * from "./hooks.js";              // re-export ALL named
export { useForm, useDebounce } from "./hooks.js";   // selective


//Topic 4 Dynamic import()
// Static — loaded immediately, before this script runs
import { gst } from "./utils.js";

// Dynamic — loaded ON DEMAND
async function showSettings() {
  const { Settings } = await import("./Settings.js");   // returns a Promise
  Settings.render();
}

// Conditional load — only fetch big-chart library if user clicks "Show chart"
button.addEventListener("click", async () => {
  const Chart = await import("./BigChartLibrary.js");
  Chart.draw();
});

// React route splitting (you'll see this every day)
const Settings = React.lazy(() => import("./Settings.js"));


//Topic 5 Live Bindings
// counter.js
export let count = 0;
export function inc() { count++; }
// main.js
import { count, inc } from "./counter.js";

console.log(count);    // 0
inc();
console.log(count);    // 1   ← updated! It's a live binding.


//Topic 6 Circular Deps
// a.js
import { fromB } from "./b.js";
export const fromA = "I am A";
console.log("a sees fromB =", fromB);   // may be undefined at first run

// b.js
import { fromA } from "./a.js";
export const fromB = "I am B";
console.log("b sees fromA =", fromA);   // may be undefined