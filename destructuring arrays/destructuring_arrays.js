"use strict";

const restaurant = {
    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italian", "Pizzeria", "Vegeterian", "Organic"],
    starterMenu : ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"],
    order : function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(`1> ${x}  ${y}  ${z}`);

const [first, second] = restaurant.categories;
console.log(`2> ${first}`);
console.log(`3> ${second}`);
console.log(`4> ${first} ${second}`);

const [One, , Two] = restaurant.starterMenu;     // Skipped Bruschetta
console.log(`5> ${One}`);
console.log(`6> ${Two}`);
console.log(`7> ${One} ${Two}`);



/* Destructuring through declaring and 
assigning array values to a variables. */
let [main, secondary] = restaurant.mainMenu;

console.log(`8> ${main} ${secondary}`);
const temp = main;
main = secondary;
secondary = temp;
console.log(`9> ${main}`);
console.log(`10> ${secondary}`);
console.log(`11> ${main} ${secondary}`);



/* Other and simple method to destructure  */
let [one1, two2] = restaurant.categories;

console.log(`12> ${one1}`);
console.log(`13> ${two2}`);
console.log(`14> ${one1} ${two2}`);

[one1, two2] = [two2, one1];
console.log(`15> ${one1}`);
console.log(`16> ${two2}`);
console.log(`17> ${one1} ${two2}`);



// Destructuring values from a function within an array
console.log(`18> ${restaurant.order(2, 0)}`);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(`19> ${starter}`);
console.log(`20> ${mainCourse}`);
console.log(`21> ${starter} ${mainCourse}`);



// Destructuring values from nested array (array inside an array)
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(`22> ${i}`);
console.log(`23> ${j}`);
console.log(`24> ${i}  ${j}`);



// Destructuring inside of destructuring
const nestedOne = [2, 4, [5, 6]];
const [p, , [q, r]] = nestedOne;
console.log(`25> ${p}`);
console.log(`26> ${q}`);
console.log(`27> ${r}`);
console.log(`28> ${p}  ${q}  ${r}`);



// Default Values
const [m = 0, n = 0, o = 0] = [8, 9];
console.log(`29> ${m}  ${n}  ${o}`);

const [e = 0, f, g] = [8, 9];
console.log(`30> ${e}  ${f}  ${g}`);

const [t = 0, u = 0, v = 0] = [];
console.log(`31> ${t}  ${u}  ${v}`);