function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    console.log(juice);
    return juice;
}
const mixJuice = fruitProcessor(3, 5);
console.log(mixJuice);