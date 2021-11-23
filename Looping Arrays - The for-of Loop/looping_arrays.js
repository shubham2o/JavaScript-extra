"use strict";

const restaurant = {
    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italian", "Pizzeria", "Vegeterian", "Organic"],
    starterMenu : ["Focaccia", "Bruchetta", "Garlic Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"],
    openingHours : {
        thu : {
            open : 12,
            close : 22,
        },
        fri : {
            open : 11, 
            close : 23,
        },
        sat : {
            open : 0, // Open 24 Hours
            close : 24,
        },
    },
    order : function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery : function ({starterIndex, mainIndex, time, address}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
    console.log(item);
}
for (const item of menu.entries()) {
    console.log(item);
}
console.log([...menu.entries()]);
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}