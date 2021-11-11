"use strict";

function calcAge(birthYear) {
    const age = 2037 - birthYear;
//  console.log(firstName);  ~>  ERROR !!!

    function printAge() {
        const output = `${firstName} ~ You are ${age}, born in ${birthYear}!`;
        console.log(output);
        console.log(age);
    }

    printAge();
//  console.log(output);  ~>  ERROR !!!
    return age;
}

const firstName = "Shubham";
calcAge(2000);
// console.log(output);  ~>  ERROR !!!
// console.log(age);  ~>  ERROR !!!
// printAge();  ~>  ERROR !!!