// MARK MILLER'S
// BMI
const markMiller = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
    }
};
console.log(`1> Mark Miller's BMI is ${markMiller.calcBMI()}...`);



// JOHN SMITH'S
// BMI
const johnSmith = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
console.log(`2> John Smith's BMI is ${johnSmith.calcBMI()}...`);



// Who has higher BMI among 
// these two? compare!
console.log(`3> ${markMiller.calcBMI() > johnSmith.calcBMI() ? 
    `Mark Miller's BMI (${markMiller.calcBMI()}) is higher than John Smith's (${johnSmith.calcBMI()})` : 
    `John Smith's BMI (${johnSmith.calcBMI()}) is higher than Mark Miller's (${markMiller.calcBMI()})`}`
);