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


// REDUCE METHOD
console.log(`9> ` + movements);
console.log(``);


// accumulator -> SNOWBALL
/* 
const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return acc + cur
}, 0);
console.log(`10> ` + balance);
console.log(``); 
*/
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(`10> ` + balance);
console.log(``);


let balance2 = 0;
for (const mov of movements) {
    balance2 += mov;
}
console.log(`11> ` + balance2);
console.log(``);


// Maximum Value
const max = movements.reduce((acc, cur) => {
    if (acc > cur) {
        return acc;
    }
    else {
        return cur;
    }
}, movements[0]);
console.log(`12> ` + max);
console.log(``);


// Minimum Value
const min = movements.reduce((acc, cur) => {
    if (acc > cur) {
        return cur;
    }
    else {
        return acc;
    }
}, movements[0]);
console.log(`13> ` + min);
console.log(``);