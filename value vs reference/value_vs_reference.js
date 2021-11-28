"use strict";
const flight = "LH123";
const shubham = {
    name : "Shubham Sharma",
    passport : 24739479284
}


const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport === 24739479284) {
        alert("Checked In!");
    }
    else {
        alert("Wrong Passport!");
    }
}


checkIn(flight, shubham)
console.log(flight);
console.log(shubham);


// Is the same as doing......

const flightNum = flight;
/* Primitive Type ~ 
passing a primitive type to a function is just same as creating a copy outside of the function and 
so whatever we change in a copy, will also happen in the original one. */

const passenger = shubham;     
/* Object Type ~
passing a object type to a function is just same as creating a copy outside of the function and 
so whatever we change in a copy, will also happen in the original one. */


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100);
}

newPassport(shubham);
checkIn(flight, shubham);