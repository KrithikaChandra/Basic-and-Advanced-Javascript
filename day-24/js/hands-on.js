/*Task 1 Multiple Named Exports + Barrel
Create three files in a folder math/: add.js, multiply.js, divide.js. Each exports a named function.
Create math/index.js that re-exports all three.
In app.js, import all three from "./math" in a single line. Use them.*/

import { add, multiply, divide } from "./index.js";

console.log(add(2, 3));
console.log(multiply(4, 5));
console.log(divide(10, 2));

/*Task 2 Default + Named in Same File
Create Button.js that has a default export function Button(...) and a named export const ButtonStyles = { ... }.
Import the default and the named export in another file, in a single import statement.*/

import Button, { ButtonStyles } from "./Button.js";

console.log(Button("Save"));

console.log(ButtonStyles.primary);

/*Task 3 Dynamic import()
Create a heavy.js that exports a compute() function returning the string "computed!".
In main.js, write a function loadAndRun() that uses await import("./heavy.js") to load the module on demand, then calls compute().
Call loadAndRun(). Confirm in DevTools Network tab that heavy.js is fetched only when called (in a real bundler setup).*/

async function loadAndRun() {
  const module = await import("./heavy.js");

  console.log(module.compute());
}

loadAndRun();

/*Bonus Singleton Cache
Create cache.js exporting a single shared Map as default.
Create userService.js that imports the cache and writes user objects keyed by id.
Create productService.js that imports the cache and writes product objects.
In main.js, import the cache directly. Confirm both services' writes are visible.*/

import cache from "./cache.js";

import { saveUser } from "./userService.js";
import { saveProduct } from "./productService.js";

saveUser({
  id: 1,
  name: "Krithika"
});

saveProduct({
  id: 101,
  title: "Laptop"
});

console.log(cache);