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

//   Write a program to reverse a given number using a while loop.  


function reverse(num:number):number{

    let orgnum= Math.abs(num);

let reverse = 0;

// if(num<0){

//     throw new Error("negative number")
// }

while(orgnum>0)
{
    let lastdigit = (orgnum%10);
    reverse = (reverse*10) + lastdigit;
    orgnum = Math.floor(orgnum/10); 
}
console.log(`reverse of a given number (${num}) is : `)
return num < 0 ? -reverse : reverse ;
}

console.log(reverse(-1234));

//good..