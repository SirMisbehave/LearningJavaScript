/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_objects.asp

*/

// Creating a JavaScript Object

const person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    eyeColor: "blue" 
}

console.log("Person", person)

const person1 = {}

person1.firstName = "John"
person1.lastName = "Doe"
person1.age = 50
person1.eyeColor = "blue"

console.log("Person 1:", person1)

// Using the New Keyword

const person2 = new Object()

person2.firstName = "John"
person2.lastName = "Doe"
person2.age = 50
person2.eyeColor = "blue"

console.log("Person 2:", person2)

// Objects Methods

const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(person3)

// JavaScript Objects are Mutable

const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

console.log("Object Output:", person4)

const x = person4;
console.log("Output x as Person:", x)

x.age = 10
console.log("Person After Changing x:", person4)