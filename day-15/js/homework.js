// 1. Build an object user = { name, greet } where greet logs this.name . Now call
// user.greet() , const fn = user.greet; fn() , and user.greet.call({ name: "X"
// }) . Predict each first, then run.

const user = {
    name,

    greet: function () {
        console.log(this.name); 
    }
};

user.greet();

const fn = user.greet;
fn();

user.greet.call({ name: "X"}); //X


// 2. Take any callback bug you've hit before with a class method and fix it three ways (bind, arrow
// wrapper, class field arrow). Document each.



// 3. Write function sum(...nums) { return nums.reduce((a, b) => a + b, 0); } . Use
// .apply to call it with an array [1, 2, 3, 4, 5] . Why does .apply shine here?

function sum(...nums){

    return nums.reduce((a, b) => a + b, 0); 

}



// 4. Take an arrow function const f = () => console.log(this) written at top-level of a
// module. Try to .bind({ x: 1 }) it and call. What does it log? Why?