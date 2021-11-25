"use strict";

const airline = "TAP Air Portugal";
const passenger = "jOnAS";
const email = "hello@jonas.io";

console.log(`
1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log("shubham".toUpperCase());

console.log(`
2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Fix capitalization in a name
const passengerLower =  passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

console.log(`
3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Comparing emails
const loginEmail = "  Hello@Jonas.Io \n  ";
/*
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
*/
// Above can also be written as
const normalizedEmail = loginEmail.toLowerCase().trim();      // trim() removes all the whitespace (extra-space ~ left, right, center space) that is within the variable.
console.log(normalizedEmail);
console.log(email === normalizedEmail); 