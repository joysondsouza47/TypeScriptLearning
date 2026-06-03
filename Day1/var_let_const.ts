// variable can be declared using var let and const

/* 
1. scope
2. value assignment
3. re-declaration
4. re-assignment
5. hoisting
*/

/* shift + alt + A  for multi line comment*/

// SCOPE
// Function Scope and Block Scope

// var -> Function scope and Block scope

/* 
function age()
{
    if (true)
    {
        var message = "hello world!"
        console.log(message) // in block scope
    }
    console.log(message) // in function scope
}

age(); 
*/

// let and const -> only block scope


/* 

function age()
{
    if (true)
    {
        let message = "hello world!"
        const word = "paper"
        console.log(message) // only in block scope
        console.log(word) // only in block scope
    }
    // console.log(message) // not in scope outside the block
    // console.log(word)    // not in scope outside the block
}

age();

*/

// 2. value assignment

var age;                // Value assignment is not mandatory. 
console.log(age);       // undefined

let name;               // Value assignment is not mandatory. 
console.log(name);      // undefined

// const job;
// console.log(job); 