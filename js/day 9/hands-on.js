/*Task 1 Template Literal Sentence Builder
Declare: const item = "Laptop";, const price = 60000;, const tax = 0.18;.
Use a template literal to build the sentence: "The Laptop costs ₹60000 + ₹10800 GST = ₹70800."
Compute the GST and total inside the template literal — don't pre-compute.
Bonus: include a multiline version that puts each part on its own line.*/
const item = "Laptop";
const price = 60000;
const tax = 0.18;
const statement = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + price*tax}` 
console.log(statement);
const multilineStatement = `The ${item} costs 
₹${price} +
₹${price * tax} GST 
= ₹${price + price*tax}` ;
console.log(multilineStatement);                            

/*Task 2 Array + Object Destructuring
Use this array: const scores = [88, 75, 92, 60, 45];
Destructure the first two values into top and second. Collect the rest into others.
Use this object: const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
Destructure name, rename age to userAge, and pull out city from the nested address.
Log all extracted variables.*/
const scores = [88, 75, 92, 60, 45];
const [topElement , second , ...others] = scores;
console.log(topElement);
console.log(second);
console.log(others);

const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
const {name , age : userAge,address: {city}} = user;
console.log(userAge);
console.log(city);
console.log(name);

/*Task 3 Rest Parameters
Write a function sumAll(...numbers) that returns the total of all numbers passed.
Test with sumAll(1, 2, 3), sumAll(10, 20, 30, 40), sumAll().
Write a function joinNames(separator, ...names) that joins all names using the separator.
Test: joinNames(", ", "Priya", "Aarav", "Riya") should give "Priya, Aarav, Riya".*/

function sumAll(...numbers){
    return numbers.reduce((acc,n)=> acc+n ,0);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());

function joinNames(separator, ...names){
    return names.join(separator);
}
console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

/*Bonus Spread to Merge Settings
Declare: const defaults = { theme: "light", lang: "en", notifications: true };
Declare: const userPrefs = { theme: "dark", fontSize: 16 };
Use object spread to merge them so user preferences override defaults but unchanged defaults remain.
Log the result.
Bonus: write a function applyPrefs(defaults, prefs) that does this for any pair of objects using spread.*/
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };
const newPrefs = {...defaults,...userPrefs};
console.log(newPrefs);

function applyPrefs(defaults, prefs){
    return {...defaults,...prefs};
}
console.log(applyPrefs({theme: "light", lang: "en"}, { theme: "dark", fontSize: 16 }))