//Arrays



//creating an array

const arra1:any= [10,20,30,40,50];

//arra1 = [20];

let arra2 = [10,20,30,40,50];

arra2 = [20];

console.log(arra1);
console.log(arra2);

arra1[0] = 4;
arra1[1] = "joyson";
console.log(arra1);
console.log(arra1.length);    // length of the array


//Array methods

//push()
const browsers = ["Chrome","Firefox","Edge"]
browsers.push("Safari");
console.log(browsers);

//pop()
browsers.pop();
console.log(browsers);

//unshift
browsers.unshift("Safari");
console.log(browsers);

//shift
browsers.shift();
console.log(browsers);

//includes
console.log(browsers.includes("Chrome"));
console.log(browsers.includes("edge"));

//indexof
console.log(browsers.indexOf("Firefox"));
console.log(browsers.indexOf("Edge"));

//slice
let numbers = [10,20,30,40,50,60,70,80,90]
console.log(numbers.slice(1,4));
console.log(numbers);

//splice
let numbers1 = [10,20,30,40,50,60,70,80,90]
let num1 = numbers1.splice(1,2);
console.log(numbers1);

let num2 = numbers1.splice(1,0,20,30)
console.log(numbers1);

let num3 = numbers1.splice(1,2,100,200)
console.log(numbers1);

//concat
let arr1 = [10,20,30]
let arr2 = [30,40,50]

let arr3 = arr1.concat(arr2);
console.log(arr3);   // [ 10, 20, 30, 30, 40, 50 ]

//join
let names = ["joyson","david","john"]
let joinmethod1 = arr1.join();
let joinmethod2 = names.join(", ");
console.log(joinmethod1);   // 10,20,30
console.log(joinmethod2);   // joyson, david, john

//foreach
numbers1.forEach((number)=>
{
    console.log(number)
})    // 10 100 200 40 50 60 70 80 90

//map
let newarray = numbers1.map((number)=> number*2);
console.log(newarray);  //[20, 200, 400,  80, 100, 120, 140, 160, 180]

//filter
let newfilter = numbers1.filter((number)=> number>50);
console.log(newfilter); //[ 100, 200, 60, 70, 80, 90 ]

//find()
let newfind = numbers1.find((number)=> number>50);
console.log(newfind);   //100

//some()
let newsome = numbers1.some((number)=> number>50);
let newsome2 = numbers1.some((number)=> number>500);
console.log(newsome);    //true
console.log(newsome2);   //false

//every()
let newevery = numbers1.every((number)=> number>50);
let newevery2 = numbers1.every((number)=> number>5);
console.log(newevery);   //false
console.log(newevery2);  //true

//reduce()
let newreduce = numbers1.reduce((a,b)=>a+b,0);
console.log(newreduce);

//sort()
let newsort = [10,300,50,200,30,90,20];

newsort.sort();
console.log(newsort);

newsort.sort((a,b)=>a-b);
console.log(newsort);
newsort.sort((a,b)=>b-a);
console.log(newsort);

const testCases = [
    "Login",
    "Checkout",
    "Search",
    "Logout"
];

let somee = testCases.some((testcase)=>"CHECKOUT"===testcase.toUpperCase());
console.log(somee);


let numbers7 = [10,50,30,70,90]

console.log(...numbers7);


function add5(numbers5:number,...numbers6:number[])
{
    console.log(numbers5);
    console.log(numbers6);
}

add5(10,20,30,40,50,60);