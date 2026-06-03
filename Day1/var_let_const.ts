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

/* 
var age;                // Value assignment is not mandatory. 
console.log(age);       // undefined

let name;               // Value assignment is not mandatory. 
console.log(name);      // undefined

// const job;           // Value assignment is mandatory. 
// console.log(job);    // Error: Missing initializer in `const` declaration

const phone = 9945636877
console.log(phone);      //  Works because value is assigned at declaration
*/

// 3. Re-declaration

/* 
var age3 = 20;
var age3 = 30;

console.log(age3);        // Allowed

let name3 = "joysn"
let name3 = "joyson"     

console.log(name3);       // Error (Safer!)

const job3 = "master"
const job3 = "professor"   

console.log(job3);       //  Error (Safer!) 
*/

// 4. Re-assignment

/* 
var age4 = 50;
age4 = 60;        

console.log(age4);     // Allowed - 60

let name4 = "joyson ds"
name4 = "joyson dsouza"

console.log(name4);    // Allowed - joyson dsouza

const job4 = "worker"
job4 = "helper"

console.log(job4);    // TypeError: Assignment to constant variable. 
*/

// 5. Hoisting ----- Variable Access Before Declaration
//  var: Hoisted but initialized as undefined. 
//  let & const: Hoisted but not initialized (cannot be used before declaration). 

// console.log(age);
// var age = 50;          // undefined

// console.log(name);
// let name = "joyson"    // Cannot access 'name' before initialization

// console.log(job);
// const job = "worker"      // Cannot access 'job' before initialization



// done!