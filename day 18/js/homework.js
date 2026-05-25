// Practice tasks before next class · Advanced Day 6

/* 1. Write wait(ms) that returns a Promise resolving after ms . Use it: wait(500).then(() =>
wait(500)).then(() => console.log("1s")) .*/

function wait(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
         resolve();
        },ms)
    })
}

wait(500)
.then(() =>
    wait(500))
.then(() =>
     console.log("1s"))


/* 2. Take a fetchData(id) that randomly succeeds or rejects (50/50). Chain three sequential
.then s and end with .catch . Run multiple times to see both paths.*/

function fetchData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve(`Data fetched for ID: ${id}`);
            } else {
                reject(`Failed to fetch data for ID: ${id}`);
            }

        },1000)
    })
}

fetchData(1)

    .then((result1) => {
        console.log(result1);
        return fetchData(2);
    })

    .then((result2) => {
        console.log(result2);
        return fetchData(3);
    })

    .then((result3) => {
        console.log(result3);
        console.log("All requests completed successfully");
    })

    .catch((error) => {
        console.log("Error occured", error);
    });


// 3. Use Promise.race with [fetchUser(7), wait(2000).then(() => Promise.reject(new
// Error("timeout")))] to add a 2-second timeout to a fetch.

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

function fetchUser(id) {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(`User ${id} fetched successfully`);
        }, 3000);

    });
}

Promise.race([

    fetchUser(7),

    wait(2000).then(() =>
        Promise.reject(new Error("timeout"))
    )

])

.then((result) => {
    console.log(result);
})

.catch((error) => {
    console.error(error.message);
});
/* 4. Use Promise.any with three flaky fetches. Demonstrate that it returns the first SUCCESS,
ignoring rejections.*/

function flakyFetch() {
    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        if (success) {
            resolve("Data received");
        } else {
            reject("Network error");
        }

    });
}
const p1 = flakyFetch("/user");
const p2 = flakyFetch("/orders");
const p3 = flakyFetch("/items");

Promise.any([p1,p2,p3])

    .then((firstSuccess) => console.log("got one:", firstSuccess))

    .catch((err) => console.error("everyone failed"));



