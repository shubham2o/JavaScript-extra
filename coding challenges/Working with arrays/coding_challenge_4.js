const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs); 
console.log(``);


// 2.
const dogSarah = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? "much" : "little"}.`);
console.log(``);


// 3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
    // .flat()
console.log(ownersEatTooMuch);

const ownersEatTooLess = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLess);
console.log(``);


// 4.
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much!`);
console.log(`${ownersEatTooLess.join(" and ")} dogs eat too little!`);
console.log(``);


// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));
console.log(``);


// 6.
console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));
console.log(``);


// 7.
const checkEatingOkay = dogs
    .filter(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)
    .flatMap(dog => dog.owners);
console.log(checkEatingOkay);
console.log(``);


// 8.
const dogsSorted = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);