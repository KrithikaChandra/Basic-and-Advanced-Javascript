/*Task 1 Rectangle Area
Write a function area(length, width) that returns the area of a rectangle.
Call it three times with different values and log each result.
Bonus: rewrite the same function as an arrow function with implicit return.*/
function area(length, width){
return length*width;
}
console.log(area(20,30));
console.log(area(1,2));
console.log(area(23,25));

const areaArrow = (length,width) =>  length*width;

console.log(area(20,30));
console.log(area(1,2));
console.log(area(23,25));

/*Task 2 Greeting with Default
Write a function greet(name) that returns "Hello, <name>!".
Use a default parameter: if no name is passed, it should default to "Guest".
Call it three times: with "Priya", with "Aarav", and with no argument.
Bonus: try greet(null) — does it use the default? Why or why not?*/
function greet(name='Guest') {
    return "Hello, " + name ;
}
console.log(greet('Priya'));
console.log(greet('Aarav'));
console.log(greet());
console.log(greet(null));

/*Task 3 Temperature Converter
Write an arrow function cToF(celsius) that converts Celsius to Fahrenheit.
Formula: F = C * 9/5 + 32.
Use implicit return.
Test with: 0, 100, 37 (body temperature), and 45 (Jaipur summer).*/
const cToF = (celsius) => celsius * 9/5 +32;
console.log(cToF(0));
console.log(cToF(100));
console.log(cToF(37));
console.log(cToF(45));

/*Bonus Pure vs Impure
Write a PURE function double(n) that returns n * 2.
Then write an IMPURE function addToTotal(n) that updates an outer variable let total = 0 and returns the new total.
Call each function three times. Note how the impure one's output depends on previous calls.
Write a comment: which one is easier to reason about, and why?*/
const double = n => n*2;
console.log(double(2));
console.log(double(4));
console.log(double(8));

let total = 0;
function addToTotal (n) {
    total  += n;
    return total;
}
console.log(addToTotal(2));
console.log(addToTotal(4));
console.log(addToTotal(6));
//Pure function is easier to reason as its output doesnt depend on outer state, same input gives same outputs