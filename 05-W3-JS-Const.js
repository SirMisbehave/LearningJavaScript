/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_const.asp

*/

/*

    The const keyword was introduced in ES6 (2015).
    Variables defined with const cannot be Redeclared.
    Variables defined with const cannot be Reassigned.
    Variables defined with const have Block Scope.

*/

// Cannot be Reassigned

const PI = 3.141592653589793
// PI = 3.14 -  This will cause an error.
// PI + 10   -  This will also cause an error.

// Must be Assigned

// The following will cause an error.
// const PI
// PI = 3.14

/*

    When to use JavaScript const?

    - A new Array
    - A new Object
    - A new Function
    - A new RegExp

*/

// Constant Arrays

const cars = ["Saab", "Volvo", "BMW"]
cars[0] = "Toyota"
cars.push("Audi")

console.log(cars)

// cars = ["Toyota", "Volvo", "Audi"] - ERROR

// Constant Object

const car = { type: "Fiat", model: "500", color: "white" }
car.color = "red"
car.owner = "Johnson"

console.log(car)

// car = { type: "Volvo", model: "EX60", color: "red" } - ERROR

// Block Scope - const

const x = 10

{
    const x = 2
    console.log("const Inner Scope:", x)
}

console.log("const Outer Scope:", x)