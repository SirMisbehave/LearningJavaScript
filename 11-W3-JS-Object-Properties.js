/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_object_property.asp

*/

// Object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// Accessing JavaScript Properties

let age = person.age
console.log("Dot Notation Access:", age)

let age1 = person["age"]
console.log("Array Access:", age1)

let x = "age"
let age2 = person[x]
console.log("Assigned Array Access:", age2)

console.log("Dot Notation:", person.firstName + " is " + person.age + " years old.")
console.log("Array:", person["firstName"] + " is " + person["age"] + " years old.")

let y = "firstName"
console.log("Assigned Array:", person[x] + " is " + person[y] + " years old.")

// Adding New Properties

person.nationality = "English"
console.log("New Properties", person)

// Deleting Properties

delete person.age
console.log("Delete Properties:", person)

// Nested Objects

let myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

let p1 = "myCars"
let p2 = "car2"

console.log("Dot Notation:", myObj.myCars.car2)
console.log("Dot & Bracket Notation:", myObj.myCars["car2"])
console.log("Bracket Notation:", myObj["myCars"]["car2"])
console.log("Assigned Bracket Notation:", myObj[p1][p2])