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
console.log(markMiller.calcBMI());



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
console.log(johnSmith.calcBMI());
