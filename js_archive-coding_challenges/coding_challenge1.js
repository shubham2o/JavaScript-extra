// TEST 
// DATA 
// 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI)

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



// TEST
// DATA
// 2
const markMass2 = 95;
const markHeight2 = 188;
const johnMass2 = 85;
const johnHeight2 = 176;

const markBMI2 = markMass2 / markHeight2 ** 2 / (markHeight2 * markHeight2);
console.log(markBMI2);

const johnBMI2 = johnMass2 / johnHeight2 ** 2 / (johnHeight2 * johnHeight2);
console.log(johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);