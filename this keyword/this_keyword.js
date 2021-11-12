"use strict";

// Function Expression
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(2000);



// Arrow Function Expression
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(2021);



// This keyword in an object
const shubham = {
    year : 1991,
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);
    }
}
shubham.calcAge();

const matilda = {
    year : 2017
};
matilda.calcAge = shubham.calcAge;
matilda.calcAge();