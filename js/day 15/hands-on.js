/*Task 1 Predict the `this`
Type the following snippet exactly: a user object with name: "Priya" and a method greet()
{ console.log(this.name); } . Then call user.greet() . Then assign const g =
user.greet and call g() .
Predict the output of each call BEFORE running.
Run. Note actual output.
In a comment, explain why the second call lost the this .*/

const user = {
name: "Priya",
greet: function () {
console.log(this.name); // "Priya" ← implicit binding
},
},
const g = user.greet;
g();


/*Task 2 Fix it Three Ways
Take this code: class Timer { constructor() { this.sec = 0; } tick() { this.sec++;
console.log(this.sec); } }
Create const t = new Timer(); then setInterval(t.tick, 1000);
Run it — observe the TypeError.
Now fix it THREE different ways: (1) using .bind , (2) using an arrow wrapper, (3) using a class field
arrow.
Verify all three log 1, 2, 3, ...*/







/*Task 3 call / apply / bind
Define function describe(role, city) { console.log(`${this.name} is a ${role}
from ${city}`); }
Create const u = { name: "Aarav" }
Call describe with u as this using .call , then .apply , then create a bound version with
.bind (pre-fill role to "developer") and call it.Task 3 call / apply / bind
Define function describe(role, city) { console.log(`${this.name} is a ${role}
from ${city}`); }
Create const u = { name: "Aarav" }
Call describe with u as this using .call , then .apply , then create a bound version with
.bind (pre-fill role to "developer") and call it.*/







/*Bonus Arrow vs Regular Method
Build an object team with members: ["Priya", "Aarav", "Riya"] and TWO methods.
Method A — printRegular() uses forEach(function(m) {
console.log(this.members.length, m); }) .
Method B — printArrow() uses forEach((m) => { console.log(this.members.length,
m); }) .
Call both. Note which one breaks and why.*/
