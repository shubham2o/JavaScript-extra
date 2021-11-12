"use strict";


var firstName = "Matilda";


const shubham = {
    firstName : "Shubham",
    year : 2000,
    // Regualar Function
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);

        // Function within a function ~ Inherited
        const self = this;                          // self or that method used but we can also use arrow method in this case
        const isMillenial = function() {
/*(ERROR!)  console.log(this);
            console.log(this.year >= 1981 && this.year <= 2000); */
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 2000);
        };
        isMillenial();
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
shubham.calcAge();