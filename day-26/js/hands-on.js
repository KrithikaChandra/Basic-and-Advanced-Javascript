/*Task 1 Tiny EventEmitter
Build createEmitter() returning { on, off, emit }.
Test: register two listeners on event "hello". Emit it. Both should fire.
Then off one listener. Emit again. Only one fires.*/

function createEmitter() {
  const events = {};

  return {
    on(event, listener) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(listener);
    },

    off(event, listener) {
      if (!events[event]) return;

      events[event] = events[event].filter(
        (fn) => fn !== listener
      );
    },

    emit(event, ...args) {
      if (!events[event]) return;

      events[event].forEach((listener) =>
        listener(...args)
      );
    },
  };
}
const emitter = createEmitter();

function listener1(msg) {
  console.log("Listener 1:", msg);
}

function listener2(msg) {
  console.log("Listener 2:", msg);
}

emitter.on("hello", listener1);
emitter.on("hello", listener2);

console.log("First emit:");
emitter.emit("hello", "Hi!");

emitter.off("hello", listener1);

console.log("Second emit:");
emitter.emit("hello", "Hello again!");

/*Task 2 User Factory
Write a createUser(name, role) factory. Default role to "user".
The returned object has name, role, and a method canEdit() that returns true only if role === "admin".
Test with two users — one default, one admin.*/


function createUser(name, role = "user") {
  return {
    name,
    role,

    canEdit() {
      return this.role === "admin";
    },
  };
}
const user1 = createUser("Krithika");
const user2 = createUser("John", "admin");

console.log(user1);
console.log(user1.canEdit());

console.log(user2);
console.log(user2.canEdit());


function createCache() {
  const store = new Map();

  return {
    set(key, value) {
      store.set(key, value);
    },

    get(key) {
      return store.get(key);
    },

    has(key) {
      return store.has(key);
    },

    size() {
      return store.size;
    },
  };
}

const cache1 = createCache();
const cache2 = createCache();

cache1.set("name", "Krithika");

console.log(cache1.get("name"));
console.log(cache2.get("name"));

console.log(cache1.size());
console.log(cache2.size());

/*Task 3 Module-Singleton Cache
Build a createCache() factory that returns { get, set, has, size } with private Map storage.
Show that two separate calls give TWO independent caches.
Then show how exporting default createCache() from a module makes ONE shared cache.*/


function createCache() {
  const store = new Map();

  return {
    set(key, value) {
      store.set(key, value);
    },

    get(key) {
      return store.get(key);
    },

    has(key) {
      return store.has(key);
    },

    size() {
      return store.size;
    },
  };
}

export default createCache();

/*Bonus Reactive Counter with Proxy
Build reactive(obj, onChange) that wraps obj in a Proxy and calls onChange(prop, value) on every set.
Wrap { count: 0 }. Every state.count = X should log "count → X".
Try setting a non-existent property — confirm the trap fires for that too.*/

function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;

      onChange(prop, value);

      return true;
    },
  });
}

const state = reactive(
  { count: 0 },
  (prop, value) => {
    console.log(`${prop} → ${value}`);
  }
);

state.count = 1;
state.count = 2;
state.count = 3;

state.username = "Krithika";