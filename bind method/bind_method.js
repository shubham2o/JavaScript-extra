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
book.call(eurowings, 111, "Klay Thompson");
console.log(eurowings);
book.call(lufthansa, 233, "Draymond Green")
console.log(lufthansa);

const swiss = {
    airline : "Swiss Airlines",
    iataCode : "LX",
    bookings : [],
}
book.call(swiss, 222, "Andrew Wiggins");
book.call(swiss, 333, "Jordan Poole");
console.log(swiss);
// Apply Method
const flightData = [555, "Kevon Looney"];
/* book.apply(swiss, flightData)
   this apply method is not that used anymore in modern javascript */
// Above can also be written as
book.call(swiss, ...flightData);
console.log(swiss);


// Bind Method
console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
const bookEW = book.bind(eurowings);
bookEW(255, "Steve Kerr");
console.log(eurowings);

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
const bookLH = book.bind(lufthansa);
bookLH(111, "Joe Lacob");
console.log(lufthansa);

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`);
const bookLX = book.bind(swiss);
bookLX(222, "Bob Myers");
console.log(swiss);

console.log(`||||||||||||||||||||||||||||||||||||||||||||||||||||||`); 
const bookEW99 = book.bind(eurowings, 999)
bookEW99("Angre Iguodala");
console.log(eurowings);

const bookEW33 = book.bind(eurowings, 333);
bookEW33("Mike Brown");
console.log(eurowings);