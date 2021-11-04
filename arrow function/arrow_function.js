// Function Expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const age = calcAge(2000);
console.log(age);



// Arrow Function
const calcAge1 = birthYear1 => 
2037 - birthYear1; 
const age1 = calcAge1(2000);
console.log(age1);



const yearsUntilRetirement = birthYear2 => {
    const age2 = 2037 - birthYear2;
    const retirementAge = 65 - age2;
    return retirementAge;
}
const retirement = yearsUntilRetirement(2000);
console.log(retirement);



const yearsUntilRetirement1 = (birthYear3, firstName) => {
    const age3 = 2037 - birthYear3;
    const retirementAge1 = 65 - age3;
    return `${firstName} retires in ${retirementAge1} years.`;
}
const retirement1 = yearsUntilRetirement1(2000, "Shubham");
const retirement2 = yearsUntilRetirement1(1988, "Stephen");
console.log(retirement1);
console.log(retirement2);