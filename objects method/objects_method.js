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