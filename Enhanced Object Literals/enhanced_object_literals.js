"use strict";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const hours = {
    [weekdays[3]] : {
        open : 12,
        close : 22,
    },
    [weekdays[4]] : {
        open : 11, 
        close : 23,
    },
    [weekdays[5]] : {
        open : 0, // Open 24 Hours
        close : 24,
    },
};

const restaurant = {
    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italian", "Pizzeria", "Vegeterian", "Organic"],
    starterMenu : ["Focaccia", "Bruchetta", "Garlic Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"],

    // ES6 enhanced object literals
    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex, mainIndex, time, address}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

console.log(restaurant);
console.log(restaurant.hours);