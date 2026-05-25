// Topic 1 Sync vs Async
// SYNCHRONOUS — top to bottom, no surprises
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3
// ASYNCHRONOUS — setTimeout schedules; doesn't pause
console.log("1");
setTimeout(() => console.log("2"), 0); // scheduled — runs LATER
console.log("3");
// Output: 1, 3, 2
//
// Even with delay 0! "2" goes through the event loop (Day 8).
// JS keeps running synchronous code first; async callbacks wait their turn.

// Topic 2 Callbacks
// Simulate fetching a user from a server
function fetchUser(id, callback) {
console.log(`Fetching user ${id}...`);
setTimeout(() => {
const user = { id, name: "Priya" };
callback(null, user); // Node-style: (err, data)
}, 1000);
}
fetchUser(7, (err, user) => {
if (err) {
console.error("Failed:", err);
return;
}
console.log("Got user:", user);
});
// Logs:
// Fetching user 7...
// (1 second later)
// Got user: { id: 7, name: "Priya" }

// Topic 3 Callback Hell
// The "pyramid of doom"
fetchUser(7, (err, user) => {
if (err) { console.error(err); return; }
    fetchOrders(user.id, (err, orders) => {
    if (err) { console.error(err); return; }
        fetchItems(orders[0].id, (err, items) => {
        if (err) { console.error(err); return; }
            console.log(items); // finally got there!
        });
    });
});
// Problems:
// 1. Indentation explodes — hard to read
// 2. Error handling repeated at every level
// 3. Hard to add steps without rewriting
// 4. No way to return a value through this — only nest deeper

// Topic 4 Promise States

// Create a promise
const p = new Promise((resolve, reject) => {
// do async work...
setTimeout(() => {
const success = true;
if (success) resolve("Done!"); // → fulfilled
else reject(new Error("Oops")); // → rejected
}, 1000);
});
// p is now PENDING. After 1s, it settles.
// Real-world: wrapping an async API
function delay(ms) {
return new Promise((resolve) => {
setTimeout(resolve, ms); // resolve with no value
});
}
delay(500).then(() => console.log("half a second passed"))

// Topic 5 .then / .catch / .finally

function fetchUser(id) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (id < 0) reject(new Error("Bad id"));
        else resolve({ id, name: "Priya" });
            }, 500);
    });
}
// Chain — flat, not nested
fetchUser(7)
    .then((user) => {
    console.log("got user:", user);
    return user.id; // value passed to next .then
    })
    .then((id) => {
    return fetchUser(id + 1); // returning a Promise — chain awaits it
    })
    .then((nextUser) => {
    console.log("next user:", nextUser);
    })
    .catch((err) => {
    console.error("any failure caught here:", err.message);
    })
    .finally(() => {
    console.log("done — runs whether success or fail");
    });

// Topic 6 Promise Combinators 

const p1 = fetch("/user");
const p2 = fetch("/orders");
const p3 = fetch("/items");

// 1. all — wait for everything; fail if any fails
Promise.all([p1, p2, p3])
    .then(([user, orders, items]) => console.log("all done"))
    .catch((err) => console.error("at least one failed:", err));

// 2. allSettled — wait for everything, never throws
Promise.allSettled([p1, p2, p3])
    .then((results) => {
    results.forEach((r) => {
    if (r.status === "fulfilled") console.log("ok:", r.value);
    else console.log("fail:", r.reason);
    });
    });

// 3. race — first to settle wins (success OR fail)
Promise.race([p1, delay(5000)]) // timeout pattern
    .then((winner) => console.log("first done:", winner));

// 4. any — first to FULFILL wins; all-reject = AggregateError
Promise.any([p1, p2, p3])
    .then((firstSuccess) => console.log("got one:", firstSuccess))
    .catch((err) => console.error("everyone failed"));

// Topic 7 Promise.resolve / .reject  

// Already-fulfilled promise
const cached = Promise.resolve({ id: 1, name: "Priya" });
cached.then((u) => console.log(u)); // logs the cached value

// Already-rejected promise
const failed = Promise.reject(new Error("nope"));
failed.catch((e) => console.log("caught:", e.message));

// Common pattern: cache or fetch
function getUser(id, cache) {
    if (cache[id]) return Promise.resolve(cache[id]); // instant
        return fetchUser(id); // real async
}

// Caller doesn't care which path — both return a Promise
getUser(7, {}).then(console.log);
