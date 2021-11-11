"use strict";



function calcAge(birthYear) {
    const age = 2037 - birthYear;
//  console.log(firstName);  ~>  ERROR !!!

    function printAge() {
        const output = `${firstName} ~ You are ${age}, born in ${birthYear}!`;
        console.log(output);
        console.log(age);
        console.log(millenial);
    }

    if(birthYear >= 1981 && birthYear <= 2000) {
        var millenial = true;   
        const str = `Oh, and you're a millenial, ${firstName}`
        console.log(str);
    }

//  console.log(str);  ~>  ERROR !!!
    console.log(millenial);
    printAge();
//  console.log(output);  ~>  ERROR !!!
    return age;
}



const firstName = "Shubham";
calcAge(2000);
// console.log(output);  ~>  ERROR !!!
// console.log(age);  ~>  ERROR !!!
// printAge();  ~>  ERROR !!!
// console.log(millenial);  ~>  ERROR !!! 