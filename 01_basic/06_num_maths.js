// number is a data type that represents numeric values. In JavaScript, numbers can be integers or floating-point numbers.

//  to define a number we can directly assign a numeric value to a variable.

let num1 = 10;
// console.log(num1);

//  we can also use the Number() constructor to create a number.
let num2 = new Number(20);
// console.log(num2);

// now here the difference between num1 and num2 is that num1 is a primitive data type and num2 is an object. We can check the type of a variable using the typeof operator.
// console.log(typeof num1); // "number"
// console.log(typeof num2); // "object"
// and with num 2 we get various menthods and properties that we can use to perform various operations on numbers. For example, we can use the toFixed() method to round a number to a specified number of decimal places.
let num3 = 10.123456;
// console.log(num3.toFixed(2)); // "10.12"

// this is all about numbers in javascript.

///////////////////////////////////////////////////////////////////////////////////////////

//math is a built-in object that provides various mathematical constants and functions. It is not a function object.
// there are most commonly used methods of the Math object in JavaScript. Some of them are:

// Math.round(): This method rounds a number to the nearest integer.
// console.log(Math.round(4.7)); // 5
// console.log(Math.round(4.4)); // 4

// Math.ceil(): This method rounds a number up to the next largest integer.
// console.log(Math.ceil(4.1)); //5

// Math.floor(): This method rounds a number down to the next smallest integer.
// console.log(Math.floor(4.9)); //4

// Math.max(): This method returns the largest of zero or more numbers.
console.log(Math.max(1, 2, 33, 4, 5)); //33

// Math.min(): This method returns the smallest of zero or more numbers.
console.log(Math.min(1, 2, 33, 4, 5)); //1

// Math.random(): This method returns a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.floor(Math.random() * 6 + 1)); //0.123456789

// Math.pow(): This method returns the base to the exponent power, that is, base^exponent.
console.log(Math.pow(2, 3)); //8

// Math.sqrt(): This method returns the square root of a number.
console.log(Math.sqrt(16)); //4

// Math.abs(): This method returns the absolute value of a number.
console.log(Math.abs(-5)); //5

// there are many more methods available in the Math object. You can refer to the official documentation for a complete list of methods and properties available in the Math object.
