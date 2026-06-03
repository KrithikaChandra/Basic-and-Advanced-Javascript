/*Task 1 Pure or Impure?
Take this list of functions: (1) (a, b) => a + b, (2) () => Date.now(), (3) (arr) => arr.sort(), (4) (arr) => [...arr].sort(), (5) (x) => { console.log(x); return x; }.
Mark each as pure or impure. For impure, explain WHY.*/

// (a, b) => a + b // Pure
// () => Date.now()	//Impure	
// (arr) => arr.sort() //Impure	
// (arr) => [...arr].sort()	 //Pure	
// (x) => { console.log(x); return x; } //Impure


/*Task 2 pipe from Scratch
Implement pipe(...fns) that returns a function which, given an input, runs it through each fn left-to-right.
Use it: build small functions addOne, square, negate. Pipe them. Test with 5 (expect -36).*/

function pipe(...fns) {
  return input => fns.reduce((acc, fn) => fn(acc), input);
}

const addOne = x => x + 1;
const square = x => x * x;
const negate = x => -x;

const result = pipe(addOne, square, negate);

console.log(result(5));
// -36

/*Task 3 Curry it
Write a curried volume(l)(w)(h) that returns l * w * h.
Pre-apply with l = 5 to get lengthOf5. Then with w = 3 to get lengthOf5width3. Call with h = 2.
Verify it equals 30.*/

const volume = l => w => h => l * w * h;

const lengthOf5 = volume(5);
const lengthOf5width3 = lengthOf5(3);

console.log(lengthOf5width3(2));
// 30

/*Bonus Real Pipeline
Take an array users = [{name: "priya", age: 25}, {name: "aarav", age: 17}, {name: "riya", age: 30}].
Build a pipeline that: filters age ≥ 18, capitalises names, sorts by age desc, returns just the names.
Use pipe and small pure functions only.*/

const users = [
  { name: "priya", age: 25 },
  { name: "aarav", age: 17 },
  { name: "riya", age: 30 }
];

function pipe(...fns) {
  return input => fns.reduce((acc, fn) => fn(acc), input);
}

const adults = users =>
  users.filter(user => user.age >= 18);

const capitalizeNames = users =>
  users.map(user => ({
    ...user,
    name: user.name[0].toUpperCase() + user.name.slice(1)
  }));

const sortByAgeDesc = users =>
  [...users].sort((a, b) => b.age - a.age);

const namesOnly = users =>
  users.map(user => user.name);

const getNames = pipe(
  adults,
  capitalizeNames,
  sortByAgeDesc,
  namesOnly
);

console.log(getNames(users));
// ["Riya", "Priya"]