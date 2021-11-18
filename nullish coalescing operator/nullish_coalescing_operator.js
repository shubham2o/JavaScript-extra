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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 20;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);