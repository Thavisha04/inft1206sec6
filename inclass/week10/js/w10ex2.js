console.log("Hello");

// scope of the variables:
// 1 - Global scope (Accessible anywhere inside the script)
//   a - Any variable declared using 'var' keyword or 'let' keyword outside the functions.
// Any variable declared WITHOUT var or let or const keywords. (But it is not a good practice)

// 2 - Function scope (local scope)
//   a - Any variable declared using 'var' keyword inside the function.

// 3 - Block scope
//   a - Any variable declared using let keyword inside the block.

var g = 10;
//You can also do this instead of var --> let g = 10;

console.log("(outside the function) g="+g);

function todo() {
    console.log("(inside the function) g="+g);
    let a = 5;
    console.log("(inside the function) a="+a);

    {
        var b = 22;
        console.log("(inside the block) b="+b);

        let c = 100;
        console.log("(inside the block) c="+c);
    }
    console.log("(inside the block) b="+b); // This will not give an error as b is still insdie the function even though it is outside of the block.
    // console.log("(inside the block) c="+c); // This will give an error as c has the let keyword and it follows the block scope rule.

    d = 150;

}
todo();
// console.log("(outside the function) a="+a); // This will give an error as the variable a is created insdie the function.
console.log("(outside the function) d="+d);



