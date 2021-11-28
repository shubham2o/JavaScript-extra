const lufthansa = {
    airline : "Lufthansa",
    iataCode : "LH",
    bookings : [],
    // book : function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(250, "Shubham");
lufthansa.book(300, "Stephen Curry");
console.log(lufthansa);

const book = lufthansa.book;

const eurowings = {
    airline : "Eurowings",
    iataCode : "EW",
    bookings : [],
}

/* Does not work
   book(011, "Klay Thompson"); */

// Call Method
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
book.call(eurowings, 111, "Klay Thompson");
console.log(eurowings);

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
book.call(lufthansa, 233, "Draymond Green")
console.log(lufthansa);

const swiss = {
    airline : "Swiss Airlines",
    iataCode : "LX",
    bookings : [],
}

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
book.call(swiss, 222, "Andrew Wiggins");
book.call(swiss, 333, "Jordan Poole");
console.log(swiss);

// Apply Method
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
const flightData = [555, "Kevon Looney"];
/* book.apply(swiss, flightData)
   this apply method is not that used anymore in modern javascript */

// Above can also be written as
book.call(swiss, ...flightData);
console.log(swiss);