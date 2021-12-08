const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];



// 1.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(`1> ` + bankDepositSum);



// 2.
const numDeposits1000 = accounts 
    .flatMap(acc => acc.movements)
    .reduce((index, cur) => (cur >= 1000 ? ++index : index), 0)
    // .filter(mov => mov > 1000).length;

// console.log(accounts.flatMap(acc => acc.movements));
console.log(`2> ` + numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(`3> ` + ++a);
console.log(`4> ` + a);



// 3. 
const {deposits, withdrawals} = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
        return sums;
    }, {deposits : 0, withdrawals : 0}
    );
console.log(`5> ` + deposits);
console.log(`6> ` + withdrawals);



// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

    const titleCase = title
        .toLowerCase()
        .split(" ")
        .map(word => 
            exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
            ).join(" ");

    return titleCase;
};
console.log("7> " + convertTitleCase(`this is a nice title`));
console.log("8> " + convertTitleCase(`this is a LONG title but n ot too long`));
console.log("9> " + convertTitleCase(`and here is another title with an EXAMPLE`));