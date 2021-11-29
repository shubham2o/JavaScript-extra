console.log(`<1>`);
const runOnce = function ()  {
    console.log(`This will never run again`);
};

runOnce();


// IIFE
console.log(`<2>`);
(function () {
    console.log(`This will never run again`);
})();


// Arrow Function 
console.log(`<3>`);
(() => console.log(`This will also never run again`))();


console.log(`<4>`);
{
    const isPrivate = 23;
    let isPrivateAlso = 30;
    var notPrivate = 46;

    console.log(isPrivate);
    console.log(isPrivateAlso);
    console.log(notPrivate);
}

console.log(`<5>`);
console.log(notPrivate);
// Below, both two will show error and will not execute.
console.log(isPrivate);
console.log(isPrivateAlso);