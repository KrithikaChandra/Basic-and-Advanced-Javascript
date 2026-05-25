// 1.Take any 3 of the predict-the-output snippets and re-do them on paper without running. Then run to check.

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
//1 4 3 2 

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C")).then(() => console.log("D"));
queueMicrotask(() => console.log("E"));
console.log("F");
//A F C E B 


console.log("X");
Promise.resolve().then(
  () => console.log("Y")
);
setTimeout(
  () => console.log("Z"), 0
);
console.log("W");
//X W Y Z

// 2.Visit latentflip.com/loupe and paste in console.log("1"); setTimeout(() => console.log("2"), 0); console.log("3"); — watch it run.
// Web Page Blocked

// 3.Build a chunk(array, fn, chunkSize) helper that processes an array in chunks of chunkSize, yielding to the event loop with setTimeout(0) between chunks. Test with a 100k-item array.

function chunk(array, fn, chunkSize) {

    let index = 0;

    function nextChunk() {

        // Process one chunk
        for (
            let i = index;
            i < index + chunkSize && i < array.length;
            i++
        ) {
            fn(array[i]);
        }

        index += chunkSize;

        // Process next chunk later
        if (index < array.length) {
            setTimeout(nextChunk, 0);
        } else {
            console.log("Done");
        }
    }

    nextChunk();
}


// Test with 100k items
const arr = Array.from({ length: 100000 }, (_, i) => i);

chunk(arr, (num) => {
    console.log(num);
}, 1000);



// 4.Write a snippet that proves await is a microtask: schedule an await and a setTimeout(0), predict which runs first.

async function testAwait() {

    console.log("Start");

    setTimeout(() => {
        console.log("setTimeout");
    }, 0);

    await Promise.resolve();

    console.log("after await");
}

testAwait();
