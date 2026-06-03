// Datatypes
// number
// string
// boolean
// null
// undefined
// any
// union type
// void


// 1. Number 
//     Represents both integers and decimals (e.g., 42, 3.14). 
// 2. String 
//     Represents text data. 
//     Can be written in: 
//     Single quotes ('Hello') 
//     Double quotes ("Hello") 
//     Backticks (`Hello ${name}`) for template literals. 
// 3. Boolean 
//     Represents true or false values. 
//     Used in conditions (e.g., if (isLoggedIn) {...}). 
// 4. Null 
//     Represents an intentional empty value (let x = null). 
// 5. Undefined 
//     Represents a variable declared but not assigned (let y; → y is undefined). 
// 6. Any 
//     A flexible type that allows any value (disables TypeScript checks). 
//     Avoid using unless necessary (let z: any = "Hello"; z = 10;). 
// 7. Union Type 
//     Allows multiple types for a variable (let id: string | number = "123";). 
// 8. Void 
//     Used for functions that don’t return anything (function log(): void { 
//     console.log("Hi"); }). 


let age:number = 56;
console.log(age);

let name:string = "joyson";
console.log(name);

let task:boolean = true;
task = false;
console.log(task)

let work:null = null;
console.log(work);

let hobby:undefined
console.log(hobby);

let studentid:any = 23;
studentid = "joyson"
console.log(studentid);

let home:string|number|boolean = 34;
home = "joy";
home = true;
console.log(home);

function sum()
{
    let num1 = 10;
    let num2 = 20;
    let result = num1 + num2 ;
    let save = console.log(result);
}
sum()