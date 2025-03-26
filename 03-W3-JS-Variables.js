/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_variables.asp

*/

// JavaScript Variables

/* 

    Undeclared Variable

    x = 5;
    y = 6;
    z = x + y;

*/

// Declaration Using Var

var x2 = 5;
var y2 = 6;
var z2 = x2 + y2;

console.log("Declaration Using Var, z2:", z2);

// Declaration Using Let

let x3 = 5;
let y3 = 6;
let z3 = x3 + y3;

console.log("Declaration Using Let, z3:", z3);

// Declaration Using Const

const x4 = 5;
const y4 = 6;
const z4 = x4 + y4;

console.log("Declaration Using Const, z4:", z4);

// Mixed Example

const price1 = 5;
const price2 = 6;

let total = price1 + price2;

console.log("Mixed Example Declaration, total:", total);

// One Statement - Many Variables

let person = "John Doe", carName = "Volvo", price = 200;

console.log("Person, Car Name & Price:", person, ",", carName, ",", price);

// JavaScript Arithmetic

let x = 5 + 2 + 3;
console.log("Arithmetic:", x);