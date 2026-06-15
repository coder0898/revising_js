//variables

const accountId = 123456;
let accountEmail = "coder@gmail.com";
var accountPassword = "pass1234";
accountCity = "Seoul";

// in javascript some word are reserved for special use, so we can't use them for anyother purpose.They are called keywords.
// const, let and var are these reserved wrods. we use them to declare variables.

// accountId = 234567;// a variable declared with const can't be reassigned. It will throw an error if we try to reassign it.

accountEmail = "coder@yahoo.com";
accountPassword = "pass5678";
accountCity = "Mumbai";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
//we got const value as it is not reassigned, but other variables are reassigned and we got the new values in the output.
// this means the variables declared with let and var can be reassigned but the variable declared with const can't be reassigned.

//now we only use two keywords to declare variables in javascript, which are const and let. var is not recommended to use because it has some issues with scope and hoisting. so we should avoid using var and use let and const instead.
