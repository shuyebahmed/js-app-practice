/* 
# Let, Const, & Var # 
Information that we are gonna to store on our database for a user based apps like amazon:
>Name 
>Email 
>Password 
>Username 

const > non changable 
variable > Changable (var - variable)
let > Changable (let - variable)
*/

const accountID = 45112070
let accountEmail = "shuyebinfo@gmail.com"
var accountPassword = "234567"
accountCity = "London"  // Don't use this for variable istead use let always 
let accountState; // its gonna be undefined 

console.log ("Hello Tester!")

// accountID = 2345

console.log (accountID);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail = "ahmedinfo@gmail.com"
accountPassword = "93489384"
accountCity = "Barmingham"


console.table([accountEmail, accountPassword, accountCity, accountState])

let userName = "mdshuyeb"
let passWord = "Shuyeb2525Ahemd#"
let userID = "45112072"

console.table([userName, passWord, userID])