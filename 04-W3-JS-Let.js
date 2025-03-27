/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_let.asp

*/

/* 

    JavaScript Let

    Keyword introduced in ES6 (2015).
    Variables declared with let have Block Scope.
    Variables declared with let must be Declared before use.
    Variables declared with let cannot be Redeclared in the same scope.

*/

// Block Scope

{
    let x = 2
}
// x cannot be used here.

// Global Scope

{
    var x = 2
}
console.log(x) // x1 CAN be used here.

// Let - Cannot be Redeclared

let x1 = "John Doe"
// let x = 0 - This will cause an error since it's a redeclaration.

// Var - Can be Redeclared

var x2 = "John Doe"
var x2 = 0

console.log(x2)

// Redeclaring Variables - In and Out Scopes - Var

var x3 = 10

{
    var x3 = 2
}

// the following should output 2 as redeclaring within the scope redeclares it outside as well. 
console.log(x3) 

// Redeclaring Variables - In and Out Scopes - Let

let x4 = 10

{
    let x4 = 2
    console.log("Inner Scope:", x4)
}

console.log("Outer Scope:", x4)