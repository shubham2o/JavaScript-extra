let bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];


const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? 
    bills * 0.15 : 
    bills * 0.2;
}


for (let i = 0; i <= bills.length - 1; i++) {
    console.log(`${i + 1} ~>
BILL = ${bills[i]},
TIP = ${calcTip(bills[i])},
TOTAL AMOUNT TO BE PAID = ${bills[i] + calcTip(bills[i])} /-
`);
}