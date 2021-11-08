// ARROW FUNCTION EXPRESSION
let population = 7900;
let percentageOfWorld3 = countryPopulation => (countryPopulation / population) * 100;

console.log(`${percentageOfWorld3(10)}`);
console.log(`${percentageOfWorld3(1441)}`);
console.log(`${percentageOfWorld3(332)}`);