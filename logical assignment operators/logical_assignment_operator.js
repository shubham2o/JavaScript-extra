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



// AND && Assignment Operator (null or undefined)
const rest5 = {
    name : "Capri",
    owner : "Giovanni Rossi",
};
// rest5.owner = rest5.owner && "<ANONYMOUS>";
// AND && Logical Assignment Operator (can also be written as)
rest5.owner &&= "<ANONYMOUS>";
console.log(rest5);

const rest6 = {
    name : "Capri",
    numGuests :0,
};
// rest6.owner = rest6.owner && "<ANONYMOUS>";
// AND && Logical Assignment Operator (can also be written as)
rest6.owner &&= "<ANONYMOUS>";
console.log(rest6);