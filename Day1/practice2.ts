function processTestResult(result: unknown): void {

    if(typeof result === "string")
    {
        console.log("Test Status: " + result.toUpperCase())
    }
    else if (typeof result === "number")
    {
        console.log("Execution Time: "+ result +" ms")
    }
    else if (typeof result === "boolean")
    {
        console.log("Test Successful: " + result)
    }
    else
    {
        console.log("enter a valid input")
    }
    

}

processTestResult("passed");
processTestResult(1200);
processTestResult(true);



type Result =
{
    [name:string]:string;
}

const result:Result =
{
    name: "joyson",
    password: "1234"
}

result.name = "joysonn"
console.log(result.name);

result.ada = "joyson";
console.log(result)
