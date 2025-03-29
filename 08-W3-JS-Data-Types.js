/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_datatypes.asp

*/

/*

    8 Data Types

    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object

    Object Data Type

    The object data type can contain both built-in objects, and user defined objects:

    objects, arrays, dates, maps, sets, intarrays, floatarrays, promises and more.

*/

// Numbers
let length = 16
let weight = 7.5

console.log("Numbers:", length, weight)

// Strings
let color = "Yellow"
let lastName = "Johnson"

console.log("Strings:", color, lastName)

// Booleans
let x = true
let y = false

console.log("Booleans:", x, y)

// Object
const person = { firstName: "John", lastName: "Doe" }

console.log("Object:", person)

// Array Object
const cars = ["Saab", "Volvo", "BMW"]

console.log("Array Object:", cars)

// Date Object
const date = new Date("2022-03-25")

console.log("Date Object:", date)

// JavaScript Strings

let carName1 = "Volvo XC60" // Using Double Quotes
let carName2 = "Volvo XC60" // Using Single Quotes

let answer1 = "It's alright."
let answer2 = "He is called 'Johnny'."
let answer3 = 'He is called "Johnny".'

// JavaScript Numbers

let x1 = 34.00  // With Decimals

let x2 = 34     // Without Decimals

// Exponential Notation

let y1 = 123e5
let z = 123e-5

// JavaScript BitInt

let x3 = BigInt("123456789012345678901234567890")

// JavaScript Booleans

let x4 = 5
let y4 = 5
let z4 = 6

console.log(x4 == y4) // Return True
console.log(x4 == z4) // Returns False

// JavaScript Arrays

const cars1 = ["Saab", "Volvo", "BMW"]

// JavaScript Objects

const person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }
console.log("JavaScript Objects:", person1)

// The typeof Operator

console.log(typeof "")
console.log(typeof "John")
console.log(typeof 0)

// Undefined
let car
console.log(car)