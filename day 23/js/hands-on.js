/*Task 1 Manual Iterator
Build a range(from, to) ITERABLE OBJECT (not a generator) using [Symbol.iterator].
Test with for...of over range(3, 7). Should log 3, 4, 5, 6, 7.
Test with [...range(1, 3)]. Should give [1, 2, 3].*/
const range = {
    from : 3,
    to : 7,

    [Symbol.iterator](){
        let current = this.from;
        const last = this.to;

        return{
            next(){
                if(current <= last){
                    return{ value: current++,ddone : false}
                }
                return {value: undefined , done :true
                }
            }
        }
    }
}

for (const n of range) console.log(n);
console.log([...range]);










/*Task 2 Range Generator
Re-do Task 1 — but using function*.
Verify the same for...of and spread tests pass.
In a comment, note the line-count difference.*/


/*Task 3 Take from Infinite
Write take(iter, n) that takes ONLY the first n values from any iterator/generator.
Build an infinite naturals() generator: 1, 2, 3, ...
Use take(naturals(), 5) to safely get [1, 2, 3, 4, 5] without hanging.*/


/*Bonus Tree Walk with yield*
Build a tree: { value: 1, children: [{ value: 2, children: [{ value: 3, children: [] }] }, { value: 4, children: [] }] }.
Write a generator walk(node) that yields each value in depth-first order.
Use yield* to recurse.
Spread to an array. Should be [1, 2, 3, 4].*/
