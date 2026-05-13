// Given an array of names ["Priya", "Aarav", "Riya"], use map to make a new array of greetings: "Hello, Priya", etc.
const names = ["Priya", "Aarav", "Riya"]
const newNames = names.map(n => " Hello " +n)
console.log(newNames);

// Filter an array of numbers to only the even ones, then use reduce to sum them.
const numbers = [12 , 13, 14, 15, 16];
const evenSum = numbers.filter(n=>n%2==0)
                       .reduce((sum,n)=>sum +n,0);
console.log(evenSum);

// Given [3, 1, 4, 1, 5, 9, 2, 6], find the max using both Math.max(...arr) and reduce.
const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];
const usingMathMax = Math.max(...numbers2);
console.log("Using Math.max: "+usingMathMax);
const usingReduce = numbers2.reduce((max, curr) => 
  curr > max ? curr : max
);
console.log("Using reduce: "+ usingReduce);

// Take any array and write a function that returns its average (sum / length).
const numbers3 = [12, 13, 17, 19];
function sum(numbers){
    const average = (numbers.reduce((sum,n)=> sum + n , 0))/numbers.length;
    console.log(average);
}
sum(numbers3);
