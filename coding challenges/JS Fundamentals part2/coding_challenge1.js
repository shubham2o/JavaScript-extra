// TEST 
// DATA 1
const calcAverage = (score1, score2, score3) => {
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
        console.log(`DRAW! No team wins...`)
    }
}

/* Used let keyword to declare variables 
instead of const or var, so that it can 
override its value in future. */
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

checkWinner(avgDolphins, avgKoalas);



/* TEST 
DATA 2 ~ 
Old variables are overriden by not creating new 
variables using let, const or var keyword. */
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);