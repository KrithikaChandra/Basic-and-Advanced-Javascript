/*. Use Object.create to build a 3-level chain: tool → vehicle → car . Each level adds one method.
Confirm a car instance can call all three methods.*/

const tool = {

    hello() { 
        console.log("Hello from Tool"); }
}

const vehicle = Object.create(tool);

vehicle.start = function () {
console.log(`"Hello from vehicle"`);
};


const car = Object.create(vehicle);

car.power = function () {
console.log(`"Hello from car"`);
};

car.power(); //Hello from car
car.start(); //Hello from vehicle
car.hello(); //Hello from Tool


/*2. Build a Shape(name) constructor with a describe() method on the prototype. Then build
Circle(name, radius) that inherits from Shape and adds an area() method. Test with a Circle of
name "C1" and radius 5.*/

class Shape{
    Shape(name){
        describe()
    }
}