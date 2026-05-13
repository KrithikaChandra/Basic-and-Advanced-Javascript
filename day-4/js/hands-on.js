/*Task 1 Grading System
Declare a const marks = 72;.
Use if / else if / else to log a grade based on these ranges:
90+ → "A", 75–89 → "B", 60–74 → "C", below 60 → "F".
Test by changing marks to 95, 50, and 75 — confirm each prints the right grade.
Bonus: add a check at the top — if marks is negative or above 100, log "Invalid marks" and stop.*/
function getGrade(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
    return;
  }

  if (marks >= 90) {
    console.log("A");
  } else if (marks >= 75) {
    console.log("B");
  } else if (marks >= 60) {
    console.log("C");
  } else {
    console.log("F");
  }
}

// Tests
getGrade(72); // C
getGrade(95); // A
getGrade(50); // F
getGrade(75); // B

/*Task 2 Day Type with switch
Declare const day = "Wednesday";.
Write a switch statement that logs:
"Weekday" for Monday–Friday
"Weekend" for Saturday and Sunday
"Invalid day" for anything else
Use intentional fall-through to group the weekday cases — don't repeat code.
Test with: "Monday", "Saturday", "Holiday".*/
function checkDay(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Weekday");
      break;

    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;

    default:
      console.log("Invalid day");
  }
}

// Tests
checkDay("Monday");   // Weekday
checkDay("Saturday"); // Weekend
checkDay("Holiday");  // Invalid day

/*Task 3 Truthy / Falsy Detective
Predict whether each value is truthy or falsy, write your guess as a comment, then verify with if (value) { ... } else { ... }:
0, "0", "", " " (single space), null, undefined, NaN, [], {}, "false"
Below your code, write a short comment listing the 6 falsy values from memory.*/
const values = [
  0,        // falsy
  "0",      // truthy
  "",       // falsy
  " ",      // truthy
  null,     // falsy
  undefined,// falsy
  NaN,      // falsy
  [],       // truthy
  {},       // truthy
  "false"   // truthy
];

values.forEach(val => {
  if (val) {
    console.log(val, "→ truthy");
  } else {
    console.log(val, "→ falsy");
  }
});

/*Bonus Guard Clauses Refactor
Copy the nested function below into your file. It logs whether a user can post a comment.
Refactor it using guard clauses — flip each condition and return early.
Test with: a valid user, a user with isBanned = true, and null.
// Nested version — refactor this:
function canComment(user) {
  if (user) {
    if (!user.isBanned) {
      if (user.age >= 13) {
        console.log("Comment allowed");
      }
    }
  }
}*/
function canComment(user) {
  if (!user) {
    console.log("No user");
    return;
  }

  if (user.isBanned) {
    console.log("User is banned");
    return;
  }

  if (user.age < 13) {
    console.log("Too young");
    return;
  }

  console.log("Comment allowed");
}