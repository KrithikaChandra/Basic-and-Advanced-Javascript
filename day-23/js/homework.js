/*1. Write a generator chunked(arr, size) that yields successive chunks of arr of length size.
 E.g. [...chunked([1,2,3,4,5], 2)] → [[1,2], [3,4], [5]].*/

function* chunked(arr, size) {
  for (let i = 0; i < arr.length; i += size) {
    yield arr.slice(i, i + size);
  }
}

console.log([...chunked([1, 2, 3, 4, 5], 2)]);
// [[1,2],[3,4],[5]]

/*2. Build an infinite generator of primes. Use it with take(primes(), 10) to get the first 10.*/

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function* primes() {
  let n = 2;

  while (true) {
    if (isPrime(n)) yield n;
    n++;
  }
}

console.log(take(primes(), 10));
// [2,3,5,7,11,13,17,19,23,29]

/*3. Write zip(a, b) — a generator that yields pairs from two iterables, stopping when either ends. Test with arrays of different lengths.*/

function* zip(a, b) {
  const itA = a[Symbol.iterator]();
  const itB = b[Symbol.iterator]();

  while (true) {
    const x = itA.next();
    const y = itB.next();

    if (x.done || y.done) return;

    yield [x.value, y.value];
  }
}

console.log([...zip([1, 2, 3], ["a", "b"])]);
// [[1,"a"], [2,"b"]]

/*4. Re-do the Fibonacci homework using a generator and take.*/

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log(take(fibonacci(), 10));
// [0,1,1,2,3,5,8,13,21,34]
