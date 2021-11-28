"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 200 * numPassengers) {
    /* ES5 way of assigning default value when falsy value is returned.
    numPassengers = numPassengers || 1;  // This means whenever numPassengers is a falsy value (which undefined is), it will return 1 as a value by default.
    price = price || 200;                // This means whenever price is a falsy value (which undefined is), it will return 199 as a value by default.
    */

    const booking = {
        flightNum, 
        numPassengers, 
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 300);