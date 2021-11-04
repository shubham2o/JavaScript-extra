// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}
const age = calcAge(2000);
console.log(age);



// Function Expression
const calcAge2 = function (birthYear2) {
    return 2037 - birthYear2;
}
const age2  = calcAge2(2000);
console.log(age2);