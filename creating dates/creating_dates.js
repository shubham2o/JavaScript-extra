// Create a date
const now = new Date();
console.log(`1> ` + now);

console.log(`2> ` + new Date("Thu Dec 09 2021 21:42:29"));
console.log(`3> ` + new Date("December 24, 2015"));

console.log(`4> ` + new Date(2037, 10, 19, 15, 23, 5));
console.log(`5> ` + new Date(2037, 10, 31));

console.log(`6> ` + new Date(0));
console.log(`7> ` + new Date(3 * 24 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(`8> ` + future);
console.log(`9> ` + future.getFullYear());
console.log(`10> ` + future.getMonth());
console.log(`11> ` + future.getDate());
console.log(`12> ` + future.getDay());
console.log(`13> ` + future.getHours());
console.log(`14> ` + future.getMinutes());
console.log(`15> ` + future.getSeconds());
console.log(`16> ` + future.toISOString());
console.log(`17> ` + future.getTime());

console.log(`18> ` + new Date(2142237185000));

console.log(`19> ` + Date.now());

future.setFullYear(2040);
console.log(`20 ` + future);