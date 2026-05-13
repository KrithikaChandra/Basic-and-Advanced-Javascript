// function whoAmI(){
//     console.log(this);
// }
// whoAmI();
// const user = {name : "Priya", whoAmI};
// user.whoAmI();
// const other = {name : "Aarav", whoAmI};
// other.whoAmI();

// function greet(city , lang){
//     console.log(`${this.name} from ${city} speaks ${lang}`);

// }
// const u = { name: "Priya" };
// // call — invoke now, args listed
// greet.call(u, "Jaipur", "Hindi"); // "Priya from Jaipur speaks Hindi"
// // apply — invoke now, args as array
// greet.apply(u, ["Jaipur", "Hindi"]); // same output
// // bind — returns a new function for later
// const greetPriya = greet.bind(u, "Jaipur"); // partially applied: city pre-set
// greetPriya("English"); // "Priya from Jaipur speaks
// // English"
// greetPriya("Marathi"); // "Priya from Jaipur speaks
// // Marathi"
// // Once bound, this CANNOT be re-boun
// greetPriya.call({ name: "Aarav" }, "Tamil"); // still "Priya from Jaipur speaks
// // Tamil"

const user = {
name: "Priya",
// Regular function — has its own this
regular: function () {
console.log(this.name); // "Priya" ← implicit binding
},
// Arrow — no own this; inherits from enclosing scope (here: module/global)
arrow: () => {
console.log(this.name); // undefined ← arrow doesn't see user as this , if we give user.name we will get output
},
};
// user.regular(); // "Priya"
user.arrow();

const team = {
members: ["Priya", "Aarav", "Riya"],
greetAll() {
this.members.forEach((m) => {
// Arrow here inherits 'this' from greetAll → which is 'team'
console.log(`Hi ${m}, from team ${this.members.length}`);
});
},
};
team.greetAll();
// "Hi Priya, from team 3"
// "Hi Aarav, from team 3"
// "Hi Riya, from team 3"

const obj = {
  name: "Priya",
  regularFn: function() {
    console.log(this.name);  // "Priya" — this = obj
  },
  arrowFn: () => {
    console.log(this.name);  // undefined — this = outer scope (global/window)
  }
};
 
obj.regularFn();  // "Priya"
obj.arrowFn();    // undefined (or global's name)