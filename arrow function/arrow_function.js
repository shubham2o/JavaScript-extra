// Function Expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const age = calcAge(2000);
console.log(age);



// Arrow Function
const calcAge1 = birthYear1 => 2037 - birthYear1; 
const age1 = calcAge1(2000);
console.log(age1);