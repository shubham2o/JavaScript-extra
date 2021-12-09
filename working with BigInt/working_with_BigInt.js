console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(``);

console.log(48382376487682746283683472682384763);
console.log(48382376487682746283683472682384763n);
console.log(BigInt(48382376487682746283683472682384763));
console.log(``);

// Operations
console.log(1000n + 1000n);
console.log(36286399723893294693264998346298696293n * 1000000n);
// console.log(Math.sqrt(16n));
console.log(``);

const huge = 202892398462937413269n;
const num = 23;
console.log(huge * BigInt(num));
console.log(``);

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(``);

console.log(typeof 20n);
console.log(typeof 20);
console.log(``);

console.log(huge + " is REALLY big!!!");
console.log(``);

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
// console.log(11n / 3);
console.log(11n / 3n);
console.log(11 / 3);