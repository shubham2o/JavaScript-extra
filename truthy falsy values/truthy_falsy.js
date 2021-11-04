console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Shubham'));
console.log(Boolean(''));
console.log(Boolean({}));



const money = 0;        // It will be false as discussed above in the truthy and falsy values
if(money) {
    console.log(`Don't spend it all! ~ True`);
}
else {
    console.log(`You should get a job! ~ False`);
}



const money2 = 100;     // It will be true as discussed above in the truthy and falsy values
if(money2) {
    console.log(`Don't spend it all! ~ True`);
}
else {
    console.log(`You should get a job! ~ False`);
}