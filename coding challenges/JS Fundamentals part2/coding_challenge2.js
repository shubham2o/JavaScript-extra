let bills = [125, 555, 44, 50, 10, 100, 1000];
let tips;
let total;

for (let i = 0; i <= bills.length - 1; i++) {
    if (bills[i] >= 50 && bills[i] <= 300){
        tips = (15 / 100) * bills[i];
        total = bills[i] + tips;
        console.log(

            `${[i + 1]}> The bill was ${bills[i]}, the tip was ${tips}, and the total amount payable is ${total} ...`);
    }
    else {
        tips  = (20 / 100) * bills[i];
        total = bills[i] + tips;
        console.log(

            `${[i + 1]}> The bill was ${bills[i]}, the tip was ${tips}, and the total amount payable is ${total} ...`);
    }
}
