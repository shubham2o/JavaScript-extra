// TEST 
// DATA 1
let calcAverage = (score1, score2, score3) => {
    const totalScore = score1 + score2 + score3;
    const average = totalScore / 3;
    return average;
}

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win. (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win. (${avgKoalas} vs ${avgDolphins})`);
    }
    else {
        console.log(`DRAW! Both team wins.`)
    }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);