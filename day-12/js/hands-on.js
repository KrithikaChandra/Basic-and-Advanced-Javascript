// Task 1 Safe JSON Parse
// Write a function safeParse(str) that uses try/catch around JSON.parse(str).
// If parsing succeeds, return the parsed object.
// If it fails, log "Invalid JSON:" plus the error message, and return null.
// Test with '{"name":"Priya"}' (valid) and '{"name":"Priya"' (broken).
function safeparse(str){
    try{
    return JSON.parse(str);   
    }
    catch(error){
    console.log("Invalid JSON:",error.message);
    }
}
console.log(safeparse('{"name":"Priya"}'));
console.log(safeparse('{"name":"Priya"'));
// Task 2 Throw on Bad Age
// Write a function setAge(age) that:
// Throws an Error with message "Age must be a number" if typeof age !== "number".
// Throws an Error with message "Age must be 0–120" if age is out of range.
// Otherwise returns age.
// Wrap calls in try/catch. Test: setAge(25), setAge("twenty"), setAge(200).
function setAge(age){
    if(typeof(age) !== "number"){
        throw new Error("Age must be a number");
    }
    if(age>120 || age<0)
    {
        throw new Error("Age must be 0-120");
    }
    return age;
}
try {
    console.log(setAge(25));
    console.log(setAge("twenty"));
    console.log(setAge(200));

} catch (error) {
    console.log(error.message);
}

// Task 3 Custom ValidationError on Email
// Define a class ValidationError extends Error that sets this.name = "ValidationError".
// Write validateEmail(email) that throws a ValidationError if the email doesn't include "@".
// Wrap a call in try/catch. Inside catch, branch on err instanceof ValidationError.
// Test with "priya@example.com" and "priya-no-at".

class ValidationError extends Error{
constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateEmail(email){
    if(!email.includes('@')){
        throw new ValidationError("Email must contain @");
    }
    return "Valid Email";
}

try {
    console.log(validateEmail("priya@example.com")); //Valid Email

} catch (err) {

    if (err instanceof ValidationError) {
        console.log("Validation Error:", err.message);
    } else {
        console.log("Other Error:", err.message);
    }
}
try {
    console.log(validateEmail("priya-no-at")); //Validation Error: Email must contain @

} catch (err) {

    if (err instanceof ValidationError) {
        console.log("Validation Error:", err.message);
    } else {
        console.log("Other Error:", err.message);
    }
}

// Bonus Two-File Module Setup
// Create mathUtils.js exporting (named): PI, add(a, b), multiply(a, b).
// Create mathUtils.js exporting (default): a function formatPrice(n) that returns "₹<n>".
// Create app.js that imports all of them and uses each.
// Don't forget <script type="module" src="app.js"></script> in HTML.
//Done check app.js and mathUtils.js
