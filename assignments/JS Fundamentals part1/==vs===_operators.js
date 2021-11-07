// == Operator
let numNeighbours = prompt("== How many neighbour countries does your country have?");

if (numNeighbours == 1) {
    console.log(`'Only 1 border!'`);
}
else if (numNeighbours > 1) {
    console.log(`'More than 1 border!'`);
}
else {
    console.log(`'No borders!'`);
}



// === Operator
let numNeighbours1 = prompt("=== How many neighbour countries does your country have?");

if (numNeighbours1 === 1) {
    console.log(`'Only 1 border!'`);
}
else if (numNeighbours1 > 1) {
    console.log(`'More than 1 border!'`);
}
else {
    console.log(`'No borders!'`);
}



// === Operator Fixed
let numNeighbours2 = Number(prompt("Fixed === How many neighbour countries does your country have?"));

if (numNeighbours2 === 1) {
    console.log(`'Only 1 border!'`);
}
else if (numNeighbours2 > 1) {
    console.log(`'More than 1 border!'`);
}
else {
    console.log(`'No borders!'`);
}