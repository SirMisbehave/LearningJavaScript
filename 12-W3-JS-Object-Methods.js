/*

    Author: 	SirMisbehave
    Resource: 	W3 Schools - JavaScript
    URL:		https://www.w3schools.com/js/js_object_method.asp

*/

// Object

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

let person_name = person.fullName()
console.log("Object Method:", person_name)

let person_name1 = person.fullName
console.log("Object Method Definition:", person_name1)

// Adding a Method to an Object

person.name = function() {
    return this.firstName + " " + this.lastName
}

let name_method = person.name()
console.log("New Method:", name_method)

// Using JavaScript Methods

person.name_to_upper = function() {
    return (this.firstName + " " + this.lastName).toUpperCase()
}

let upper_name = person.name_to_upper()
console.log("New Upper Case Method:", upper_name)

console.log("Person Object", person)