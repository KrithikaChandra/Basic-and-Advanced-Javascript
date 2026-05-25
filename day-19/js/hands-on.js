// Task 1 Convert .then to async/await
// Take this chain: fetchUser(7).then(u => fetchOrders(u.id)).then(orders => console.log(orders.length)).catch(e => console.error(e)).
// Mock fetchUser and fetchOrders with setTimeout that resolve in 300ms.
// Rewrite the chain as a single async function showOrders(id) using await and try/catch.
// Call it with showOrders(7).

function fetchUser(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id, name : " Priya"})
        },300)
    })
}

function fetchOrders(id){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve([
                {id :1},
                {id :2},
                {id :3}
            ])
        },300)
    })
}

async function showOrders(id) {
    try{
        const u = await fetchUser(id);
        const o = await fetchOrders(u.id);
        console.log(o.length);
    }
     catch (e) {
        console.error(e);
    }
}

showOrders(7);


/* Task 2 Sequential vs Parallel Timing
 Take a fetchPrice(id) that takes 500ms to resolve to { id, price: 100 }.
 Write slow() that fetches 3 products with separate awaits. Time it.
 Write fast() that uses Promise.all. Time it.
 Confirm slow ≈ 1500ms and fast ≈ 500ms. */

function fetchPrice(id){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({id, price: 100})
        })
    })
}

async function slow(){
 const t0 = Date.now();
  const a = await fetchPrice(1);     // wait 1s
  const b = await fetchPrice(2);     // then wait 1s more
  const c = await fetchPrice(3);     // then wait 1s more
  console.log(`Took ${Date.now() - t0}ms`);   // ~3000ms
}

async function fast(){
  const t0 = Date.now();
  const [a, b, c] = await Promise.all([   // all three start IMMEDIATELY
    fetchPrice(1),
    fetchPrice(2),
    fetchPrice(3),
  ]);
  console.log(`Took ${Date.now() - t0}ms`);   // ~1000ms
}

slow();
fast();

/*Task 3 Fix the forEach Trap
Take an array const ids = [1, 2, 3] and a fetchPrice(id) (500ms each, returns { id, price: 100 }).
Try to write a function that uses ids.forEach(async (id) => ...) to log each price. Time it.
Note that the function returns BEFORE any price logs.
Fix it two ways: (1) for...of, (2) Promise.all + map.*/

const ids = [1,2,3];

function fetchPrice(id){

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve({id, price: 100})
        })
    },500)
}

async function bug(){
 console.log("start bug");
    ids.forEach(async (id) =>{
        const p = await fetchPrice(id);
        console.log("got",p);
        console.log("Price" ,p.price);
    });
 console.log("end bug");
}

async function forOfFix(){
    console.log("start forOf");
    for(const id of ids) {
        const p = await fetchPrice(id);
        console.log("got",p);
        console.log("Price" ,p.price);
    }
 console.log("end forOf");
}

async function parallel() {

  console.log("start of PromiseAll");
  const results = await Promise.all(
    ids.map((id) => fetchPrice(id)),    // each returns a Promise; map collects them
  );
  results.forEach((p) => console.log("got of PromiseAll", p.price));
  console.log("end");    
    
}

bug();

forOfFix();

parallel();


/*Bonus Retry with async/await
Write retry(fn, attempts) that calls async fn() and retries up to attempts times if it rejects.
After all attempts fail, throw the last error.
Test with a flaky() function that randomly resolves/rejects.*/

async function retry(fn, attempts) {
  let lastError;

  for (let i = 1; i <= attempts; i++) {
    try {
      console.log(`Attempt ${i}`);
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Failed attempt ${i}: ${error.message}`);
    }
  }

  throw lastError;
}

async function flaky() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve("Success!");
      } else {
        reject(new Error("Random failure"));
      }
    }, 500);
  });
}

(async () => {
  try {
    const result = await retry(flaky, 5);
    console.log("Final Result:", result);
  } catch (error) {
    console.log("All attempts failed:", error.message);
  }
})();