let populations = [
    1441, 
    550, 
    120, 
    1000
];



let percentages2 = [];



function percentageOfWorld1(countryPop, worldPop) {
    return (countryPop / worldPop) * 100;
}

console.log(`${percentageOfWorld1(1441, 7900)}%
`);



for (let i = 0; i <= populations.length - 1; i++) {
    let perc = percentageOfWorld1(populations[i], 7900);
    percentages2.push(perc);
}

console.log(percentages2);
console.log(percentages2[0]);
console.log(percentages2[1]);
console.log(percentages2[2]);
console.log(percentages2[3]);