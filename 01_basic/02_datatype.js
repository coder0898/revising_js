// In javascript every value has a data type. A data type is a classification of data that tells the computer how to interpret the value. There are several data types in javascript, including:

//1. number: represents numeric values, both integers and floating-point numbers. For example:
const age = 30;
const price = 19.99;
console.log(typeof age); // Output: number

//2. string: represents a sequence of characters enclosed in single quotes, double quotes, or backticks. For example:
const name = "John Doe";
const message = "Hello, World!";
const greeting = `Welcome, ${name}!`;
console.log(typeof name); // Output: string

//3. boolean: represents a logical value that can be either true or false. For example:
const isStudent = true;
const hasLicense = false;
console.log(typeof isStudent); // Output: boolean

//4. null: represents the intentional absence of any object value. It is a primitive value that represents the null or empty value. For example:
const emptyValue = null;
console.log(typeof emptyValue); // Output: object (this is a quirk in JavaScript, null is considered an object)

//undefined: represents a variable that has been declared but has not been assigned a value. For example:
let uninitializedVariable;
console.log(typeof uninitializedVariable); // Output: undefined

//null vs undefined: null is an intentional absence of value, while undefined means a variable has been declared but not assigned a value. null is an object, while undefined is a primitive value. null is falsy, while undefined is also falsy.

//5. symbol: represents a unique and immutable value that can be used as a key for object properties. For example:
const uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol

//6. object: represents a collection of properties and methods. It is a complex data type that can store multiple values and functions. For example:
const person = {
  name: "Alice",
  age: 25,
};
console.log(typeof person); // Output: object

//7. array: represents an ordered list of values. It is a special type of object that can store multiple values in a single variable. For example:
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Output: object (arrays are considered objects in JavaScript)
