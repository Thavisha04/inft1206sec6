// There are two ways to define a function.
// 1. Function Declaration
// 2. Function Expression

// Function Declaration

// Function with no parameter, no return value.
function greeting1() {
    console.log("Hello");
}
greeting1();


// Function with no parameter, with return value.
function greeting2() {
    return "Hello";
}
// 1 way to print it.
let str = greeting2();
console.log(str);
// another way to print it.
console.log(greeting2());


// Function with parameter and return value.
function greeting3(name) {
    //return "Hello " + name;
    //return 'Hello ' + name;
    //return `Hello ` + name;
    return `Hello ${name}`;
}
console.log(greeting3("Thavisha"));
console.log(greeting3(5));
console.log(greeting3());

function greeting4(name='Sam') {
    //return "Hello " + name;
    //return 'Hello ' + name;
    //return `Hello ` + name;
    return `Hello ${name}`;
}
console.log(greeting4('Tom'));


function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(3,5));
// Concatenation.
console.log(sum("3","5"));
console.log(sum('Hello', 'Thavisha'))
console.log(sum(3)); // Because 3 plus undefined is NaN.
console.log(sum(3,5,9));


function sum1(num1=0, num2=0) {
    return num1 + num2;
}
console.log(sum1());

// Function Expression
let m = sum1();
console.log(m);
console.log(typeof(m));

// The data type of f is a function.
let f = sum;
console.log(typeof(f));
console.log(f(6,10)); // This will work as f is a function at this point.

f = 9;
// console.log(f(6,10)); // This will give an error as f is a number at this point.

// Function without a name.
// The name of the function is f2.
// To prevent changing the value of f2 in the future we use f2.
const f2 = function() {
    return "Good Afternoon";
}
console.log(f2());


// Shortcut of function expression.
// The arrow method.
// no need to add the return statements. 
// Because this function does not have anything except for the retunr good afternoon, we dont have to add the curly braces.
const f3 = ()=> "Good Afternoon"; 
console.log(f3());

const sum2 = function(num1=0, num2=0) {
    return num1+num2;
}
// function sum2 and function sum3 are equivalent.
const sum3 = (num1=0, num2=0)=>num1+num2;

console.log(sum2(2,3));
console.log(sum3(2,3));


// var a = prompt("Enter first number"); // enter 11
// var b = prompt("Enter second number"); // enter 12
// var result = a + b;
// console.log("The result is " + result); 

// Parsing always work from LEFT to RIGHT.
// Number() will try to convert the whole thing instead of tring left to right. If the values are not a number it will return NaN.

console.log(Math.max(7,22,-1,0,45,800));
console.log(Math.round(0.4234));
console.log(Math.round(0.52));

// Array is an object so it has properties and buttons.

