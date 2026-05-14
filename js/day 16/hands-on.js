/*Task 1 Inspect a Prototype
Create const arr = [1, 2, 3];
Use Object.getPrototypeOf(arr) and log it. What is it?
Now log Object.getPrototypeOf(Object.getPrototypeOf(arr)) . What is it?
And once more — log the next step. What value ends the chain?
In a comment, draw the chain.*/

const arr = [1, 2, 3];

console.log(Object.getPrototypeOf(arr));

console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)));

console.log(Object.getPrototypeOf(Object.prototype));

/*Task 2 Build with Object.create
Create an object vehicle with method start() { console.log(`${this.name} starting`); }
Use Object.create(vehicle) to make car and set car.name = "Tata Nexon" .
Make bike the same way with name = "Royal Enfield" .
Call start() on both.
Use hasOwnProperty and in to confirm name is own and start is inherited*/

const vehicle = {

    start() { 
        console.log(`${this.name} starting`); }
}

const car = Object.create(vehicle);
car.name = "Tata Nexon" ;

const bike = Object.create(vehicle);
bike.name = "Royal Enfield" ;

console.log(car.start()); // Tata Nexon Starting
console.log(bike.start()); // Royal Enfield starting

console.log(car.hasOwnProperty('name')); //true
console.log(car.hasOwnProperty('start')); //false

console.log(bike.hasOwnProperty('name'));
console.log(bike.hasOwnProperty('start'));

console.log( "name" in car);
console.log( "start" in car);

console.log( "name" in bike);
console.log( "start" in bike);


/*Task 3 Constructor Function Inheritance
Build a Person(name) constructor that sets this.name = name .
Add Person.prototype.greet = function () { console.log("Hi, I'm " + this.name); } .
Build a Student(name, school) constructor that calls Person.call(this, name) and sets
this.school = school .
Link Student.prototype to inherit from Person.prototype using Object.create .
Add Student.prototype.study = function () { console.log(this.name + " studies at " +
this.school); } .
Create a new Student("Riya", "IIT Delhi") and call both greet and study */
class Person{
Person(name) {
    this.name = name ;
}
}

Person.prototype.greet = function () { console.log("Hi, I'm " + this.name); } 

class Student {
Student(name, school) {
    Person.call(this, name);
    this.school = school ;
}
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () { console.log(this.name + " studies at " + this.school); } 
// new Student("Riya", "IIT Delhi")
Student.name = "Riya";
Student.school = "IIT Delhi";