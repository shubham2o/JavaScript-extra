// Function Declaration
function calcAge(birthYear) {
    return 2037 - birthYear;
}
const age = calcAge(2000);
console.log(age);



/* const age2 declared before function
and will work normally like before 
and give the correct output */
const age2 = calcAge2(2000);
function calcAge2(birthYear2) {
    return 2037 - birthYear2;
}
console.log(age2);



// Function Expression
const calcAge3 = function (birthYear3) {
    return 2037 - birthYear3;
}
const age3  = calcAge3(2000);
console.log(age3);



/* const age4 declared before function
and will not work normally like before 
and will give error as an output */
const age4 = calcAge4(2000);
const calcAge4 = function(birthYear4) {
    return 2037 - birthYear4;
}
console.log(age4);