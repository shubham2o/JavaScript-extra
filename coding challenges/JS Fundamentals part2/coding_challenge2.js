/* TEST DATA 
passed using array and for loop. */
let bills = [125, 555, 44, 50, 10, 100, 1000];
let tips;
let total;

for (let i = 0; i <= bills.length - 1; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
        tips = (15 / 100) * bills[i];
        total = bills[i] + tips;
        console.log(
            `${[i + 1]}> The bill was ${bills[i]}, the tip was ${tips}, and the total amount payable is ${total} /-
`);
    }
//  //  //  //  //  //
    else {
        tips  = (20 / 100) * bills[i];
        total = bills[i] + tips;
        console.log(
            `${[i + 1]}> The bill was ${bills[i]}, the tip was ${tips}, and the total amount payable is ${total} /-
`);
    }
}



/* TEST DATA 
passed using array and expression function method. */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? 
    bill * 0.15 : 
    bill * 0.2;
}

const tips1 = [
    calcTip(bills[0]), 
    calcTip(bills[1]), 
    calcTip(bills[2]), 
    calcTip(bills[3]), 
    calcTip(bills[4]), 
    calcTip(bills[5]), 
    calcTip(bills[6])
];

const totalAmount = [
    bills[0] + tips1[0], 
    bills[1] + tips1[1], 
    bills[2] + tips1[2],
    bills[3] + tips1[3], 
    bills[4] + tips1[4], 
    bills[5] + tips1[5], 
    bills[6] + tips1[6]
];

console.log(totalAmount[0]);
console.log(totalAmount[1]);
console.log(totalAmount[2]);
console.log(totalAmount[3]);
console.log(totalAmount[4]);
console.log(totalAmount[5]);
console.log(totalAmount[6]);



/* TEST DATA 
passed using array and arrow function method. */
const calcTip1 = bill => 
bill >= 50 && bill <= 300 ? 
bill * 0.15 : 
bill * 0.2;

const tips2 = [
    calcTip1(bills[0]), 
    calcTip1(bills[1]), 
    calcTip1(bills[2]), 
    calcTip1(bills[3]), 
    calcTip1(bills[4]), 
    calcTip1(bills[5]), 
    calcTip1(bills[6])
];

const totalAmount1 = [
    bills[0] + tips2[0], 
    bills[1] + tips2[1], 
    bills[2] + tips2[2],
    bills[3] + tips2[3], 
    bills[4] + tips2[4], 
    bills[5] + tips2[5], 
    bills[6] + tips2[6]
];

console.log(totalAmount1[0]);
console.log(totalAmount1[1]);
console.log(totalAmount1[2]);
console.log(totalAmount1[3]);
console.log(totalAmount1[4]);
console.log(totalAmount1[5]);
console.log(totalAmount1[6]);