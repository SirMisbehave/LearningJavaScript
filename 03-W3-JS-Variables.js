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

    Now according to W3 this is supposed to work automatically with the JavaScript detecting what it should be based on value? But I'm using Bun runtime, and it isn't allowing it. Potentially as a result of default TypeScript support, some rules are being applied even though I haven't configured it for TypeScript development.
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

// JavaScript Arithmetic - Algebra

let x = 5 + 2 + 3;
console.log("Arithmetic:", x);

// JavaScript Arithmetic - Strings

let x5 = "John" + " " + "Doe";
console.log("Arithmetic Strings:", x5);

// JavaScript Arithmetic - Mixed

// Also testing removing semi-colons as I think Bun runtime is allowing it very much like 
// TypeScript does, however this means I can't declare multiple variables on a single line. Which I 
// prefer to keep things nice, clean and readable.

let x6 = "5" + 2 + 3
console.log("Arithmetic Mixed:", x6) 

// The above is going to output '523' since due to one of the values being a string type, it treats 
// them all as the same data type.

// The following will add the first two as a number data type, then take that answer and 
// concantenate to the last string type value.
let x7 = 2 + 3 + "5"
console.log("Arithmetic Mixed Alternative:", x7)

// JavaScript Dollar Sign - An alias for main function in JavaScript library.

let $ = "Hello World"
let $$$ = 2
let $myMoney = 5

console.log($, $$$, $myMoney)

// JavaScript Underscore - An alias for hidden variables.

let _lastName = "Johnson"
let _x = 2
let _100 = 5

console.log(_lastName, _x, _100)