/*Task 1 Basic Class with Getter
Build a Rectangle class with width , height instance properties.
Add a get area() getter that returns width * height .
Add a method scale(factor) that multiplies both dimensions in place.
Create a 2 × 3 rectangle, log the area, scale by 2 , log the area again.*/

class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height; 
    }
    scale(factor){

        this.width *= factor;
        this.height *= factor;
    }
}

const r = new Rectangle(2,3);

console.log(r.area); // 6

r.scale(2);

console.log(r.area); // 24

/*Task 2 Inheritance with super
Build an Employee(name, salary) class with a describe() method that logs ${name}
earns ₹${salary}/month .
Build a Manager(name, salary, team) class that extends Employee.
Override describe() to first call super.describe() then log Leads team of
${team.length} .
Test with a Manager named "Riya", salary 80000, team ["Priya", "Aarav", "Anaya"] */
class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    describe(name,salary) {
        console.log(`${this.name} earns ${this.salary}`);
    }
}

class Manager extends Employee{
    constructor(name, salary, team){
        super(name,salary);
        this.team = team;
    }
    describe(){
        super.describe();
        console.log(`Leads team of ${this.team.length}`)
    }
}
const m = new Manager( "Riya",  80000, ["Priya", "Aarav", "Anaya"] )
m.describe();

/*Task 3 Private Field with `#`
Build a Counter class with a #count private field starting at 0.
Add inc() , dec() , and a get value() getter.
Throw an Error if dec() would make the count negative.
Create a counter, call inc three times, dec once, log the value, then try to dec four more times
in a try/catch.*/

class Counter {
    #count;
    constructor(){
        this.count = 0;
    }
    inc(){
        this.count++
    }
    dec(){
        if(this.count <= 0) throw new Error("Count cannot be negative");
        this.count--;
    }
    get value(){
        console.log(count);
    }
}
const c = new Counter();

c.inc();
c.inc();
c.inc();
c.dec(); 
console.log(c.count);

try{
  
    c.dec(); 
    c.dec(); 
    c.dec(); 
    c.dec(); 

}
catch(e){
console.log(e);
}

/*Bonus Custom Error Class
Build a ValidationError class that extends Error . Constructor takes field and message .
Set this.name = "ValidationError" and this.field = field inside the constructor.
Write a validateUser({ name, age }) function that throws a ValidationError("name",
...) if name is missing and ValidationError("age", ...) if age < 0.
Call it twice in try/catch — once with bad name, once with bad age. Log e.field and
e.message .*/

class ValidationError extends Error{

    constructor(field, message){
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(name, age){

    if(!name) throw new ValidationError("name", "Name is required");

    if(age < 0) throw new ValidationError("age", "Age is required");

    return "Valid User";
}

try{

validateUser("riya" , -4); //Bad age

}
catch(e){

if(e instanceof ValidationError)
{
    console.log(`[${e.field}] [${e.message}]`, e)
}

}


try{

validateUser("riya",21); 

}
catch(e){

if(e instanceof ValidationError)
{
    console.log(`[${e.field}] [${e.message}]`, e)
}
}
try{

validateUser( "" , 22); //bad name

}
catch(e){
    
if(e instanceof ValidationError)
{
    console.log(`[${e.field}] [${e.message}]`, e)
}
}