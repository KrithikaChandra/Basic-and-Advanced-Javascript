/* Task 1 Inspect a Prototype
Create const arr = [1, 2, 3];
Use Object.getPrototypeOf(arr) and log it. What is it?
Now log Object.getPrototypeOf(Object.getPrototypeOf(arr)) . What is it?
And once more — log the next step. What value ends the chain?
In a comment, draw the chain.*/

const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));
console.log(Object.getPrototypeOf(Object.prototype));
// arr -> Object.Prototype -> end

/*Task 2 Build with Object.create
Create an object vehicle with method start() { console.log(`${this.name} starting`); }
Use Object.create(vehicle) to make car and set car.name = "Tata Nexon" .
Make bike the same way with name = "Royal Enfield" .
Call start() on both.
Use hasOwnProperty and in to confirm name is own and start is inherited.*/

const vehicle = {
    start : function(){
 { console.log(`${this.name} starting`); }    }
}
const car = Object.create(vehicle);
car.name = "Tata Nexon";

const bike = Object.create(vehicle);
bike.name = "Royal Enfield";

car.start();
bike.start();

console.log(car.hasOwnProperty("name"));
console.log(car.hasOwnProperty("start"));
console.log(bike.hasOwnProperty("name"));
console.log(bike.hasOwnProperty("start"));


/*Task 3 Constructor Function Inheritance
Build a Person(name) constructor that sets this.name = name .
Add Person.prototype.greet = function () { console.log("Hi, I'm " + this.name); } . -->
Build a Student(name, school) constructor that calls Person.call(this, name) and sets
this.school = school .
Link Student.prototype to inherit from Person.prototype using Object.create .
Add Student.prototype.study = function () { console.log(this.name + " studies at " +
this.school); } .
Create a new Student("Riya", "IIT Delhi") and call both greet and study .*/

// Parent constructor
function Person(name) {

  this.name = name;
}

// Method on prototype
Person.prototype.greet = function () {

  console.log("Hi, I'm " + this.name);
};


// Child constructor
function Student(name, school) {

  // Call parent constructor
  Person.call(this, name);

  this.school = school;
}


// Inherit from Person.prototype
Student.prototype = Object.create(Person.prototype);


// Fix constructor reference
Student.prototype.constructor = Student;


// Student-specific method
Student.prototype.study = function () {

  console.log(this.name + " studies at " + this.school);
};


// Create student
const student1 = new Student("Riya", "IIT Delhi");


// Call inherited method
student1.greet();


// Call own method
student1.study();

/*Bonus hasOwnProperty vs in
Create const dog = Object.create({ species: "Canis" }); dog.name = "Bruno";
Predict the result of: dog.hasOwnProperty("name") , dog.hasOwnProperty("species") , "name" in
dog , "species" in dog , "toString" in dog .
Run all five. Match against your prediction.
In a comment, write the one-line rule for when to use which*/

// Prototype object
const dog = Object.create({ species: "Canis" });

dog.name = "Bruno";


// Checks
console.log(dog.hasOwnProperty("name"));

console.log(dog.hasOwnProperty("species"));

console.log("name" in dog);

console.log("species" in dog);

console.log("toString" in dog);