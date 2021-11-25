"use strict";

console.log(`
1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log("a+very+nice+string".split("+"));
console.log("Shubham Sharma".split(" "));

console.log(`
2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const [firstName, lastName] = "Shubham Sharma";
console.log(firstName);
console.log(lastName);

const [firstName1, lastName1] = "Shubham Sharma".split(" ");
console.log(firstName1);
console.log(lastName1);

console.log(`
3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const newName = ["Mr.", firstName1, lastName1.toUpperCase()].join(" ");
console.log(newName);

console.log(`
4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }

    console.log(namesUpper.join(" "));
}
capitalizeName("stephen curry");
capitalizeName("klay thompson");
capitalizeName("draymond green");