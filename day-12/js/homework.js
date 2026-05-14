// Build safeDivide(a, b) that throws on division by zero. Wrap a few calls in try/catch and log the messages.
// Define a NotFoundError extends Error. Write a getUserById(id) that throws it when id isn't 1, 2, or 3. Branch on it in catch.
// Split a small calculator into two files: calc.js with named exports (add, subtract, multiply, divide) and app.js that imports and uses them.
// Add a default export to calc.js — a calculate(op, a, b) function. Import it as default in app.js.
// Read: javascript.info/try-catch and javascript.info/modules-intro.
// (Bonus) Look ahead to next session: skim javascript.info/var for tomorrow's Advanced opener.
// Exercise 1: safeDivide + try/catch
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Demos — wrap in try/catch and log; expected outcomes:
// safeDivide(10, 2)  → 5
// safeDivide(10, 0)  → catch: e.message === "Division by zero"

// Exercise 2: NotFoundError + getUserById
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

function getUserById(id) {
  if (id === 1 || id === 2 || id === 3) {
    return { id: id, name: "User " + id };
  }
  throw new NotFoundError("No user for id " + id);
}

// Demos — use try/catch; branch with err instanceof NotFoundError:
// getUserById(1)   → { id: 1, name: "User 1" }
// getUserById(99)  → catch: NotFoundError, err.message === "No user for id 99"