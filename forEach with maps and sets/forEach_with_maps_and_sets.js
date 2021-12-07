// forEach with Maps
const currencies = new Map ([
    ["USD", "United States Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound Sterling"],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`);
});


console.log(``);


// forEach with Sets
const currenciesUnique = new Set (["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value} : ${value}`);
});