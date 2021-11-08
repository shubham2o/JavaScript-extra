// 1
let myCountry = {
    country : "India",
    capital : "Delhi",
    language : "hindi",
    population : "1380",
    neighbours : [
        "Pakistan",
        "China",
        "Nepal",
        "Afghanistan",
        'Sri Lanka'
    ],
    describe : function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} :)
`)
    },
    checkIsland : function() {
        console.log(`${this.neighbours.length === 0 ? "True" : "False"}`)
    }
};


// 2
myCountry.describe();


// 3 
myCountry.checkIsland();