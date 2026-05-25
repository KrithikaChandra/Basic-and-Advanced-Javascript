/*Task 1 Sync vs Async Output
Type: console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");
Promise.resolve().then(() => console.log("D"));
Predict the output order BEFORE running.
Run. Note the actual order.
In a comment, explain why D comes before B even though both are "async with delay 0".*/
console.log("A");
 setTimeout(() => 
    console.log("B"), 0); 
    console.log("C");
Promise.resolve().then(() => 
    console.log("D"));
//A C D B // → D (microtask) runs before B (macrotask).


/*Task 2 Promisify a Callback API
Take this callback-style function: function delayLog(msg, ms, cb) { setTimeout(() => {
console.log(msg); cb(null); }, ms); }
Wrap it in a Promise-returning version delayLogPromise(msg, ms) .
Use it to chain three logs: "1" after 300ms, then "2" after 200ms, then "3" after 100ms*/

function delayLog(msg, ms, cb) { 
    setTimeout(() => {
        console.log(msg); 
        cb(null); }, ms); }

//Promisifying
function delayLogPromise(msg, ms) {
    return new Promise((resolve,reject) => {
        delayLog(msg, ms, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
        });
    })
}

delayLogPromise("1",300)
    .then(() => delayLogPromise("2",200))
    .then(() => delayLogPromise("3",100))
    .catch(err => console.log(err));


//Class Work
// Fetch a single post using Promises
function fetchPostWithPromise(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(post => {
      console.log('Post:', post.title);
      console.log('Content:', post.body);
    })
    .catch(error => {
      console.error('Error fetching post:', error.message);
    });
}

fetchPostWithPromise(1);


//Class Work 2
// Fetch user and their posts using Async/Await
async function fetchUserWithPosts(userId) {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userResponse.ok) throw new Error('User not found');
    const user = await userResponse.json();
    
    // Fetch user's posts
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await postsResponse.json();
    
    console.log(`User: ${user.name} (${user.email})`);
    console.log(`Number of posts: ${posts.length}`);
    console.log('First post title:', posts[0]?.title);
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchUserWithPosts(1);

//Class work 3
// Create a new post using Async/Await
async function createNewPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'My New Post',
        body: 'This is the content of my post',
        userId: 1
      })
    });
    
    const newPost = await response.json();
    console.log('Post created with ID:', newPost.id);
    console.log('New post:', newPost);
  } catch (error) {
    console.error('Failed to create post:', error);
  }
}

createNewPost();
 

async function getInfo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const info = await response.json();

    console.log('Data fetched:', info);
  } catch (error) {
    console.error('Failed to get data:', error);
  }
}

getInfo();

// Task 3 Promise.all in Action
// Write a function fetchPrice(item, ms) that returns a Promise resolving to a price object after
// ms milliseconds. Use this data: pen → 50, book → 200, bag → 800 .
// Use Promise.all to fetch all three in parallel.
// Sum the prices and log the total.
// Time the whole thing with Date.now() — confirm it's near the SLOWEST item, not the sum

 function fetchPrice(item, ms) {
const prices = { pen: 50, book: 200, bag: 800 };
return new Promise((resolve) => {
setTimeout(() => resolve({ item, price: prices[item] }), ms);
});
}
const t0 = Date.now();
Promise.all([
fetchPrice("pen", 300),
fetchPrice("book", 500),
fetchPrice("bag", 800),
]).then((results) => {
const total = results.reduce((sum, r) => sum + r.price, 0);
console.log(`Total: ₹${total}`); // ₹1050
console.log(`Took: ${Date.now() - t0}ms`); // ~800ms (slowest), not
1600
});
// Lesson: Promise.all runs them concurrently. Time = max(individual times).


//Bonus Promise.allSettled vs Promise.all
// Take three promises: Promise.resolve("ok1") , Promise.reject(new Error("fail")) ,
// Promise.resolve("ok2") .
// First wrap them in Promise.all — what happens?
// Now wrap them in Promise.allSettled — what happens?
// In a comment, explain when you'd reach for each.


const p1 = Promise.resolve("ok1");
const p2 = Promise.reject(new Error("fail"));
const p3 = Promise.resolve("ok2");
// Promise.all — fail-fast: rejects on first rejection
Promise.all([p1, p2, p3])
.then((all) => console.log("never reached"))
.catch((err) => console.log("all rejected:", err.message)); // "fail"
// Promise.allSettled — never rejects; gives you all outcomes
Promise.allSettled([p1, p2, p3]).then((results) => {
results.forEach((r, i) => {
if (r.status === "fulfilled") console.log(i, "ok:", r.value);
else console.log(i, "fail:", r.reason.message);
});
});
// Use:
// .all → "all-or-nothing" — e.g. parallel queries that depend on each other
// .allSettled → "give me everyone's outcome" — e.g. dashboard widgets, partial failures OK
 

