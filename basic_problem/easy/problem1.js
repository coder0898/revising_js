// 1. Create a Personal Profile consist of name, age, city and isStudent. print them

let fullName = "Soham Sawant";
let age = 27;
let city = "Mumbai";
let isStudent = false;

// now to display them together instead of using log multiple time we use table
// console.table({ fullName, age, city, isStudent }); // for this we have to wrap them into either object or array.

console.log(
  `My name is ${fullName}. I am ${age} years old. I live in ${city}.`,
);
