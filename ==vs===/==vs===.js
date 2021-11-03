// Double equals to operator
// (==)
const favourite = prompt(`What's your favourite number?`);

console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log(`Cool! 23 is an amazing number ~ True!(==)`);
}
else {
    console.log(`False!(==)`);
} 



// Tripple equals to operator
// (===)
const favourite2 = prompt(`What's your favourite number BETWEEN 1-10?`);

console.log(favourite2);
console.log(typeof favourite2);

if (favourite2 === 5) {
    console.log(`Cool! 5 is an amazing number ~ True!(===)`);
}
else {
    console.log(`False!(===)`);
}