// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// (there is also the static version)

class Account {
    // 1. Public Fields (instances)
    locale = navigator.language;

    // 2. Private Fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}!`);
    }

    // 3. Public Methods
    // Public Interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
        }
    }

    // 4. Private Methods
    // #approveLoan(val) {
        _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account ("Shubham", "EUR", 1111, []);
console.log(acc1);
// console.log(acc1.#pin);
// console.log(acc1.#movements);

// console.log(acc1.#approveLoan(100));