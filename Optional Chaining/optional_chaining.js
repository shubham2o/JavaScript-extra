"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
    name : "Classico Italiano",
    location : "Via Angelo Tavanti 23, Firenze, Italy",
    categories : ["Italian", "Pizzeria", "Vegeterian", "Organic"],
    starterMenu : ["Focaccia", "Bruchetta", "Garlic Bread", "Caprese Salad"],
    mainMenu : ["Pizza", "Pasta", "Risotto"],
    openingHours : {
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
    },

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex, mainIndex, time, address}) {
        console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};


if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}


// WITH optional chaining
console.log(restaurant.openingHours.mon ?. open);
console.log(restaurant.openingHours ?. mon ?. open);


// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
    const open = restaurant.openingHours[day] ?. open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}


// Methods
console.log(restaurant.order ?. (0,1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto ?. (0,1) ?? `Method does not exist`);


// Arrays
const users = [{name : "Jonas", email : "jonas@gmail.com"}];
console.log(users[0] ?. name ?? `User array empty`);