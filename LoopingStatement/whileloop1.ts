// Write a program to calculate the sum of the first 10 natural numbers using a while loop. 
function sum() {
let i = 0;
let sum = 0;
while(i<=10)   
{
    sum = sum + i;
    i++;
}

console.log(`sum of the first 10 natural numbers is : ${sum}`);

}



sum();



// write a program to calculate the factorial of a given number using a while loop.  


function factorial(num:number){

    if(num<0){
        throw new Error("Factorial is not defined for negative numbers");
    }

let result = 1;
let current = num;

while(current>1)
{
    result *= current;
    current--;

}
console.log(`factorial of ${num} is ${result}`);
}

factorial(5);