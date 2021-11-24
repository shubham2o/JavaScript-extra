"use strict";
const orderSet = new Set( [
    "Pasta",
    "Pizza",
    "Pizza",
    "Risotto",
    "Pasta",
    "Pizza"
]);

console.log(`1 ~ ~ ~ ~ ~ ~ >`);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("Risotto");
console.log(orderSet);
console.log(orderSet[0]);
// orderSet.clear(orderSet);
// console.log(orderSet);

for(const order of orderSet) {
    console.log(order);
}



// Example
console.log(`

2 ~ ~ ~ ~ ~ ~ >`);
const staff = [
    "Waiter", 
    "Chef", 
    "Waiter", 
    "Manager", 
    "Chef", 
    "Waiter"
];

const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(staffUnique.size);
const staffUnique1 = [...new Set(staff)];   // Conversion of Set to an Array
console.log(staffUnique1);
console.log(staffUnique1.size);



console.log(`

3 ~ ~ ~ ~ ~ ~ >`);
console.log(new Set("Shubham"));        // letter h is repeated twice, so it is counted as a single letter and that's why Set(6) and size = 6
console.log(new Set("Shubham").size);



console.log(`

4 ~ ~ ~ ~ ~ ~ >`);
console.log(new Set("Jonas"));
console.log(new Set("Jonas").size);