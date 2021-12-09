console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));
console.log(``);

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));
console.log(``);

console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, "2"));
console.log(Math.min(5, 18, 23, 11, "2px"));
console.log(``);

console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(``);

console.log(Math.random() * 6);
console.log(Math.trunc(Math.random() * 6) + 1);
console.log(``);

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min ) + 1) + min;
console.log(randomInt(0, 10));
console.log(``);

// Rounding Integers
console.log(`1> ` + Math.trunc(23.3));
console.log(`2> ` + Math.round(23.3));

console.log(`3> ` + Math.trunc(3.8));
console.log(`4> ` + Math.round(3.8));

console.log(`5> ` + Math.trunc(0.5));
console.log(`6> ` + Math.round(0.5));
console.log(``);

console.log(`7> ` + Math.ceil(8.0));
console.log(`8> ` + Math.ceil(8.3));
console.log(`9> ` + Math.ceil(8.5));
console.log(`10> ` + Math.ceil(8.8));
console.log(``);

console.log(`11> ` + Math.floor(9.0));
console.log(`12> ` + Math.floor(8.3));
console.log(`13> ` + Math.floor(8.5));
console.log(`14> ` + Math.floor(8.8));
console.log(``);

console.log(`15> ` + Math.trunc(9.0));
console.log(`16> ` + Math.trunc(8.3));
console.log(`17> ` + Math.trunc(8.5));
console.log(`18> ` + Math.trunc(8.8));
console.log(``);

console.log(`19> ` + Math.floor(-23.3));
console.log(`20> ` + Math.trunc(-23.3));
console.log(`21> ` + Math.ceil(-23.3));

console.log(`22> ` + Math.floor(-0.8));
console.log(`23> ` + Math.trunc(-0.8));
console.log(`21> ` + Math.ceil(-0.8));
console.log(``);

// Rounding Decimals
console.log(`22> ` + (2.7).toFixed(0));
console.log(`23> ` + (2.7).toFixed(1));
console.log(`24> ` + (2.7).toFixed(2));
console.log(`25> ` + (2.7).toFixed(3));
console.log(`26> ` + (2.345).toFixed(0));
console.log(`27> ` + (2.345).toFixed(1));
console.log(`28> ` + (2.345).toFixed(2));
console.log(`29> ` + (2.345).toFixed(3));
console.log(`30> ` + (2.345).toFixed(4));
console.log(`31> ` + typeof(2.345).toFixed(2));
console.log(`32> ` + typeof+(2.345).toFixed(2));