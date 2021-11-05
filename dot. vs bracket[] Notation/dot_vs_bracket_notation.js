const shubham = {
    firstName : 'Shubham',
    lastName : 'Sharma',
    age : 2037 - 2000,
    job : 'student',
    friends : ['Stephen' , 'Klay', 'Dray']
};
console.log(shubham);


// DOT notation
console.log(shubham.firstName);
console.log(shubham.lastName);
console.log(shubham.age);
console.log(shubham.job);
console.log(shubham.friends);
console.log(shubham.friends[0]);
console.log(shubham.friends[1]);
console.log(shubham.friends[2]);


// BRACKET notation
console.log(shubham['firstName']);
console.log(shubham['lastName']);
console.log(shubham['age']);
console.log(shubham['job']);
console.log(shubham['friends']);

const monkey = 'Name';
console.log(shubham['first' + monkey]);
console.log(shubham['last' + monkey]);

const interestedIn = prompt (`What do you want to know about Shubham? Choose between firstName, lastName, age, job, and friends`);
console.log(shubham[interestedIn]);