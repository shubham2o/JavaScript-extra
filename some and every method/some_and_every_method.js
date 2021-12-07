const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(`1> ` + movements);
console.log(`2> ` + movements.includes(-130));
console.log(`3> ` + movements.includes(0));


// Some Method
console.log(`4> ` + movements.some(mov => mov === -130));
console.log(`5> ` + movements.some(mov => mov === 0));

const anyDeposits = movements.some(mov => mov > 0);
console.log(`6> ` + anyDeposits);

const anyDeposits1 = movements.some(mov => mov > 10000);
console.log(`7> ` + anyDeposits1); 


// Every Method
console.log(`8> ` + movements.every(mov => mov >= -650));
console.log(`9> ` + movements.every(mov => mov > 0));


// Seperate Callback
const deposit = mov => mov > 0;
console.log(`10> ` + movements.some(deposit));
console.log(`11> ` + movements.every(deposit));
console.log(`12> ` + movements.filter(deposit));