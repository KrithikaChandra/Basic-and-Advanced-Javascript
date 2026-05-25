// Practice tasks before next class · Advanced Day 7

// 1.Convert ALL the .then chains from yesterday's homework into async/await with try/catch.

function fetchData(id) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = Math.random() > 0.5;

      if (success) {

        resolve(`Data fetched for ID: ${id}`);

      } else {

        reject(`Failed to fetch data for ID: ${id}`);
      }

    }, 1000);

  });
}


// Convert .then chain to async/await
async function fetchAllData() {

  try {

    const result1 = await fetchData(1);

    console.log(result1);


    const result2 = await fetchData(2);

    console.log(result2);


    const result3 = await fetchData(3);

    console.log(result3);


    console.log("All requests completed successfully");

  } catch (error) {

    console.log("Error occurred:", error);
  }
}

fetchAllData();

// 2.Write a fetchAllUsers(ids) function that takes an array of IDs and returns an array of users in PARALLEL using Promise.all + map. Time it against a sequential version.

function fetchUser(id) {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        id,
        name: `User ${id}`
      });

    }, 1000);

  });
}

async function fetchAllUsers(ids) {

  const promises = ids.map(id => fetchUser(id));

  return Promise.all(promises);
}

async function fetchSequential(ids) {

  const users = [];

  for (const id of ids) {

    const user = await fetchUser(id);

    users.push(user);
  }

  return users;
}
console.time("parallel");

fetchAllUsers([1, 2, 3]).then(users => {

  console.log(users);

  console.timeEnd("parallel");
});


console.time("sequential");

fetchSequential([1, 2, 3]).then(users => {

  console.log(users);

  console.timeEnd("sequential");
});


// 3.Write a withTimeout(promise, ms) helper that returns a Promise that rejects with "timeout" if the original doesn't settle in ms. Use Promise.race internally.

function withTimeout(promise, ms) {

  const timeoutPromise = new Promise((_, reject) => {

    setTimeout(() => {

      reject("timeout");

    }, ms);
  });

  return Promise.race([
    promise,
    timeoutPromise
  ]);
}

//4.Write an async function that loops with for...of over [300, 100, 200] and waits each amount in ms, logging when each finishes. Confirm the order is the input order.


function wait(ms) {

  return new Promise((resolve) => {

    setTimeout(resolve, ms);
  });
}


async function runTimers() {

  const times = [300, 100, 200];

  for (const time of times) {

    await wait(time);

    console.log(`${time}ms finished`);
  }
}


runTimers();