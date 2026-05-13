// Day 4 - Control Flow
// Homework

// Conditional
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Switch
let day = "Wednesday";
switch(day) {
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

// Ternary
let age = 17;
console.log(age >= 18 ? "Can vote" : "Cannot vote");
