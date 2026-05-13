/*Task 1 Multiplication Table
Use a for loop to print the multiplication table of 7 from 1 to 10.
Format: 7 x 1 = 7, 7 x 2 = 14, ..., 7 x 10 = 70.
Use template literals (backticks) for cleaner string formatting.
Bonus: print only the EVEN multiples of 7 (use continue or modify the step).*/
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`)};
// Bonus
for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        continue;
    }
    console.log(`7 x ${i} = ${7 * i}`);
}
/*Task 2 Sum with while
Use a while loop to calculate the sum of all numbers from 1 to 100.
Start with let sum = 0; and let i = 1;.
After the loop, log the final sum.
Bonus: change the loop to sum only ODD numbers from 1 to 100.*/
let sum = 0;
let i = 1;
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log("Total Sum =", sum);

// Bonus
let oddSum = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {
        oddSum += j;
    }
    j++;
}

console.log("Odd Sum =", oddSum);

/*Task 3 for...of with Names
Declare an array: const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
Use for...of to log each name.
Then, in a SECOND loop, count how many names are longer than 4 characters and log the count.
Bonus: use for...of on the string "Jaipur" to log each character.*/
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

for (const name of names) {
    console.log(name);
}
let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}
console.log("Names longer than 4 letters:", count);

// Bonus 
for (const letter of "Jaipur") {
    console.log(letter);
}

/*Bonus Object Inspector with for...in
Declare an object: const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
Use for...in to log every key and its value in the format key: value.
Bonus: count how many properties the object has and log the count.*/
const student = {
    name: "Anaya",
    age: 21,
    city: "Jaipur",
    course: "B.Tech"
};

// Print keys and values
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

let propertyCount = 0;
for (const key in student) {
    propertyCount++;
}

console.log("Total properties:", propertyCount);
