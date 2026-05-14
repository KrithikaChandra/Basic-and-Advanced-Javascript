/*Task 1 Type Detective

· Declare 5 variables — one of each type: string, number, boolean, null, and undefined.

· For each variable, use console.log() to print both the value AND its type using typeof.

· Example: console.log(myName, typeof myName) — prints both on one line.

· Try to get typeof to print all 5 different type labels.

Task 2 Coercion Predictor

· Before running any code, write a comment next to each line predicting the output.

· Then run it and see how many you got right.

· Lines to test: console.log("10" + 5) | console.log("10" - 5) | console.log(true + true) | console.log("" + false) |

console.log(null + 1)

· Score yourself: how many did you predict correctly? Share in the chat.

Task 3 String Toolbox

· Create a const called fullName and assign your full name with extra spaces around it — e.g. ' Aarav

Sharma '

· Using string methods, log: (1) the name trimmed, (2) in ALL CAPS, (3) the number of characters after

trimming, (4) whether it includes your first name.

· Bonus: Use .slice() to extract just your first name from the trimmed string.
 */


const name = "John"
const age = 22
const isEmployed = true
const emptyValue = null;      
let notAssigned; 

console.log(name, typeof(name));              
console.log(age, typeof(age));                
console.log(isEmployed, typeof(isEmployed));  
console.log(emptyValue, typeof(emptyValue));  
console.log(notAssigned, typeof(notAssigned));

console.log("10" + 5);     
console.log("10" - 5);    
console.log(true + true);  
console.log("" + false);   
console.log(null + 1);

const fullName = "   Gokulkrishna Vinod   ";

const trimmed = fullName.trim();
console.log(trimmed);

console.log(trimmed.toUpperCase());

console.log(trimmed.length);

console.log(trimmed.includes("Gokulkrishna"));

const firstName = trimmed.slice(0, 12);
console.log(firstName);