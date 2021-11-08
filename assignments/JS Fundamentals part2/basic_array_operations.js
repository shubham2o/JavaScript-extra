let indiaNeighbours = [
    208,
    1441,
    22,
    28
];

let utopia = indiaNeighbours.push('Utopia');
console.log(indiaNeighbours);
console.log(indiaNeighbours[4]);

let removeUtopia = indiaNeighbours.pop()
console.log(indiaNeighbours);
console.log(indiaNeighbours[4]);

if (!indiaNeighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}

indiaNeighbours[indiaNeighbours.indexOf(22)] = 'Afghanistan';
console.log(indiaNeighbours);
console.log(indiaNeighbours[2]);