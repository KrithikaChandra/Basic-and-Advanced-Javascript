// 1. Create an object book with title, author, year, and pages. Log the title using bracket notation with a variable key.
const book = {
    title : "Helen Keller",
    author : "Helen Keller",
    year : 1967,
    pages : 140
}
const key = "title"
console.log(book[key]);

//  2. Add a method summary() that returns "<title> by <author> (<year>)" using template literals and this.
const book1 = {
    title : "Helen Keller",
    author : "Helen Keller",
    year : 1967,
    pages : 140,
    summary(){
        return `${this.title} by ${this.author}`
    }
}
console.log(book1.summary());

//3. Use Object.entries and forEach to print every property of any object you have.
console.log(Object.entries(book));
Object.entries(book).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// 4. Take an object, copy it with spread, modify the copy, and verify the original is unchanged.
const aCopy = {
  ...book,
  review: "good"
};
console.log(aCopy);
console.log(book);
