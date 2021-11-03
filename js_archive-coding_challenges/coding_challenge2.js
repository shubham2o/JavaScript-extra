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