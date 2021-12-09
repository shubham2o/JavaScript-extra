const future = new Date(2037, 10, 19, 15, 23);
console.log(`1> ` + future);
console.log(`2> ` + Number(future));
console.log(`3> ` + +future);
console.log(``);

const date1 = new Date(2037, 3, 14);
console.log(`4> ` + +date1 + ` milliseconds`);

const date2 = new Date(2037, 3, 24);
console.log(`5> ` + +date2 + ` milliseconds`);
console.log(``);

const calcdaysPassed = (date1, date2) => (date2 - date1);
const calcTotaldaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcdaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
const totalDaysPassed = calcTotaldaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));

console.log(`6> ` + days1 + ` milliseconds`);
console.log(`7> ` + totalDaysPassed + ` days`);