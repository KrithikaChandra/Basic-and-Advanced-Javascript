// 1. Take an object { first: "Priya", last: "Sharma", city: "Jaipur" } and use template literals to print "Priya Sharma from Jaipur".
const user = {
    first: "Priya",
    last: "Sharma", 
    city: "Jaipur" 
}
console.log(`${user.first} ${user.last} from ${user.city}`);

// 2. Use array destructuring with rest to split [1,2,3,4,5,6] into [head, ...tail]. Log both.
const a =  [1,2,3,4,5,6];
const [head, ...tail] = a;
console.log(head);
console.log(tail);

//Write a function multiply(...nums) using rest and reduce that multiplies any number of arguments.
function multiply(...nums){
    return nums.reduce((acc,n)=> acc*n,1);
}
console.log(multiply(1,2,3,4));
console.log(multiply(5, 10, 20));

// Use object spread to update one property of an object without mutating the original.
const orginal = {
    first: "Priya",
    age : 23,
    last: "Sharma", 
    city: "Jaipur" 
}
const updated = {...orginal, age :24}
console.log(orginal);
console.log(updated);