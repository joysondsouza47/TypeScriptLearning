// var let const


//scope
//assignment
//reassignment
//redeclaration
//hosting

//var
//scope

let classroom = function(){

    
    var name = "joyson";  //assignment
    name = "dsouza"   //reassignment
    var name = "joy"  //redeclaration
    console.log("print this "+name)

    console.log(age);   //hosting
    var age;  //undefined   

}

classroom();

//let

let student1age = 23;     //assignment
// let student1age = 23;  //redeclaration
student1age = 17;         //reassignment

if(student1age >= 18)
{
    
    console.log("adult");

}
else
{
    console.log("minor")
}

//console.log(name1);
let name1;  //cannot access 'name1' before initialization

//const

const student2age = 23;     //assignment
// let student2age = 23;  //redeclaration
// student2age = 17;         //reassignment

if(student2age >= 18)
{
    
    console.log("adult");

}
else
{
    console.log("minor")
}

//console.log(name2);
//let name2;  //cannot access 'name1' before initialization-
//