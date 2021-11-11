'use strict';

// Hoisting with variables
/*  console.log(me);   ~>  Error !!!
    console.log(job);   ~>  Error !!!
    console.log(year);   ~>  Error !!! */

var me = "shubham";
let job = "Teacher";
const year = 2000;



// Hoisting with functions (CONST AND LET)
console.log(addDec(3, 5));
/* console.log(addExpr(3, 0));   ~>  Error !!!
console.log(addArrow(3, 4));   ~>  Error !!! */

// Function Declaration 
function addDec(a, b) {
    return a + b;
}

// Function Expression
const addExpr = function(a, b) {
    return a + b;
}

// Arrow function expression
const addArrow = (a, b) => a + b;



// Hoisting with functions (VAR)
console.log(addDec1(3, 5));
/* console.log(addExpr1(3, 0));   ~>  Error !!!
console.log(addArrow1(3, 4));   ~>  Error !!!
console.log(addArrow1())   ~>  Error !!! */

// Function Declaration 
function addDec1(a, b) {
    return a + b;
}

// Function Expression
var addExpr1 = function(a, b) {
    return a + b;
}

// Arrow function expression
var addArrow1 = (a, b) => a + b;