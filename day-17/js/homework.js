/*1. Build a Vehicle(brand) class with a start() method. Then build Car(brand, doors) and
Bike(brand) that both extend it. Override start() in Car to call super.start() then log
"Car-specific check". Test both.*/

class Vehicle{

    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log(`${this.brand} is starting`);
    }
}

class Car extends Vehicle{
    constructor(brand,doors){
        super(brand);
        this.doors = doors;
    }
    start(){
        super.start();
        console.log(`Car-specific check`);

    }
}
class Bike extends Vehicle{
    constructor(brand){
        super(brand);
    }
    start(){
        super.start();
    }
}

const c = new Car("Tata", 4);
c.start();

const b = new Bike("RE");
b.start();


/*2. Add a static count to your Counter class that tracks how many counters have been created.
Increment in the constructor.*/

class Counter{

    static count = 0;

    constructor(){
        Counter.count++;
    }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log(Counter.count)

/*3. Build a Temperature class with a private #celsius field and getters for celsius and
fahrenheit . Add a setter for celsius that validates >= -273.15 .*/

class Temperature{
    #celcius;
    constructor(celcius){
        this.#celcius = celcius;
    }
    get tempInCelcius(){
        return this.#celcius;
    }
    get tempInFahrenheit(){
        return (this.#celcius*1.8) + 32;
    }
    set validCelcius(value){
        if(value < -273.15) throw new Error("Invalid temperature");
    }
}

const t = new Temperature(32);
console.log(t.tempInCelcius);
console.log(t.tempInFahrenheit);

t.validCelcius = 32

/*4. Convert your Basic Day 12 ValidationError from try/catch into a proper class extending Error. Test
that instanceof ValidationError returns true.*/

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError("Email must contain @");
    }
    return "Valid Email";
}

try {
    console.log(validateEmail("priya-no-at"));
} catch (err) {

    console.log(err instanceof ValidationError); // true
    console.log(err instanceof Error); // true

    if (err instanceof ValidationError) {
        console.log("Validation Error:", err.message);
    } else {
        console.log("Other Error:", err.message);
    }
}