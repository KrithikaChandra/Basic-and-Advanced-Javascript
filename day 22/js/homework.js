// 1.Build a "tag counter": given an array of posts each with a .tags array, return a Map of tag → count. Use a Map (not an Object).

const posts = [
    {id : 1 , tags: ['js', 'react']},
    {id : 2 , tags: ['js', 'node']},
    {id : 3 , tags: ['node', 'css']},
    {id : 4 , tags: ['js', 'react']},
];

//function to count tags
function countTags(posts){

    const tagCount = new Map();

    for(const post of posts){
        for(const tag of post.tags){
            tagCount.set(tag, (tagCount.get(tag)||0) +1)
        }
    }
    return tagCount;
}

const result = countTags(posts);

console.log(result);

//2. Build a union(a, b), intersection(a, b), difference(a, b) set of helpers from scratch using Set + spread.

const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const union = new Set([...a,...b]);
console.log([...union]);
console.log(union);

const intersection = new Set([...a].filter((x) => b.has(x)));
console.log([...intersection]);

const difference = new Set([...a].filter((x)=> !b.has(x)));
console.log(difference);


// 3.Convert a Map of { name → age } to an array of [name, age] pairs, sorted by age. Use destructuring.

// Create a Map
const users = new Map([
  ["Anu", 24],
  ["Rahul", 30],
  ["Meera", 21],
  ["Vikram", 27],
]);

// Convert Map to array and sort by age
const sortedUsers = [...users].sort(
  ([, ageA], [, ageB]) => ageA - ageB
);

console.log(sortedUsers);

// 4. Write a small DOM event tracker using WeakMap that stores click counts per button. Bonus: explain in a comment why WeakMap is the right choice (vs a plain Map).

const clickTracker = new WeakMap();

const button1 = { id: "btn1" };
const button2 = { id: "btn2" };

function trackClick(button) {

  // Get current count or start from 0
  const currentCount = clickTracker.get(button) || 0;

  // Update count
  clickTracker.set(button, currentCount + 1);

  console.log(
    `${button.id} clicked ${clickTracker.get(button)} times`
  );
}

trackClick(button1);
trackClick(button1);
trackClick(button2);
trackClick(button1);