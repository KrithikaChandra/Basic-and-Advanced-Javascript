/*Task 1 Cart Manipulation
Start with: const cart = ["bread", "milk", "eggs"];
Use push to add "butter". Then use unshift to add "rice" at the start. Log the cart.
Use pop to remove the last item. Log what was removed and the new cart.
Use splice(1, 1) to remove one item starting at index 1. Log the result.*/

const cart = ["bread", "milk", "eggs"];
//Push to add "Butter"
cart.push("Butter");
//unshift to add rice in first
cart.unshift("rice");
console.log(cart);
//pop the last element
console.log(cart.pop());
console.log(cart);
//splice to remove one item 
console.log(cart.splice(1,1));

/*Task 2 Filter Passing Scores
Declare: const scores = [88, 42, 75, 60, 91, 39, 55, 70];
Use filter to create a new array of scores that are >= 60 (passing). Log it.
Use find to get the FIRST failing score. Log it.
Use every to check if ALL scores are passing. Log the result.
Bonus: use some to check if ANY score is above 90.*/

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const passing = scores.filter(s => s >= 60);
console.log(passing);                     

// find — first failing score
const firstFail = scores.find(s => s < 60);
console.log(firstFail);                    

// every — all passing?
console.log(scores.every(s => s >= 60));

// some — any failures?
console.log(scores.some(s => s > 90));  

/*Task 3 Map Prices with GST
Declare: const prices = [100, 250, 500, 1200, 80];
Use map to create a new array with 18% GST added to each price.
Log both the original and new array — the original should be unchanged.
Bonus: round each value to 2 decimal places using .toFixed(2).*/

const prices = [100, 250, 500, 1200, 80];
const withGst = prices.map(p=> Number(p+ p*0.18).toFixed(2));
console.log(prices);
console.log(withGst);

/*Bonus Reduce to Total
Declare: const expenses = [250, 800, 120, 50, 1500, 75];
Use reduce to calculate the total of all expenses. Log it.
Then use reduce to find the highest single expense. Log it.
Bonus: combine filter + reduce to total only expenses above 100.*/

const expenses = [250, 800, 120, 50, 1500, 75];
const total = expenses.reduce((a,n) => a + n , 0) 
console.log(total);
const highest = expenses.reduce((a,n)=> a>n? a:n,0);
console.log(highest);
const curatedExpenses = expenses.filter(exp=> exp>100).reduce((a,n) => a + n , 0);
console.log(curatedExpenses);

const totalAbove100 = expenses
  .filter(exp => exp > 100)
  .reduce((sum, curr) => sum + curr, 0);

console.log("Total > 100:", totalAbove100);

