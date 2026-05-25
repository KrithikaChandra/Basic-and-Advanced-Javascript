/*Task 3 Block the Loop
Write a blockFor(ms) that busy-waits for ms milliseconds (use a while with Date.now()).
Schedule a setTimeout(() => console.log("timer"), 100).
Immediately call blockFor(2000) then console.log("after block").
Note the timer doesn't fire until well after 100ms.*/

function blockFor(ms) {
    const start = Date.now();

    while (Date.now() - start < ms) {}
}

setTimeout(() => {
    console.log("timer");
}, 100);

blockFor(2000);

console.log("after block");


/*Bonus Microtask Storm
Write a function that schedules 5 setTimeout(fn, 0) calls.
Inside ONE of the timers, schedule 3 Promise.resolve().then(...).
Predict the output. Run. Verify.
In a comment, explain how microtasks "starve" macrotasks if abused.*/

function Starve() {

    for (let i = 1; i <= 5; i++) {

        setTimeout(() => {

            console.log(`Timer ${i}`);

            if (i === 3) {

                Promise.resolve().then(() => {
                    console.log("Promise 1");
                });

                Promise.resolve().then(() => {
                    console.log("Promise 2");
                });

                Promise.resolve().then(() => {
                    console.log("Promise 3");
                });

            }

        }, 0);
    }
}

Starve();