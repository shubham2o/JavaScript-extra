console.log(`1> ` + 5 % 2);
console.log(`2> ` + 5 / 2);     // 5 = 2 * 2 + 1

console.log(`3> ` + 8 % 3);
console.log(`4> ` + 8 / 3);     // 8 = 2 * 3 + 2

console.log(`6> ` + 6 % 2);
console.log(`7> ` + 6 / 2);

console.log(`8> ` + 7 % 2);
console.log(`9> ` + 7 / 2);

const isEven = n => n % 2 === 0;
console.log(`10> ` + isEven(2));
console.log(`11> ` + isEven(5));
console.log(`12> ` + isEven(24));
console.log(`13> ` + isEven(35));