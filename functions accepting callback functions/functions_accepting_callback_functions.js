"use strict";
const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

// Higher Order Function
const transformer = function (str, fn) {
    console.log(`Original string <:> ${str}`);
    console.log(`Transformed string <:> ${fn(str)}`);
    console.log(`Transformed by <:> ${fn.name}`);     // name property is used here 
}


console.log(`1 = ~ = ~ = ~ = ~ = ~ = ~ = ~ = ~ = ~ >`);
transformer(`JavaScript is the best!`, upperFirstWord);
console.log(`
2 = ~ = ~ = ~ = ~ = ~ = ~ = ~ = ~ = ~ >`);
transformer(`JavaScript is the best!`, oneWord);