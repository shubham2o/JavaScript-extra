const calcAverageHumanAge = function (ages) {

    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    console.log(`1> ` + humanAges);
    console.log(`2> ` + adults);

    const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
    return average;

}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(`3> ` + avg1);
console.log(`4> ` + avg2);