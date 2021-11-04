// TEST 
// DATA 
// 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's by ${markBMI - johnBMI}!`);
}
else {
    console.log(`John's BMI is higher than Mark's by ${johnBMI - markBMI}!`);
}



// TEST 
// DATA 
// 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is higher than John's by ${markBMI2 - johnBMI2}!`);
}
else {
    console.log(`John's BMI is higher than Mark's by ${johnBMI2 - markBMI2}!`);
}