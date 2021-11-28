"use strict";

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}.`);
    };
};

const greeterHey = greet("Hey");

greeterHey("Shubham");
greeterHey("Stephen");

console.log(``);
greet("Hello")("Klay");
greet("Hello")("Dray");


// Challenge (Arrow Function)
console.log(``);
const greetArr = greeting => name => console.log(`${greeting} ${name}.`);

greetArr("Hi")("Poole");
greetArr("Hi")("Wiseman");