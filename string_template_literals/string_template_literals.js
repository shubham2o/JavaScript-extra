// Normal
// String
const firstName = "Shubham";
const job = "Student";
const birthYear = 2000;
const year = 2037;

const shubham = 
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(shubham);


// Template
// Literals
const shubhamNew = 
`I'm ${firstName}~New, a ${year - birthYear} years old ${job}!`;

console.log(shubhamNew);