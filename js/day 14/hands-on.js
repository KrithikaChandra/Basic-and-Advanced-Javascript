// Task 1 Build a Counter
// Write a function makeCounter() that returns a function
// create two independent counters with makeCounter() and verify they dont interfere
//  in a comment , explain where the count variables lives between calls.

function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const first = makeCounter();
const second = makeCounter();

console.log(first());
console.log(first());
console.log(first());

console.log(second());
console.log(second());
console.log(second());

/*The 'count' variable lives inside the closure created by makeCounter().
Even after makeCounter() finishes execution, the inner function
still remembers and has access to the 'count' variable. Each counter has independent count variable*/

/* task 2 Fix the var in the Loop Bug
Type this snippet exactly : for (var i = 1 ;i<=3;i++){ setTimeout(() => .console.log((i),100);)}
predict the output . Run it . Note the actual output.
Fix it by changing ONE keyword. Run again , verify it logs 1, 2, 3.
In a comment , explain why var produced the surprising output and let fixes it */
for (var i = 1 ;i<=3;i++){
    setTimeout(() => 
    console.log((i),100) //4, 100 4,100 4,100
)}