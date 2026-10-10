// type aliases
type studentstructure =
{
    name: String;
    age: number;
    subject: string
}

//object 1
const student1 : studentstructure =
{
    name: "joyson",
    age: 27,
    subject: "Science"
}

//object 2
const student2 : studentstructure =
{
    name: "Royson",
    age: 20,
    subject: "Commerce"
}

//object 3
const student3 : studentstructure = 
{
    name: "Tilson",
    age: 29,
    subject: "Banking"
}

//function with type aliases and object
function specificstudentdetails(studentdetails:studentstructure)
{
    console.log("student name is : " + studentdetails.name);
    console.log("student age is : " + studentdetails.age);
    console.log("subject studying : " + studentdetails.subject);
}

specificstudentdetails(student1);
specificstudentdetails(student2);
specificstudentdetails(student3);

//destructuring

function specificstudentdetails2({name,age,subject}:studentstructure)
{
    console.log("student name is : " + name);
    console.log("student age is : " + age);
    console.log("subject studying : " + subject);
}

specificstudentdetails2(student1);
specificstudentdetails2(student2);
specificstudentdetails2(student3);

//renaming variables in destructuring

function specificstudentdetails3({name:studentname,age:studentage,subject:learning}:studentstructure)
{
    console.log("student name is : " + studentname);
    console.log("student age is : " + studentage);
    console.log("subject studying : " + learning);
}

specificstudentdetails3(student1);
specificstudentdetails3(student2);
specificstudentdetails3(student3);

//optional properties with type
type studentstructure2 = 
{
    name: string;
    age: number;
    subject?: string;
}

const student4:studentstructure2 =
{
    name: "john",
    age: 30
}

function specificstudentdetails4(studentdetails:studentstructure2)
{
    console.log(studentdetails.name);
    console.log(studentdetails.age);
    if(studentdetails.subject===undefined)
    {
        console.log("subject is not specified");
    }  
    else
    {
        console.log(studentdetails.subject);
    }  
}

specificstudentdetails4(student4)


// read only 

type studentstructure3 =
{
    name: string;
    age: number;
    readonly id: number;
}

const student5:studentstructure3 = 
{
     name: "joyson",
     age: 27,
     id: 2223795
}

//student5.id = 900;   gives an error

// Requirements
// 1. Create an interface named LoginData containing username: string, password: string, and an optional email?: string.
// 2. Create another interface named AdminData that extends LoginData and adds role: string.
// 3. Create an array named users of type LoginData[] containing two users: admin / admin123 and tester / test123.
// 4. Create an adminUser object of type AdminData with a username, password, and role "Administrator".
// 5. Write a function named displayLoginData() that accepts a LoginData object and prints its username.
// 6. Use a for...of loop to pass every object in the users array into the function.

interface LoginData 
{
    username: string;
    password: string;
    email?: string;
}
interface AdminData extends LoginData
{
    role: string;
}

const users:LoginData[] =
[{
    username: "admin",
    password: "admin123"
},
{
    username: "tester",
    password: "test123"
}]

const AdminUser:AdminData =
{
    username: "admin",
    password: "admin123",
    role: "Administrator"
}

function displayLoginData({username,password,email}:LoginData)
{
    console.log(username);
}

for(const user of users)
{
    displayLoginData(user)
}

//done