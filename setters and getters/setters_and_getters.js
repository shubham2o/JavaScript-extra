class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(" ")) {
            this._fullName = name;
        }
        else {
            alert(`${name} is not a full name!`);
        }        
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);

console.log(jessica.age);