/* 
# Datatypes Conversion Confusion # 
>

*/

let score = 33 //find out which kind of data it is and it number
console.log(typeof score); 
console.log(typeof(score)); // another mathod 

let secondScore = "66" // that one is saying string
console.log(typeof(secondScore)); 

let valueInNumber = Number(secondScore) // but ther we change the data type to number again
console.log(typeof valueInNumber); 


let thirdScore = "99abc" // it's saying string 
console.log(typeof (thirdScore)); 

let valueinNumber = Number(thirdScore) // But there we completely change string to number 
console.log(typeof(valueinNumber)); 

// Let's chack what the inside of a valueInNumber, what it is 
console.log(valueinNumber); // it's saying NaN - Not a Number 

// "33" => 33 
// "33abc" => Nan
// true => 1, false => 0


let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

// 1 => true; 0 => false 
// "" => false 
// "hitesh" => true 


let someNumber = 44

let stringNumber = String(someNumber) // here we change number to a string 
console.log(stringNumber); // run the code 
console.log(typeof (stringNumber)); // chack that is it really change to a string or not 


// try conversion more by yourself 