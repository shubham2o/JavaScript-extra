// Function Declaration
function percentageOfWorld1(countryPopulation) {
    let population = 7900;
    let percentage = (countryPopulation / population) * 100;
    return percentage;
}
console.log(`
Function Declaration ~>
`);
console.log(`${percentageOfWorld1(10)}`);
console.log(`${percentageOfWorld1(1441)}`);
console.log(`${percentageOfWorld1(332)}`);



// Function Expression
let percentageOfWorld2 = function(countryPopulation1) {
    let population1 = 7900;
    let percentage1 = (countryPopulation1 / population1) * 100;
    return percentage1;
}

console.log(`
Function Expression ~>
`);
console.log(`${percentageOfWorld2(10)}`);
console.log(`${percentageOfWorld2(1441)}`);
console.log(`${percentageOfWorld2(332)}`);