// 1 ~ SLICE Method
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(`1> ` + arr.slice(0));
console.log(`2> ` + arr.slice(1));
console.log(`3> ` + arr.slice(2));
console.log(`4> ` + arr.slice(3));
console.log(`5> ` + arr.slice(4));
console.log(`6> ` + arr.slice(5));
console.log(`7> ` + arr.slice(6));

console.log(``);

console.log(`8> ` + arr.slice(2, 4));
console.log(`9> ` + arr.slice(1, 4));
console.log(`10> ` + arr.slice(3, 4));

console.log(``);

console.log(`11> ` + arr.slice(-1));
console.log(`12> ` + arr.slice(-2));
console.log(`13> ` + arr.slice(-3));
console.log(`14> ` + arr.slice(-4));
console.log(`15> ` + arr.slice(-5));
console.log(`16> ` + arr.slice(-6));

console.log(``);

console.log(`17> ` + arr.slice(1, -1));
console.log(`18> ` + arr.slice(0, -2));
console.log(`19> ` + arr.slice(1, -4));

console.log(``);

console.log(`20> ` + arr.slice());
console.log(`21> ` + [...arr]);


// 2 ~ SPLICE Method
console.log(``);

// console.log(`22> ` + arr.splice(2));
arr.splice(-1);
console.log(`23> ` + arr);
arr.splice(1, 2);
console.log(`24> ` + arr);


// 3 ~ REVERSE Method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
const arr3 = ['5', '4', '3', '2', '1'];

console.log(``);

console.log(`25> ` + arr2.reverse());
console.log(`26> ` + arr2);
console.log(`27> ` + arr3.reverse());
console.log(`28> ` + arr3);


// 4 ~ CONCAT Method
console.log(``);

// const letters = arr.concat(arr2, arr3);
const letters = [...arr, ...arr2, ...arr3];
console.log(`29> ` + letters);


// 5 ~ JOIN Method
console.log(``);

console.log(`30> ` + letters.join(" - "));