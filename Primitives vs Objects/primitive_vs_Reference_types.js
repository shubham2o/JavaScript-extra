"use strict";

// Primitive (Primitive Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);



// Object (Reference Types)
const me = {
    name : "Shubham",
    age : 30
};
const friend = me;
friend.age = 21;
console.log(`Me ~ ${me.age}`);
console.log(`Friend ~ ${friend.age}`);