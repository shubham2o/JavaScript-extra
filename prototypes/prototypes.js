"use strict";
/*
In OOPs ~ 
=> Constructor function always start with a capital letter.
=> The only difference between a regular function and a constructor function is that 
    we call the constructor function using the new keyword.
*/

const Person = function(firstName, birthYear) {
    // Instance Properties
    this.firtName = firstName;
    this.birthYear = birthYear;
    /* 
    // You should never create a function inside a constructor function, NEVER do this!
    this.calcAge = function() {
        console.log(2037 - this.birthYear);
    };
    */
};

const jonas = new Person("Jonas", 1991);
const shubham = new Person("Shubham", 2000);
console.log(jonas, shubham);
console.log(``);

/*
1. New {} is created
2. function is called, this = {}
3. {} linked to prototype
4. function automatically return {}
*/

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);
console.log(``);

console.log(jonas instanceof Person, shubham instanceof Person, matilda instanceof Person, jack instanceof Person);
console.log(``);

const stephen = "Stephen";
console.log( stephen instanceof Person);
console.log(``);



// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 -this.birthYear);
}

jonas.calcAge();
shubham.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(shubham.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(shubham));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, shubham.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
