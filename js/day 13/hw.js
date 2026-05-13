//1. Predict the output of console.log(typeof age); var age = 25; BEFORE running it. Run it. Compare. (Hint: typeof on an undefined variable is unusual.)

var age = 25;
console.log(typeof age); //undefined and number when after intialized

// Take a let declaration, try to access it on the line above its declaration, and screenshot the exact error message your console gives.

console.log(count);
let count = 5; //hw.js:6 Uncaught ReferenceError: Cannot access 'count' before initialization

// Write three versions of the same simple function — once as a function declaration, once as a var expression, once as a const arrow. Try calling each one BEFORE its line. Document which one works, which throws TypeError, which throws ReferenceError, and why.

console.log(display()); //Hello

function display(){
    console.trace();
    console.log("Hello"); 
}


console.log(greet()); //Uncaught TypeError: display is not a function

var greet = function () {
  console.log("Hello");
}

console.log(displayArrow()); //Uncaught ReferenceError: Cannot access 'displayArrow' before initialization

const displayArrow = () => {
  console.log("Hello");
}

// Open any small JS file you've written before. Add console.trace() to one of its functions. Run it. Read the stack trace and identify each EC.
// installHook.js:1 console.trace //
// overrideMethod	@	installHook.js:1 //Function Execution Context 
// display	@	hw.js:13 //Function Execution Context
// (anonymous)	@	hw.js:11 //Global Execution Context