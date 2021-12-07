// Strings
const owners = ["Shubham", "Stephen", "Draymond", "Klay"];
console.log(`1> ` + owners);
console.log(`2> ` + owners.sort());
console.log(`3> ` + owners);
console.log(``);


// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(`4> ` + movements);
console.log(`5> ` + movements.sort());
console.log(`6> ` + movements);
console.log(``);


// return < 0 : A, B (keep order)
// return > 0 : B, A (switch order)

// ASCENDING ORDER
/*
movements.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
})
*/
movements.sort((a, b) => a - b);
console.log(`7> ` + movements);
console.log(``);


// DESCENDING ORDER
/*
movements.sort((a, b) => {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
})
*/
movements.sort((a, b) => b - a);
console.log(`8> ` + movements);
console.log(``);