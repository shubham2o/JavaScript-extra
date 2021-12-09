console.log(23 === 23.0);
console.log(``);

// Base 10 => 0 to 9
// Binary Base 0 => 0 to 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(``);

// Converting string to a number
console.log(typeof("shubham"));
console.log(typeof(Number("shubham")));
console.log(``);

// Other simpler method to convert string to a number
console.log(typeof("shubham"));
console.log(typeof(+"shubham"));
console.log(``);

// Parsing a number from a string
console.log(Number.parseInt("30px"));
console.log(typeof(Number.parseInt("30px")));
console.log(``);

console.log(Number.parseFloat("2.5rem"));
console.log(Number.parseInt("2.5rem"));
console.log(typeof(Number.parseFloat("2.5rem")));
console.log(``);

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20x"));
console.log(Number.isNaN("shubham"));
console.log(Number.isNaN(+"shubham"));
console.log(Number.isNaN(23/0));
console.log(``);

// Checking if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(23/0));
console.log(``);

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23/0));