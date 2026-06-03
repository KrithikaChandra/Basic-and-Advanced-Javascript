// Topic 1 Debounce vs Throttle

// DEBOUNCE — only fire after `delay` ms of silence
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// THROTTLE — fire at most once per `delay` ms
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn.apply(this, args);
  };
}

// Usage: search-as-you-type with a 300ms debounce
const handleSearch = debounce((q) => {
  console.log("searching for:", q);   // only fires after user stops typing for 300ms
}, 300);
input.addEventListener("input", (e) => handleSearch(e.target.value));

// Usage: scroll handler throttled to 100ms
const onScroll = throttle(() => {
  console.log("scroll at", window.scrollY);
}, 100);
window.addEventListener("scroll", onScroll);

// Topic 2 Memory Leaks

// 1. Forgotten globals
function leaky() {
  user = { name: "Priya" };       // no var/let/const → globals stick around
}
// FIX: always declare with let/const, use "use strict" or modules

// 2. Forgotten timers / intervals
const id = setInterval(() => doStuff(), 1000);
// If the component owning this never calls clearInterval(id), it leaks.
// FIX: always pair setInterval with clearInterval on cleanup
clearInterval(id);

// 3. Detached DOM via event listeners
const btn = document.querySelector("#save");
btn.addEventListener("click", () => doSave());
btn.remove();
// btn is removed from DOM, but the listener still references it from JS.
// FIX: remove the listener before removing the element, or use AbortController:
const ctrl = new AbortController();
btn.addEventListener("click", handler, { signal: ctrl.signal });
ctrl.abort();   // clean removal

// 4. Closures holding big data
function makeHandler(largeData) {
  return function () {
    return largeData.length;          // closure keeps largeData alive forever
  };
}
// FIX: extract only what you need; don't keep references you don't use.

// Topic 3 Garbage CollectionTracing · Generational

// JS uses a TRACING GC. From roots (globals, call stack, active closures),
//  it walks every reachable object. Anything not reached is collected. 
// Modern engines use generational GC: young generation (short-lived) collected fast; old generation collected slower. 
// You control reachability.


// Topic 4 DevTools Performance TabProfile what actually runs

// Section	What it shows
// Frames	Each browser frame (target: 60fps = 16.7ms/frame)
// Main	Call stack over time — find slow functions
// Network	Requests, their timing
// Memory	Heap size, GC pauses
// JS Heap	Detailed memory profile
// In code — measure a slow function with the User Timing API
performance.mark("compute-start");
expensiveComputation();
performance.mark("compute-end");
performance.measure("compute", "compute-start", "compute-end");

// Shows up in the DevTools Performance recording with the name "compute"
// Useful for tagging your own measurements alongside browser ones

// Topic 5 Security: XSS, eval, SanitisationThe Top Three


// 1. XSS via innerHTML — the all-time #1 vulnerability
const userComment = '<img src=x onerror="alert(\'pwned\')">';

// UNSAFE — runs the attacker's onerror
commentEl.innerHTML = userComment;

// SAFE — treats it as text
commentEl.textContent = userComment;

// If you MUST insert HTML, sanitise (DOMPurify is the standard):
// commentEl.innerHTML = DOMPurify.sanitize(userComment);


// 2. eval() and Function constructor — never use with user input
const userExpr = "alert('exploited')";
// NEVER: eval(userExpr);
// NEVER: new Function(userExpr)();
// They run any code with the privileges of your page.

// 3. Inline JSON / configs from the server

// UNSAFE: pulling a config and using JSON.parse on user-controlled JSON is OK,
// but DON'T pass it through eval. JSON.parse is the safe choice — always.
const safe = JSON.parse(serverJSON);
//  XSS in React — React escapes {value} by default — safe. But dangerouslySetInnerHTML bypasses that. The name is a warning. Always sanitise the input first.


// Topic 6 ESLint & PrettierFree quality boost

// Without lint: ten developers, ten styles, hundreds of bug-prone patterns.
// With ESLint:
//   - catches unused vars, no-undef, prefer-const
//   - catches accessibility issues (jsx-a11y)
//   - catches React hooks rules
//   - catches `==` vs `===` (Day 4)

// Quick start
//   npm i -D eslint prettier eslint-config-prettier
//   npx eslint --init
//   echo '{}' > .prettierrc

// VS Code: install the ESLint and Prettier extensions
// Add to settings.json:
//   "editor.formatOnSave": true,
//   "editor.codeActionsOnSave": { "source.fixAll.eslint": true }