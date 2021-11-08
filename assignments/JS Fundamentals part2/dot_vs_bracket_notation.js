// 1
let myCountry = {
    country : "India",
    capital : "Delhi",
    language : "hindi",
    population : 1380,
    neighbours : [
        "Pakistan",
        "China",
        "Nepal",
        "Afghanistan",
        "Sri Lanka"
    ]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} :)
`);



// 2
myCountry.population += 20;
console.log(`${myCountry.population}`);

myCountry["population"] -= 20;
console.log(`
${myCountry.population}`);
