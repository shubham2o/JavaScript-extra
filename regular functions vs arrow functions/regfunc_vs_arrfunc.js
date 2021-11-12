"use strict";

var firstName = "Matilda";

const shubham = {
    firstName : "Shubham",
    year : 2000,
    // Regualar Function
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    // Arrow Function
    greetArr : () => {  
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
    // Regualar Function
    greetReg : function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};

shubham.greetArr();
shubham.greetReg();