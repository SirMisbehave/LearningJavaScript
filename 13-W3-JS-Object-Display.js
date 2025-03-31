/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_object_display.asp

*/

// Object

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

let text = ""

for(let x in person) {
    text += person[x] + " "
}

console.log(text)

// Object.values()

const myArray = Object.values(person)
console.log(myArray)

// Object.entries()

const fruits = {
    Bananas: 300,
    Oranges: 200,
    Apples: 500
}

let text1 = ""
for(let [fruit, value] of Object.entries(fruits)) {
    text1 += fruit + ": " + value + "<br>"
}

console.log(text1)

// JSON.stringify()

let myString = JSON.stringify(person)
console.log(myString)