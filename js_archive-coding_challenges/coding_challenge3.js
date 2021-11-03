// DOLPHINS
// DATA 1
let dolphinsData1_1 = 96; 
let dolphinsData1_2 = 108; 
let dolphinsData1_3 = 89;

let avgDolphinsData1 = (dolphinsData1_1 + dolphinsData1_2 + dolphinsData1_3) / 3;
console.log(`1> avgDolphinsData1 ~ ${avgDolphinsData1}`);

// DATA BONUS 1
let dataBonus1Dolphins1 = 97;
let dataBonus1Dolphins2 = 112;
let dataBonus1Dolphins3 = 101;

let avgDataBonus1Dolphins = (dataBonus1Dolphins1 + dataBonus1Dolphins2 + dataBonus1Dolphins3) / 3;
console.log(`2> avgDataBonus1Dolphins ~ ${avgDataBonus1Dolphins}`);

// DATA BONUS 2
let dataBonus2Dolphins1 = 97;
let dataBonus2Dolphins2 = 112;
let dataBonus2Dolphins3 = 101;

let avgDataBonus2Dolphins = (dataBonus2Dolphins1 + dataBonus2Dolphins2 + dataBonus2Dolphins3) / 3;
console.log(`3> avgDataBonus2Dolphins ~ ${avgDataBonus2Dolphins}`);



// KOALAS
// DATA 1
let koalasData1_1 = 88; 
let koalasData1_2 = 91; 
let koalasData1_3 = 110;

let avgKoalasData1 = (koalasData1_1 + koalasData1_2 + koalasData1_3) / 3;
console.log(`4> avgKoalasData1 ~ ${avgKoalasData1}`);

// DATA BONUS 1
let dataBonus1Koalas1 = 109;
let dataBonus1Koalas2 = 95;
let dataBonus1Koalas3 = 123;

let avgDataBonus1Koalas = (dataBonus1Koalas1 + dataBonus1Koalas2 + dataBonus1Koalas3) / 3;
console.log(`5> avgDataBonus1Koalas ~ ${avgDataBonus1Koalas}`);

// DATA BONUS 2
let dataBonus2Koalas1 = 109;
let dataBonus2Koalas2 = 95;
let dataBonus2Koalas3 = 106;

let avgDataBonus2Koalas = (dataBonus2Koalas1 + dataBonus2Koalas2 + dataBonus2Koalas3) / 3;
console.log(`6> avgDataBonus2Koalas ~ ${avgDataBonus2Koalas}`);



// AVG - 
// Dolphins and Koalas
if (avgDolphinsData1 > avgKoalasData1) {
    console.log(`7> Dolphins are the winners!`);
}
else if(avgDolphinsData1 < avgKoalasData1) {
    console.log(`7> Koalas are the winners!`);
}
else {
    console.log(`7> DRAW!`);
}



// Data Bonus 1 ~ 
// Dolphins1 and Koalas1
if (dataBonus1Dolphins1 > 100 || dataBonus1Koalas1 > 100){
    if (dataBonus1Dolphins1 > dataBonus1Koalas1) {
        console.log(`8> Dolphins are the winners!`);
    }
    else if (dataBonus1Dolphins1 < dataBonus1Koalas1) {
        console.log(`8> Koalas are the winners!`);
    }
}
else {
    console.log(`8> DRAW!`);
}

// Data Bonus 1 ~ 
// Dolphins2 and Koalas2
if (dataBonus1Dolphins2 > 100 || dataBonus1Koalas2 > 100){
    if (dataBonus1Dolphins2 > dataBonus1Koalas2) {
        console.log(`9> Dolphins are the winners!`);
    }
    else if (dataBonus1Dolphins2 < dataBonus1Koalas2) {
        console.log(`9> Koalas are the winners!`);
    }
}
else {
    console.log(`9> DRAW!`);
}

// Data Bonus 1 ~ 
// Dolphins3 and Koalas3
if (dataBonus1Dolphins3 > 100 || dataBonus1Koalas3 > 100){
    if (dataBonus1Dolphins3 > dataBonus1Koalas3) {
        console.log(`10> Dolphins are the winners!`);
    }
    else if (dataBonus1Dolphins3 < dataBonus1Koalas3) {
        console.log(`10> Koalas are the winners!`);
    }
}
else {
    console.log(`10> DRAW!`);
}



// Data Bonus 2 ~ 
// Dolphins1 and Koalas1
if (dataBonus2Dolphins1 > 100 || dataBonus2Koalas1 > 100){
    if (dataBonus2Dolphins1 > dataBonus2Koalas1) {
        console.log(`11> Dolphins are the winners!`);
    }
    else if (dataBonus2Dolphins1 < dataBonus2Koalas1) {
        console.log(`11> Koalas are the winners!`);
    }
}
else {
    console.log(`11> DRAW!`);
}

// Data Bonus 2 ~ 
// Dolphins2 and Koalas2
if (dataBonus2Dolphins2 > 100 || dataBonus2Koalas2 > 100){
    if (dataBonus2Dolphins2 > dataBonus2Koalas2) {
        console.log(`12> Dolphins are the winners!`);
    }
    else if (dataBonus2Dolphins2 < dataBonus2Koalas2) {
        console.log(`12> Koalas are the winners!`);
    }
}
else {
    console.log(`12> DRAW!`);
}

// Data Bonus 2 ~ 
// Dolphins3 and Koalas3
if (dataBonus2Dolphins3 > 100 || dataBonus2Koalas3 > 100){
    if (dataBonus2Dolphins3 > dataBonus2Koalas3) {
        console.log(`13> Dolphins are the winners!`);
    }
    else if (dataBonus2Dolphins3 < dataBonus2Koalas3) {
        console.log(`13> Koalas are the winners!`);
    }
}
else {
    console.log(`13> DRAW!`);
}



// AVG - DATA BONUS 1
// Dolphins and Koalas
if (avgDataBonus1Dolphins > avgDataBonus1Koalas && avgDataBonus1Dolphins >= 100) {
    console.log(`14> Ans. Acc. to the ques. ~ DOLPHINS ARE THE WINNERS!`);
}
else if (avgDataBonus1Dolphins < avgDataBonus1Koalas && avgDataBonus1Koalas >= 100) {
    console.log(`14> Ans. Acc. to the ques. ~ KOALAS ARE THE WINNERS!`);
}
else{
    console.log(`14> Ans. Acc. to the ques. ~ DRAW!`);
}



// AVG - DATA BONUS 2
// Dolphins and Koalas
if (avgDataBonus2Dolphins > avgDataBonus2Koalas && avgDataBonus2Dolphins >= 100) {
    console.log(`15> Ans. Acc. to the ques. ~ DOLPHINS ARE THE WINNERS!`);
}
else if (avgDataBonus2Dolphins < avgDataBonus2Koalas && avgDataBonus2Koalas >= 100) {
    console.log(`15> Ans. Acc. to the ques. ~ KOALAS ARE THE WINNERS!`);
}
else{
    console.log(`15> Ans. Acc. to the ques. ~ DRAW!`);
}