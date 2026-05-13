// Task 1 
const a = 17;
const b = 5;

const firstResult = a + b;
const secondResult = a - b;
const thirdResult = a * b;
const fourthResult = a / b;
const fifthResult = a % b;
const sixthResult = a ** b;

const evenOrOdd = (42 % 2 === 0 ? "even" : "odd");

console.log(firstResult);
console.log(secondResult);
console.log(thirdResult);
console.log(fourthResult);
console.log(fifthResult);
console.log(sixthResult);
console.log(evenOrOdd);

// Task 2

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
// === is preferred because it checks both value and type 

// Task 3
const age = 19;
let hasLicense = true;
const hasCar = false;

const canDrive = age >= 18 && hasLicense;
const canTravel = hasLicense || hasCar;

console.log("canDrive: ", canDrive);
console.log("canTravel: ", canTravel);

hasLicense = false;

const canDriveAfterFlip = age >= 18 && hasLicense;
const canTravelAfterFlip = hasLicense || hasCar;

console.log("canDriveAfterFlip: ",canDriveAfterFlip);
console.log("canTravelAfterFlip: ",canTravelAfterFlip);

//bonus Task

const mood = age >= 18 ? "adult" : "minor";
console.log(mood);

let username = null;
const display = username ?? "Guest";
console.log(display);

const display2 = username || "Guest";
console.log(display2);

// ?? only falls back for null or undefined, while || falls back for any falsy value 