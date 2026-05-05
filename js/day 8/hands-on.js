/*Task 1 Build a Student Object
Create an object student with these properties: name = "Anaya", age = 21, city = "Jaipur", course = "B.Tech", marks (an array of 3 numbers).
Log the student. Then log just the name, age, and the FIRST mark using dot notation.
Add a new property email = "anaya@example.com". Update age to 22. Delete city.
Log the student again to confirm changes.*/
const student = {
    name : "Anaya",
    age : 21, 
    city : "Jaipur",
    course : "B.Tech",
    marks : [56 , 78 , 65]
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.marks[0]);
student.email = "anaya@example.com";
student.age = 22;
delete student.city;
console.log(student);

/*Task 2 Method with this
Create an object bankAccount with: holder = "Aarav", balance = 5000.
Add a method deposit(amount) that adds to the balance and returns the new balance.
Add a method withdraw(amount) that subtracts (only if balance is enough) and returns the new balance, or returns the string "Insufficient funds".
Test: deposit 1000, withdraw 2000, withdraw 10000.*/
const bankAccount = {
    holder : "Aarav",
    balance : 5000
}
function deposit(amount){
    bankAccount.balance += amount;
    return bankAccount.balance
}
function withdraw(amount){
    if(bankAccount.balance - amount > 0 ){
        bankAccount.balance -= amount
        return bankAccount.balance;
    }
    else
    {console.log("Insufficient funds");
    }
}
console.log(deposit(1000));
console.log(withdraw(2000));
console.log(withdraw(10000));

/*Task 3 Destructuring
Use this object: const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
Destructure name and price into variables and log them.
Destructure brand but rename it to make. Log it.
Destructure warranty with a default value of "1 year" (since the property doesn't exist). Log it.*/
const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
const {name , price} = product;
console.log(name);
console.log(price);
const {brand :make} = product;
console.log(make);
const {warranty = "1 year"} = product;
console.log(warranty);

/*Bonus Object as Iterable
Use the student object from Task 1 (after modifications).
Use Object.keys to log all keys.
Use Object.values to log all values.
Use Object.entries with forEach to log each property as "key: value".
Bonus: count how many properties the object has.*/
const student1 = {
    name: 'Anaya',
    age: 22,
    course: 'B.Tech',
    marks: [ 56, 78, 65 ],
    email: 'anaya@example.com'
}
console.log(Object.keys(student1))
console.log(Object.values(student1))
console.log(Object.entries(student1))
console.log("Total properties:", Object.keys(student1).length);
