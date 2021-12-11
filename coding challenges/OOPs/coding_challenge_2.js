/*
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accerlerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
*/ 

class CarCl {
    constructor (make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accerlerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h.`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accerlerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);