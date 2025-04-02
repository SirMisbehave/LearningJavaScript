/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_strings.asp

*/

// Using Quotes

let text = "John Doe"
console.log("Using Quotes:", text)

// You can use single or double quotes.

let carName1 = "Volvo XC60"
let carName2 = 'Volvo XC60'

console.log("Single or Double Quotes", carName1, carName2)

// Quotes Inside Quotes

let answer1 = "It's alright."
let answer2 = "He is called 'Johnny'."
let answer3 = 'He is called "Johnny".'

console.log("Quotes Inside Quotes:", answer1, answer2, answer3)

// Template Strings

let text1 = `He's often called "Johnny".`

console.log("Template Strings:", text1)

// String Length

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text2.length

console.log("String Length:", text2, length)

// Escape Characters

let text3 = "We are the so called \"Vikings\" from the north."
console.log("Escape Characters:", text3)

// Template Strings

let text4 = 
`The quick
brown fox
jumps over
the lazy dog.`

// JavaScript Strings as Objects

let x = "John"
let y = new String("John") // Strings can also be defined as objects.

console.log("JavaScript String:", x, y)

