function percentageOfWorld1(countryPop, worldPop) {
    return (countryPop / worldPop) * 100;
}

console.log(`${percentageOfWorld1(1441, 7900)}%
`);



// Function calling other function
function describePopulation(country, population, world) {
    let percentage = percentageOfWorld1(population, world);
    let description = `${country} has ${population} million people, which is about ${percentage}% of the world.
`;
    return description;
}

console.log(`${describePopulation("Portugal", 10, 7900)}`);
console.log(`${describePopulation("China", 1441, 7900)}`);
console.log(`${describePopulation("USA", 332, 7900)}`);