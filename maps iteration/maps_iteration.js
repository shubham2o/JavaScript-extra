"use strict";

const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct 🎉"],
    [false, "Try Again 🔃"],
]);
console.log(`1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(question);



// Convert Object to Map
console.log(`
2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
const openingHours = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
console.log(Object.entries(openingHours));
const hoursMap = new Map (Object.entries(openingHours));
console.log(hoursMap);



console.log(`
3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(question.get("question"));
for (const [key, value] of question) {
    if(typeof key === "number") {
        console.log(`Answer ${key}: ${value}`);
    }
}
const answer = Number(prompt("Your Answer"));
console.log(answer); 



console.log(`
4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(question.get(question.get("correct") === answer));



// Convert map to an array
console.log(`
5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log([...question]);