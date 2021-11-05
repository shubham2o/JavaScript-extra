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
