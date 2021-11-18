"use strict";


// OR || Assignment Operator
const rest1 = {
    name : "Capri",
    numGuests: 20,
};
// rest1.numGuests = rest1.numGuests || 10;
// OR || Logical Assignment Operator (can also be written as)
rest1.numGuests ||= 10;
console.log(rest1);

const rest2 = {
    name : "La Piazza",
    owner : "Giovanni Rossi",
};
// rest2.numGuests = rest2.numGuests || 10;
// OR || Logical Assignment Operator (can also be written as)
rest2.numGuests ||= 10
console.log(rest2);



// Nullish ?? Assignment Operator (null or undefined)
const rest3 = {
    name : "Capri",
    numGuests : 0,
};
rest3.numGuests ??= 10;
console.log(rest3);

const rest4 = {
    name : "La Piazza",
    owner : "Giovanni Rossi",
};
rest4.numGuests ||= 10;
console.log(rest4);