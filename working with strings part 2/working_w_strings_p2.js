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

console.log(`
4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$");
console.log(priceUS);

const announcement = `All passengers come to boarding door 23, Boarding door 23!`;
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));           // g here means global

console.log(`
5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("A32"));
console.log(plane.endsWith("neo"));
console.log(plane.endsWith("bus"));

if (plane.startsWith("Air") && plane.endsWith("neo")) {
    console.log(`Part of the NEW AIRbus family`);
}

console.log(`
6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ >`);
// Practice Exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if(baggage.includes("knife") || baggage.includes("gun")) {
        console.log(`You are NOT allowed on board!`);
    }
    else {
        console.log(`Welcome aboard :>`);
    }
};

checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);