// Practice tasks before next class · Advanced Day 14


// 1. Take the createEmitter from Task 1 and add a once(event, fn) method that auto-unsubscribes after the first emit.

function createEmitter() {
  const events = {};

  return {
    on(event, fn) {
      if (!events[event]) {
        events[event] = [];
      }
      events[event].push(fn);
    },

    off(event, fn) {
      if (!events[event]) return;

      events[event] = events[event].filter(
        listener => listener !== fn
      );
    },

    once(event, fn) {
      const wrapper = (...args) => {
        fn(...args);
        this.off(event, wrapper);
      };

      this.on(event, wrapper);
    },

    emit(event, ...args) {
      if (!events[event]) return;

      events[event].forEach(listener =>
        listener(...args)
      );
    }
  };
}

const emitter = createEmitter();

emitter.once("hello", msg =>
  console.log("Once:", msg)
);

emitter.emit("hello", "First");
emitter.emit("hello", "Second");

// 2. Build a cacheFactory that returns a cache with a configurable TTL (time-to-live). Each entry expires after its TTL.

function cacheFactory(ttl) {
  const store = new Map();

  return {
    set(key, value) {
      store.set(key, {
        value,
        expiresAt: Date.now() + ttl
      });
    },

    get(key) {
      const item = store.get(key);

      if (!item) return undefined;

      if (Date.now() > item.expiresAt) {
        store.delete(key);
        return undefined;
      }

      return item.value;
    },

    has(key) {
      return this.get(key) !== undefined;
    },

    size() {
      return store.size;
    }
  };
}

const cache = cacheFactory(2000);

cache.set("user", "Krithika");

console.log(cache.get("user"));

// 3. Wrap an array in a Proxy that logs every read/write/delete. Useful for debugging mystery mutations.

function debugArray(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      console.log(`READ -> ${String(prop)}`);
      return target[prop];
    },

    set(target, prop, value) {
      console.log(
        `WRITE -> ${String(prop)} = ${value}`
      );

      target[prop] = value;

      return true;
    },

    deleteProperty(target, prop) {
      console.log(
        `DELETE -> ${String(prop)}`
      );

      delete target[prop];

      return true;
    }
  });
}

const numbers = debugArray([10, 20, 30]);

console.log(numbers[0]);

numbers[1] = 99;

numbers.push(40);

delete numbers[2];