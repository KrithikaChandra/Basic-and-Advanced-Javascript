/*1.Take a deeply nested object (4 levels) and write a single immutable update that changes a leaf value.
 Verify the unchanged branches share references with the original (===).*/

const user = {
  id: 1,

  profile: {
    name: "Krithika",

    address: {
      city: "Thrissur",

      location: {
        pin: 680001
      }
    }
  }
};


// Immutable update
const updatedUser = {

  ...user,

  profile: {

    ...user.profile,

    address: {

      ...user.profile.address,

      location: {

        ...user.profile.address.location,

        pin: 680020
      }
    }
  }
};

console.log("Updated User:");
console.log(updatedUser);


// Verify references
console.log("\nReference Checks:");

console.log(
  user.profile.address.location ===
  updatedUser.profile.address.location
);
// false

console.log(
  user.profile.address ===
  updatedUser.profile.address
);
// false

console.log(
  user.id === updatedUser.id
);
// true

/* 2. Implement deepFreeze(obj) from scratch. 
Test it with a 3-level nested object.*/

function deepFreeze(obj) {

  Object.freeze(obj);

  for (const key in obj) {

    const value = obj[key];

    if (
      value !== null &&
      typeof value === "object" &&
      !Object.isFrozen(value)
    ) {

      deepFreeze(value);
    }
  }
  return obj;
}

const settings = {

  theme: {

    dark: true,

    colors: {
      primary: "blue"
    }
  }
};

deepFreeze(settings);

// Attempt modifications
settings.theme.dark = false;

settings.theme.colors.primary = "red";


console.log("\nDeep Freeze Result:");

console.log(settings);


//3. Read MDN's structuredClone page and list 3 things it handles that JSON-clone does not.

/* Three things structuredClone handles that JSON clone does not:
1. Circular references
2. Map and Set
3. Date objects without converting to strings*/


// 4. Write a pick(obj, keys) helper that returns a new object with only the listed keys. Use destructuring + computed keys.

function pick(obj, keys) {

  return keys.reduce((acc, key) => {

    // Destructuring with computed keys
    const { [key]: value } = obj;

    if (value !== undefined) {

      acc[key] = value;
    }

    return acc;

  }, {});
}


const employee = {

  name: "Riya",

  age: 24,

  role: "Developer",

  city: "Delhi"
};


const result = pick(employee, ["name", "role"]);


console.log("\nPicked Object:");

console.log(result);