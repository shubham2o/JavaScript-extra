// MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

/*
const movementsUSD = movements.map(function (mov) {
    return mov * euroToUsd;
})
*/
// Above code in Arrow function
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(`1> ` + movements);
console.log(``);
console.log(`2> ` + movementsUSD);
console.log(``);


const movementsUSDfor = [];
for (const mov of movements) {
    movementsUSDfor.push(mov * euroToUsd);
}
console.log(`3> ` + movementsUSDfor);
console.log(``);


const movementsDescriptions = movements.map((mov, i) => 
// {
    ` Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
/*
    if (mov > 0) {
        return ` Movement ${i + 1} : You deposited ${mov}`;
    }
    else {
        return ` Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
    }
*/
);
console.log(`4> ` + movementsDescriptions);
console.log(``);


// FILTER METHOD
const deposits = movements.filter(function (mov) {
    return mov > 0;
});
console.log(`5> ` + movements);
console.log(``);
console.log(`6> ` + deposits);
console.log(``);


const depositsFor = [];
for (const mov of movements) {
    if (mov > 0) {
        depositsFor.push(mov)
    }
}
console.log(`7> ` + depositsFor);
console.log(``);


const withdrawals = movements.filter(mov => mov < 0);
console.log(`8> ` + withdrawals);
console.log(``);