const shubham = {
    firstName : 'Shubham',
    lastName : 'Sharma',
    birthYear : 2000,
    job : 'Student',
    friends : ['Stephen', 'Klay', 'Dray'],
    hasDriversLicense : true,
    calcAge : function(birthYear) {
        return 2037 - 2000;
    }
};

console.log(shubham.calcAge());



const shubham1 = {
    oneFirstName : 'Shubham',
    oneLastName : 'Sharma',
    oneBirthYear : 2000,
    oneJob : 'Student',
    oneFriends : ['Stephen', 'Klay', 'Dray'],
    oneHasDriversLicense : true,
    oneCalcAge : function() {
        console.log(this);
        console.log(this.oneFirstName);
        console.log(this.oneLastName);
        return 2037 - this.birthYear;
    }
};

console.log(shubham1.oneCalcAge());