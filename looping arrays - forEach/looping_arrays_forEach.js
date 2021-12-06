const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const m of movements) {} )
for (const m of movements) {
    if (m > 0) {
        console.log(`+ You deposited ${m}`);
    }
    else {
        console.log(`(-) You withdrew ${Math.abs(m)}`);
    }
}

console.log(``);

// movements.forEach(function (m) {} ) 
movements.forEach(function (m) {
    if (m > 0) {
        console.log(`+ You deposited ${m}`);
    }
    else {
        console.log(`(-) You withdrew ${Math.abs(m)}`);
    }
});

console.log(``);

// for (const [i, value] of movements.entries() {} )
for (const [i, value] of movements.entries()) {
    if (value > 0) {
        console.log(`+ Movement ${i + 1}: You deposited ${value}`);
    }
    else {
        console.log(`(-) Movement ${i + 1}: You withdrew ${Math.abs(value)}`);
    }
}

console.log(``);

// movements.forEach(function (m, i, arr) {} )
movements.forEach(function (m, i, arr) {
    if (m > 0) {
        console.log(`+ Movement ${i + 1}: You deposited ${m}`);
    }
    else {
        console.log(`(-) Movement ${i + 1}: You withdrew ${Math.abs(m)}`);
    }
});