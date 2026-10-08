//function declaration

quote();
function quote() 
{
    console.log("welcome to learn functions");
}


function add2():number
{
    return (12+12);
}

console.log(add2());

function add1(a:number,b:number) : number
{
    return (a+b);
}

console.log(add1(50,50));




const fun1 = function():void
{
    console.log("function expression")
}

fun1();


const fun2 = ():void=>
{
    console.log("arrow function");
}

fun2();

const fun3 = (a:number,b:number):number =>
{
    console.log("arrow function");
    return a+b;
}

console.log(fun3(45,56));


class adding 
{

    message1()
    {
        console.log("this is a method in class");
    }


    message2 = (): number =>
    {
        console.log("arrow function in class")
        return (12+12);
    }
}

const obj = new adding();
obj.message1();
console.log(obj.message2());

function studentdetails(name:string,age:number,phonenumber?:number)
{
    console.log(name);
    console.log(age);
    console.log(phonenumber);
}

studentdetails("joyson",27,9945636877)
studentdetails("royson",20)


function studentdetails2(name:string,age:number,phonenumber?:number,nationality="indian")
{
    console.log(name);
    console.log(age);
    console.log(phonenumber);
    console.log(nationality);
}



function addition(a:number,b:number)
{
    console.log("addition of two numbers",a+b)
    console.log("multiplication of two numbers",a*b)
}


function total(c:number,callback:(a:number,b:number)=> void):number
{
    callback(20,90);
    console.log("all done")
    return (c+50);
    
}

console.log(total(12,addition));

console.log(total(12,(number=12)=>
{
    console.log("arrow callback function")
}));



function area1(a:number):number;


function area1(a:string):string;


function area1(a:string|number):string|number
{
      return a;
}

console.log(area1(12));
console.log(area1("joyson"));