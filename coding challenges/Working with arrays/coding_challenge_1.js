const checkDogs = function (dogsJulia, dogsKate) {

    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    /* "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
    �")*/
    dogs.forEach(function(dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
        }
        else {
            console.log(`Dog number ${i + 1} is still a puppy, and is ${dog} years old.`);
        }
    })

};

// TEST DATA 1
console.log(`TEST DATA 1`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// TEST DATA 2
console.log(`
TEST DATA 2`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);