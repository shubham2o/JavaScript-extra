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

        // Above can also be written as
        // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }

    console.log(namesUpper.join(" "));
}
capitalizeName("stephen curry");
capitalizeName("klay thompson");
capitalizeName("draymond green");

console.log(`
5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "*"));     // padEnd(30) will add up 5 * in the end because padStart(25) had already made the length of the variable 25. So, 30 - 25 = 5.
console.log(message.padStart(25, "+").padEnd(30, "*").length);

console.log("Shubham".padStart(25, "+").padEnd(30, "*"));
console.log(message.padStart(25, "+").padEnd(30, "*").length);

console.log(`
6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

console.log(`
7 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5)); 

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"PLANE ".repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);