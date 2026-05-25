// Practice tasks before next class · Advanced Day 4


// 1. Use Object.create to build a 3-level chain: tool → vehicle → car . Each level adds one method.
// Confirm a car instance can call all three methods.

// Base object
const tool = {

  useTool() {
    console.log("Using a tool");
  }
};


// vehicle inherits from tool
const vehicle = Object.create(tool);

vehicle.drive = function () {

  console.log("Driving vehicle");
};


// car inherits from vehicle
const car = Object.create(vehicle);

car.honk = function () {

  console.log("Car honks");
};


// Test all methods
car.useTool();

car.drive();

car.honk();

// 2. Build a Shape(name) constructor with a describe() method on the prototype. Then build
// Circle(name, radius) that inherits from Shape and adds an area() method. Test with a Circle of
// name "C1" and radius 5.

// Parent constructor
function Shape(name) {

  this.name = name;
}


// Method on prototype
Shape.prototype.describe = function () {

  console.log(`This shape is ${this.name}`);
};


// Child constructor
function Circle(name, radius) {

  // Call parent constructor
  Shape.call(this, name);

  this.radius = radius;
}


// Inherit from Shape
Circle.prototype = Object.create(Shape.prototype);


// Fix constructor
Circle.prototype.constructor = Circle;


// Circle-specific method
Circle.prototype.area = function () {

  return Math.PI * this.radius * this.radius;
};


// Create instance
const c1 = new Circle("C1", 5);


// Test methods
c1.describe();

console.log(c1.area());

// 3. Take any built-in prototype (e.g. String.prototype ) and inspect it in the console. Find five methods you
// didn't know about. Document one with a code example.


console.log(String.prototype);

// at() , padStart(), padEnd() 
const str = "JavaScript";

console.log(str.at(0));

console.log(str.at(-1));

// 4. Write a function chainOf(obj) that returns an array of every prototype in obj 's chain, ending at the
// prototype just before null .

function chainOf(obj) {

  const chain = [];

  let current = Object.getPrototypeOf(obj);

  while (current !== null) {

    chain.push(current);

    current = Object.getPrototypeOf(current);
  }

  return chain;
}