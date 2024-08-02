console.log("Hello!");

// Create Objects - using liberal notation
// Objects have properties and properties have values.
// The keyword of the property should be a string and it should be unique.
let person1 = {
    firstName : "Muath",
    // Adding a second property.
    // If the key is multiword, wrap it between double quotes. 
    // If the key is multiword, you cannot use dot notation. It gives you a syntax error. You can use array notation instead.
    "last name" : "Alzghool",
    age : 19,
    lastAccess : new Date(),
    address : {streetNumber: 18, streetName: "Altavista Dr", city: "Ottawa"},
    print : function(){console.log(`The name is ${this.firstName} ${this['last name']} and the age is ${this.age}`)}
};

// Accessing the property using dot notation.
console.log(person1.firstName); // Muath 
// Accessing the property using array notation.
console.log(person1["firstName"]);
console.log(person1["last name"]);
console.log(person1.age); // 19
// Changing the value of a keyword.
person1.age = 49;
console.log(person1.age); // 49
console.log(person1.lastAccess);
console.log(person1.address.city); // Ottawa

person1.print();
person1.height = "176 cm";
console.log(person1.height);


// Creat Objects - using function constructor
function Person2(first="xxx", last="yyy", age="18") {
    // Intialize the first name object to first.
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Date();
    this.print = function(){console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)};
}

let p1 = new Person2('Sam', 'Tom', 34);
let p2 = new Person2('Mia', 'Ron', 10);
let p3 = new Person2();

console.log(p1.firstName); // Sam
p1.print();
p2.print();
p3.print();

// Adding new properties to the objects using prototype.
Person2.prototype.height = "166 cm";

console.log(p1.height) // 166 cm
console.log(p2.height) // 166 cm
console.log(p3.height) // 166 cm

// Create Object using classes
class Person3 {
    #firstName;
    lastName;
    age;
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print() {
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`)
    }
}

let p4 = new Person3("Max", "Mutaz", 14);
p4.print();
// console.log(p4.#firstName); // This line will give an error as firstName is set to private using the #

class Student extends Person3 {
    grade;
    constructor(first, last, age, g) {
        super(first, last, age);
        this.grade = g;
    }
}
let s1 = new Student("DD", "MM", 88);
s1.print();
console.log(s1.grade);