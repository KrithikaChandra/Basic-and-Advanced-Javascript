// Topic 1 Single-ThreadedOne stack · One thing at a time

// JS runs on ONE thread — one call stack, one statement at a time. 
// Async work is DELEGATED to the runtime (browser Web APIs / Node libuv). 
// When done, callbacks land on a queue.
// The event loop pulls them when the stack is free.

// Topic 3 What the Event Loop DoesTiny algorithm · Runs forever

// 1	Wait for call stack to be empty
// 2	Drain ALL microtasks (every single one)
// 3	Take ONE macrotask → run it on the stack
// 4	Back to step 1

// Topic 4 setTimeout(0) Mystery — SolvedDay 6 puzzle, finally

console.log("1");                                  // sync
setTimeout(() => console.log("2"), 0);             // macrotask
Promise.resolve().then(() => console.log("3"));    // microtask
console.log("4");                                  // sync

// Output: 1, 4, 3, 2
//
// Step by step:
//   Sync: "1" → "4"                  (call stack drains)
//   Microtasks: "3"                  (drained before any macrotask)
//   Macrotasks: "2"                  (one at a time)
//
// "3" beats "2" because microtasks have priority.
// "2" with delay 0 doesn't mean "now" — it means "queue this as soon as possible
//  as a macrotask, after sync code AND all microtasks are done".


// Topic 5 Microtask vs MacrotaskKnow which is which


// Microtask	Promise.then/.catch/.finally, queueMicrotask, MutationObserver
// Macrotask	setTimeout, setInterval, setImmediate (Node), I/O, UI events, requestAnimationFrame

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));    // chained: another microtask

queueMicrotask(() => console.log("E"));

console.log("F");

// Output: A, F, C, E, D, B
//
// 1. Sync: A, F
// 2. Microtasks (drained completely):
//      C → schedules another microtask (D)
//      E (was queued before C scheduled D, so E runs after C and before D? — depends on order)
//    Actual order: A, F, C, E, D, B
//      .then(C) → microtask 1
//      queueMicrotask(E) → microtask 2
//      C runs, then schedules D
//      E runs (it was queued earlier than D)
//      D runs (queued mid-drain — still drained in this tick)
// 3. Macrotask: B


// Topic 6 Don't Block the LoopDay 1 callback — same call stack

function blocking() {
  const t0 = Date.now();
  while (Date.now() - t0 < 3000) {}    // busy-wait 3 seconds
  console.log("done blocking");
}

setTimeout(() => console.log("timer"), 0);
blocking();
console.log("after block");

// Output:
//   (3-second pause)
//   done blocking
//   after block
//   timer
//
// blocking() holds the call stack busy for 3 seconds.
// During that time, nothing else can run — not even a setTimeout(0).
// The browser tab is FROZEN. Don't write code like this in real apps!

