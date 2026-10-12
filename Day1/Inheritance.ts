// Parent class: BaseTest
// - static readonly framework = "Playwright"
// - Constructor with protected browserName: string
// - Method execute() that prints Executing test on Chrome when the browser name is "Chrome"
// Child class: LoginTest
// - Extends BaseTest
// - Constructor accepts browserName and private username: string
// - Uses super(browserName)
// - Overrides execute()
// - Calls super.execute() and then prints Logging in as admin


class BaseTest 
{
    static readonly framework = "playwright";
    constructor(protected browserName:string)
    {

    }
    execute():void{

        const browser = this.browserName.toLowerCase();
        if(browser ==="chrome")
        {
             console.log("Executing test on Chrome")
        }
        
    }
}

class LoginTest extends BaseTest
{
    constructor (browserName:string,private username : string)
    {
        super(browserName);
    }

    override execute():void
    {
        super.execute();
        console.log("Logging in as " + this.username)
    }
}

const obj = new LoginTest("Chrome","admin");

obj.execute();
