// Write a function kmToMiles(km) — formula km * 0.621.
function kmToMiles(km){
    return km*0.621;
}
console.log(kmToMiles(100));


// Write a function gstAmount(price, rate = 18) returning the tax amount.
function gstAmount(price, rate = 18){
    return price *(rate/100);
}
console.log(gstAmount(1000));
console.log(gstAmount(1000,20));

// Write a function fullName(first, last) returning the full name as one string.
function fullName(first, last){
    return "Full name: " + first + " " + last;
}
console.log(fullName("Krithika", "Ramachandran"));

// Write a function isAdult(age) returning true/false.
function isAdult(age){
    if(age>=18) return true;
    else return false;
}
console.log(isAdult(18));
console.log(isAdult(11));