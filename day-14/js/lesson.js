function makeCounter(){
    let count = 0;
    return function() {
        
        count++;
        return count;
    }
}
const c = makeCounter();
console.log(c());
console.log(c());
console.log(c());

function createAccount(initial){
    let balance = initial;
    return {
        deposit : (amt) => balance += amt,
        withdraw : (amt) => balance -= amt,
        getBalance : () => balance,
    }
}
const acc = createAccount(1000);
acc.deposit(500);
console.log(acc.getBalance());

function memorize(fn){
    const cache = {};
    return function(n){
        if(n in cache) return cache[n];
        cache[n] = fn(n);
        return cache[n];
    }
}
const slowSquare = (n) => {console.log("computing..."); return n*n; }
const fastSquare = memorize(slowSquare);
fastSquare(5);
fastSquare(5);

(function (){
    const secret = "hidden";
    console.log("IIFE ran");
})();

(function (city){
    console.log(`Greetings from ${city}`);
})("Jaipur");

( () => {
    const x = 42;
    console.log(x);
})();

