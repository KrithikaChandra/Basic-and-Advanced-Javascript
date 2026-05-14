const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);                   
console.log(fruits[2]);                   
console.log(fruits.length);               
console.log(fruits[fruits.length - 1]);  

fruits[1] = "cherry";
console.log(fruits);                      

console.log(fruits[-1]);                 
console.log(fruits.at(-1));              


const cart = ["apple", "banana"];

cart.push("mango");        
cart.pop();                
cart.unshift("orange");    
cart.shift();

const items = ["a", "b", "c", "d"];
items.splice(1, 2);        
console.log(items);        
const more = ["a", "b", "c"];
more.splice(1, 0, "X", "Y");  
console.log(more);             


const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));      
console.log(arr.concat([6, 7]));   
console.log(arr.join("-"));        
console.log(arr.includes(3));      
console.log(arr.indexOf(4));       
console.log(arr);   


const numbers1 = [1, 2, 3, 4];

numbers.forEach(n => console.log(n * 2));

const doubled = numbers.map(n => n * 2);
console.log(doubled);     
console.log(numbers);     

const prices = [100, 200, 300];
const withGst = prices.map(p => p * 1.18);
console.log(withGst);      
[1, 2, 3].forEach(n => console.log(n * 2));

console.log([1, 2, 3].map(n => n * 2))

console.log([100, 200, 300].map(p => p * 1.18));

const scores = [88, 42, 75, 60, 91, 39];


//topic 5 
const passing = scores.filter(s => s >= 60);
console.log(passing);                     

// find — first failing score
const firstFail = scores.find(s => s < 60);
console.log(firstFail);               

// some — any failures?
console.log(scores.some(s => s < 60));    

// every — all passing?
console.log(scores.every(s => s >= 60));   

[88, 42, 75, 60, 91].filter(s => s >= 60)
[88, 42, 75, 60].find(s => s < 60)
[88, 42, 75].every(s => s >= 60)

//Topic 6 Reduce
const numbers = [1, 2, 3, 4, 5];

// Sum
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log(total); 

// Step by step:
// start: acc = 0
// 1st:   acc = 0 + 1 = 1
// 2nd:   acc = 1 + 2 = 3
// 3rd:   acc = 3 + 3 = 6
// 4th:   acc = 6 + 4 = 10
// 5th:   acc = 10 + 5 = 15

// Max value
const max = numbers.reduce((a, n) => n > a ? n : a, -Infinity);
console.log(max); 
[10, 20, 30].reduce((a, n) => a + n, 0)

//Topic 7 Spread Operator
const a = [1, 2, 3];
const b = [4, 5, 6];

const aCopy = [...a];
console.log(aCopy);          

const merged = [...a, ...b];
console.log(merged);         

const sandwiched = [...a, 99, ...b];
console.log(sandwiched);     

console.log(Math.max(...a));   

[...[1, 2, 3], ...[4, 5, 6]]
Math.max(...[3, 1, 4, 1, 5])