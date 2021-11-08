let populations = [
    1441, 
    550, 
    120, 
    1000
];


let percentages3 = [];


function percentageOfWorld1(countryPop, worldPop) {
    return (countryPop / worldPop) * 100;
}

console.log(`${percentageOfWorld1(1441, 7900)}%
`);


let i = 0;
while(i <= populations.length - 1) {
    const perc = percentageOfWorld1(populations[i], 7900);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);
console.log(percentages3[0]);
console.log(percentages3[1]);
console.log(percentages3[2]);
console.log(percentages3[3]);