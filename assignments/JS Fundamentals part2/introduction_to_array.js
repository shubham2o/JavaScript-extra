let populations = [
    1441, 
    550, 
    120, 
    1000
];

console.log(populations.length === 4);


function percentageOfWorld1(countryPop, worldPop) {
    return (countryPop / worldPop) * 100;
}


let chinaPer = percentageOfWorld1(1441, 7900);
let portugalPer = percentageOfWorld1(10, 7900);
let usaPer = percentageOfWorld1(332, 7900);
let germanyPer = percentageOfWorld1(82, 7900);


let percentages = [
    chinaPer, 
    portugalPer, 
    usaPer, 
    germanyPer
];


console.log(percentages[0]);
console.log(percentages[1]);
console.log(percentages[2]);
console.log(percentages[3]);