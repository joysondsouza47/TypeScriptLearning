// Dynamic typed -  checked at runtime
// Statically typed -  checked at compile time

//JavaScript is Not Type-Safe 
//    const result = "5" + 3; // JavaScript converts 3 to string 
//    console.log(result);    // Output: "53" (not 8) 
 
//    No error, but the result may not be what you intended. 

//   TypeScript is Type-Safe 
// • TypeScript prevents operations between incompatible types. 
// • Example: 
//     const result: number = "5" + 3;  //Error: Type 'string' is not assignable to type 'number' 
 
//     TypeScript warns you about potential bugs early.

// const result = "4" + 5;
// console.log(result);            

// const result:number = "4" + 5;     only when datatype is applied the type safety works
// console.log(result);             // Error: Type 'string' is not assignable to type 'number' 
// this feature is available only in typescript in java we cannot assign the data types manually


//  Type Annotation
//  Type Inference

//  Type Annotation -- explicitly telling the type of variable.
//  example ---- :number  :boolean  :string

//  Type Inferrence -- automatically guesses the type if you don’t annotate it
//  let message = "Hello";       // TypeScript infers `message` as `string` 
//  let count = 42;              // TypeScript infers `count` as `number` 
//  message = 123;               // Error (TypeScript knows `message` must stay a string) 

// Key Differences: 
// • Type Annotation: You manually define the type. 
// • Type Inference: TypeScript intelligently figures it out. 