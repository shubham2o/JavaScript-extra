const arr = [23, 11, 64];

console.log(`1> ` + arr[0]);
console.log(`2> ` + arr.at(0));

console.log(``);

// getting the last array element
console.log(`3> ` + arr[arr.length - 1]);
console.log(`4> ` + arr.at(-1));
console.log(`5> ` + arr.slice(-1)[0]);

console.log(``);

console.log(`6> ` + "Shubham".at(0));
console.log(`7> ` + "Shubham".slice(-1)[0]);
console.log(`8> ` + "Shubham".at(-1));