// METHOD 1
const shubham = {
    firstName : 'Shubham',
    lastName : 'Sharma',
    birthYear : 2000,
    job : 'Student',
    friends : ['Stephen', 'Klay', 'Dray'],
    hasDriversLicense : true,
    calcAge : function(birthYear) {
        return 2037 - birthYear;
    }
};

console.log("Method 1 ~ " + shubham.calcAge(2000));
console.log("Method 1 ~ " + shubham['calcAge'](2000));



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
        console.log(this.oneFriends);
        return 2037 - this.oneBirthYear;
    }
};

console.log("Method 2 ~ " + shubham1.oneCalcAge());



const shubham2 = {
    twoFirstName : 'Shubham',
    twoLastName : 'Sharma',
    twoBirthYear : 2000,
    twoJob : 'Student',
    twoFriends : ['Stephen', 'Klay', 'Dray'],
    twoHasDriversLicense : true,
    twoCalcAge : function() {
        this.age = 2037 - this.twoBirthYear;
        return this.age;
    }
};

console.log("Method 3 ~ " + shubham2.twoCalcAge());
console.log("Method 3 ~ " + shubham2.age);