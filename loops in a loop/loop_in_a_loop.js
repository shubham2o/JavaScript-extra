// Looping Backwards 
// using an array.
const shubham = [
    'Shubham',
    'Sharma',
    2037 - 2000,
    'student',
    ['Stephen', 'Klay', 'Dray']
];

for (let i = shubham.length - 1; i >= 0; i--) {
    console.log(i, shubham[i]);
}



// Loop in a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
};