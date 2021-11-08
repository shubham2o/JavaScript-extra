function percentageOfWorld1(countryPop) {
    return (countryPop / 7900) * 100;
}

console.log(`${percentageOfWorld1(1441)}
`);



// Function calling other function
function describePopulation(country, population) {
    let percentage = percentageOfWorld1(population);
    let description = `${country} has ${population} million people, which is about ${percentage}% of the world.
`;
    return description;
}

console.log(`${describePopulation("Portugal", 10)}`);
console.log(`${describePopulation("China", 1441)}`);
console.log(`${describePopulation("USA", 332)}`);