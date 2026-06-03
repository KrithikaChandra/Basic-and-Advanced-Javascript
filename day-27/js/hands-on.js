/*Task 1 Implement debounce
Write debounce(fn, delay) from scratch.
Use it on a fake search: every "keystroke" calls handleSearch(query).
Simulate 5 keystrokes with setTimeout 50ms apart, then a 500ms gap, then 2 more.
Confirm handleSearch only fires twice — once after the first burst, once after the second.*/

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function handleSearch(query) {
  console.log("Searching:", query);
}

const debouncedSearch = debounce(handleSearch, 200);

// First burst: 5 keystrokes
["h", "he", "hel", "hell", "hello"].forEach((query, index) => {
  setTimeout(() => {
    debouncedSearch(query);
  }, index * 50);
});

// Second burst after 500ms gap
setTimeout(() => debouncedSearch("hello "), 700);
setTimeout(() => debouncedSearch("hello world"), 750);



/*Task 2 Implement throttle
Write throttle(fn, delay) from scratch.
Use it on a "scroll" simulation: call the throttled function 10 times in a tight loop.
Confirm the function only fires once (or twice, depending on timing).*/

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
function onScroll() {
  console.log("Scroll handled");
}

const throttledScroll = throttle(onScroll, 1000);

for (let i = 0; i < 10; i++) {
  throttledScroll();
}

const throttledScroll = throttle(onScroll, 200);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    throttledScroll();
  }, i * 50);
}


/*Task 3 Spot the Memory Leaks
Read these snippets, label each as leak/safe, and explain.
(a) setInterval(updateClock, 1000) inside a SPA component that unmounts.
(b) const handler = () => doStuff(); btn.addEventListener("click", handler); then btn.remove();
(c) function () { msg = "hello"; } (no let/const).
(d) useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []).*/

setInterval(updateClock, 1000);

// Fix
// a
const id = setInterval(updateClock, 1000);

clearInterval(id);

// b
const handler = () => doStuff();

btn.addEventListener("click", handler);

btn.remove();

/*Bonus Sanitise User Input
Write a safeText(html) that takes an HTML string and returns plain text only (strips tags).
Test with '<img src=x onerror="alert(1)"> hello'.
Insert the result into an element with textContent. Confirm no execution.*/

// <img src=x onerror="alert(1)"> hello

function safeText(html) {
  const temp = document.createElement("div");

  temp.innerHTML = html;

  return temp.textContent || "";
}

const input =
  '<img src=x onerror="alert(1)"> hello';

const result = safeText(input);

console.log(result);

const output = document.getElementById("output");

output.textContent = safeText(
  '<img src=x onerror="alert(1)"> hello'
);