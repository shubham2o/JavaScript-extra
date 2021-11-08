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



for (let i = 0; i < populations.length; i++) {
    let perc = percentageOfWorld1(populations[i], 7780);
    percentages2.push(perc);
}

console.log(percentages2);