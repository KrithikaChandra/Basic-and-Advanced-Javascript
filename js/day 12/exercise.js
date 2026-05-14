// function tryCatchExample(){
//     try {
//   const data = JSON.parse('{"name":"Priya"');   // missing closing brace
//   console.log(data);
// } catch (err) {
//   console.log("Couldn't parse:", err.message);
// }
// console.log("App keeps running");
// }
// tryCatchExample();

// function readConfig() {
//   try {
//     return JSON.parse(rawConfig);
//   } catch (err) {
//     console.log("Falling back to defaults");
//     return { theme: "light" };
//   } finally {
//     console.log("Config attempt finished");
//   }
// }
// readConfig();

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
    console.log(divide(10, 1));    // 10
    console.log(divide("Hello", "World"));    
    console.log(divide(10, 0));    // throws
} catch (err) {
  console.log("Caught:", err.message);
}