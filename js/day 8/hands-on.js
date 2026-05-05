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
amount +=1;
return amount;
}
function withdraw(amount){
if(amount>0){

}
else
{console.log("Insufficient funds")}
}
console.log(deposit(bankAccount.balance));
