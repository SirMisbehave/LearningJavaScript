/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_object_constructors.asp

*/

// Object Type Person

function Person(first, last, age, eye) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}

const myFather = new Person("John", "Doe", 50, "blue")
const myMother = new Person("Sally", "Rally", 48, "green")
const mySister = new Person("Anna", "Rally", 18, "green")
const mySelf = new Person("Thing", "Stuff", 22, "green")

console.log(myFather, myMother, mySister, mySelf)

// Property Default Values

function Person1(first, name, age, eyeColor) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eyeColor
    this.nationality = "English"
}

// Adding a Property to an Object

myFather.nationality = "English"
console.log("Nationality", myFather)

// Adding a Property to a Constructor

Person.prototype.nationality = "English"
console.log("Prototype Nationality:", myFather, myMother, mySister, mySelf)

// Constructor Function Methods

function Person2(first, last, age, eyecolor) {
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyecolor = eyecolor
    this.fullName = function() {
        return this.firstName + " " + this.lastName
    }
}

const person_two = new Person2("Stuff", "Things", 25, "Brown")

console.log("Person 2:", person_two, "Person2 Function:", person_two.fullName())

// Adding a Method to an Object

myMother.changeName = function(name) {
    this.lastName = name
}

myMother.changeName("Otherthing")

console.log("My Mother:", myMother)

// Adding a Method to a Constructor

Person.prototype.changeName = function(name) {
    this.lastName = name
}

myMother.changeName("Doe")

console.log("Prototype Constructor:", myMother)