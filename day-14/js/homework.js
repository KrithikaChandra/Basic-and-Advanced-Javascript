/*1. Write multiplier(factor) that returns a function multiplying its argument by factor .
Create double = multiplier(2) and triple = multiplier(3) . Verify both work
independently.*/

// Function returning another function
function multiplier(factor) {

  return function(number) {
    return number * factor;
  };
}

// Create specialized functions
const double = multiplier(2);
const triple = multiplier(3);

// Verify independently
console.log(double(5)); // 10
console.log(double(10)); // 20

console.log(triple(5)); // 15
console.log(triple(10)); // 30

/*2. Re-do the var-in-loop bug with a for...of over [10, 20, 30] and setTimeout . Use
let . Predict, then verify.*/

const numbers = [10, 20, 30];

for (let num of numbers) {

  setTimeout(() => {
    console.log(num);
  }, 1000);

}


/*3. Take the bank-account closure and add a transactionCount private variable that increments on
every deposit/withdraw. Add a getTransactionCount() method.*/

function createBankAccount(initialBalance) {

  let balance = initialBalance;

  // Private variable
  let transactionCount = 0;

  return {

    deposit(amount) {
      balance += amount;

      transactionCount++;

      console.log(`Deposited ${amount}`);
    },

    withdraw(amount) {

      if (amount > balance) {
        console.log("Insufficient funds");
        return;
      }

      balance -= amount;

      transactionCount++;

      console.log(`Withdrew ${amount}`);
    },

    getBalance() {
      return balance;
    },

    getTransactionCount() {
      return transactionCount;
    }
  };
}

const account = createBankAccount(1000);

account.deposit(500);

account.withdraw(200);

console.log(account.getBalance());
// 1300

console.log(account.getTransactionCount());
// 2


/*4. Write once(fn) — a closure that takes a function and returns a wrapped version that only runs
the FIRST time it's called. Subsequent calls return the cached first result.*/

function once(fn) {

  let hasRun = false;

  let cachedResult;

  return function(...args) {

    // Run only first time
    if (!hasRun) {

      cachedResult = fn(...args);

      hasRun = true;
    }

    return cachedResult;
  };
}

// Example function
function greet(name) {

  console.log("Function executed");

  return `Hello ${name}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Krithika"));
// Function executed
// Hello Krithika

console.log(greetOnce("Anu"));
// Hello Krithika

console.log(greetOnce("Rahul"));
// Hello Krithika
