function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

const mixJuice = fruitProcessor(1, 2);
console.log(mixJuice);

const mixJuice1 = fruitProcessor(5, 10);
console.log(mixJuice1);