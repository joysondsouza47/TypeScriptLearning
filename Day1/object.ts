let details = 
{
    name: "joyson",
    age: 45
}

console.log(details);

let details2 :
{
    name: string;
    age: number;
    job?: string;
} =
{
    name: "joyson",
    age: 29,
    job: "employed"
}


details.name = "john";
delete details2.job;
console.log(details2);


let nested :
{
    name: string;
    age: number;
    details:
    {
        job: string;
        salary: number;
        grade: string;
    }
    contact: number;
} = 
{
    name: "joyson",
    age: 28,
    details:
    {
        job: "system engineer",
        salary: 30000,
        grade: "C1",
    },
    contact: 9945636877
}

nested.age = 27;
nested.details.salary = 32000;

console.log(nested);

//array of objects

let arrobject = 
[
    {
        name: "joyson",
        age: 27
    },
    {
        name: "john",
        age: 38
    },
    {
        name: "david",
        age: 54
        
    }
]
console.log(arrobject[0].name);
console.log(arrobject[1].name);
console.log(arrobject[2].name);

console.log(arrobject);

for(const arr of arrobject)
{
    console.log(arr.name);
    if(arr.age===null)
    {
        console.log("Age is not mentioned for "+ arr.name)
        continue;
    }
    console.log(arr.age)
}



let object1 =
{
    name: "joyson",
    age: 27
}

function fun1(obj:
    {
        name: string;
        age: number;
    })   
{
    console.log(obj.name);
    console.log(obj.age);
}

fun1(object1);


function fun2({name,age}:typeof object1)
{
    console.log(name);
    console.log(age);
}

fun2(object1)

function fun3({name:studentname,age:limit=34}:{
    name: string;
    age?: number;
})
{
    console.log(studentname);
    console.log(limit);
}

fun3({name:"joyson"})