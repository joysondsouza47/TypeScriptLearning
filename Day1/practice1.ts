class LoginTest {
    username = "admin";

    executeLogin(): void {
        console.log("Executing login for " + this.username);
    }
}

class PaymentTest {
    transactionId = 101;

    executePayment(): void {
        console.log("Executing payment " + this.transactionId);
    }
}

function runTest(test: LoginTest | PaymentTest): void {

    if("username" in test)
    {
        console.log("Login property found");
    }

    if(test instanceof LoginTest)
    {
        test.executeLogin();
    }
    else
    {
        test.executePayment();
    }

}

runTest(new LoginTest());
runTest(new PaymentTest());
// Requirements
// 1. Use the in operator to check whether test has the username property.
// 2. If the property exists, print "Login property found".
// 3. Use instanceof LoginTest to check whether the object is an instance of LoginTest.
// 4. If it is, call test.executeLogin().
// 5. Otherwise, check instanceof PaymentTest and call test.executePayment().