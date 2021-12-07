// Flat Method
const arr = [[1, 2, 3], [4, 5 ,6], 7, 8];
console.log(arr.flat());
console.log(``);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
console.log(``);

/*
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log( overallBalance);


// FlatMap Method
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log( overallBalance2);
*/