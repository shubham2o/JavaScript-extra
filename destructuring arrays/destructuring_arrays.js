"use strict";

const restaurant = {
    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italian", "Pizzeria", "Vegeterian", "Organic"],
    starterMenu : ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"]
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(`1> ${x} ${y} ${z}`);

const [first, second] = restaurant.categories;
console.log(`2> ${first}`);
console.log(`3> ${second}`);
console.log(`4> ${first, second}`);

const [One, , Two] = restaurant.starterMenu;     // Skipped Bruschetta
console.log(`5> ${One}`);
console.log(`6> ${Two}`);
console.log(`7> ${One} ${Two}`);

let [main, secondary] = restaurant.mainMenu;
console.log(`8> ${main} ${secondary}`);
const temp = main;
main = secondary;
secondary = temp;
console.log(`9> ${main}`);
console.log(`10> ${secondary}`);
console.log(`11> ${main} ${secondary}`);