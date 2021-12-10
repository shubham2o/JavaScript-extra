const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accerlerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accerlerate();
bmw.accerlerate();
bmw.brake();
bmw.accerlerate();
bmw.brake();
bmw.brake();
bmw.accerlerate();
bmw.brake();
bmw.accerlerate();

console.log(``);

mercedes.brake();
mercedes.accerlerate();
mercedes.accerlerate();
mercedes.brake();
mercedes.accerlerate();
mercedes.brake();
mercedes.brake();
mercedes.accerlerate();
mercedes.brake();