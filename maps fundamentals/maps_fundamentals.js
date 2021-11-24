"use strict";


console.log(`1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);


console.log(`
2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
rest
    .set("categories", [
        "Italian",
        "Pizzeria",
        "Vegetarian",
        "Organic"
    ])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(");
console.log(rest);


console.log(`
3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(rest.get(name));
console.log(rest.get("name"));
console.log(rest.get("true"));
console.log(rest.get(true));
console.log(rest.get("1"));
console.log(rest.get(1));


console.log(`
4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));


console.log(`
5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(rest.has("categories"));
console.log(rest);
console.log(rest.size);
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);
// console.log(rest.size);


console.log(`
6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));