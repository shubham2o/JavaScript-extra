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
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    },
    orderPizza : function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


// 1> Destructuring

// This is SPREAD, because we are using it on the RIGHT HAND SIDE of the equal(=) operator.
const arr = [1, 2, ...[3,4]];

// This is REST, because we are using it on the LEFT HAND SIDE of the equal(=) operator.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log("1> " + a, b, others);
console.log("2> " + a);
console.log("3> " + b);
console.log("4> " + others);


// 2> Functions

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        console.log("5>         " + sum);
    }
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");

// Other Ingredients will be an empty array
restaurant.orderPizza("mushrooms");