const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        // console.log(arr);
        return mov * euroToUsd;
    })
    // .map(mov => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); 