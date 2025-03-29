/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_functions.asp

*/

// The () Operator

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32)
}

let value = toCelsius(77)

console.log(value)

// Incorrect Parameters

function toCelsius1(fahrenheit) {
    return (5/9) * (fahrenheit - 32)
}

let value1 = toCelsius()

console.log(value1) // NaN

// Without ()

function toCelsius2(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)
}

let value2 = toCelsius2 // Returns the function itself. 

console.log(value2(30)) // Notice running value2 as a function since we returned the function itself.

// Functions Used as Variable Values

let x = toCelsius(77)
let text = "The temperature is " + x + " Celsius"

let text2 = "The temperature is " + toCelsius(77) + " Celsius" // Run function directly.
console.log(text2)

// Local Variables

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo"
    // code here CAN use carName
}

// code here can NOT use carName