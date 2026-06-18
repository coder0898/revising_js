//String

//String are nothing but sequence of characters. they are used to represent text in JavaScript.
// they are declare by puting the value within single or double quotes.
const firstName = "coder";
// console.log(firstName);
//the above way is most common way of declaring the string but there is another way of declareing string in JavaScript using constructor function String().
const lastname = new String("programmer");
// console.log(lastname);
//here we are using String object to create a string.

//For adding more than one string we traditionally used '+' operator for concatenation.
// console.log(firstName + " " + lastname);

// however in modern JavaScript we use another way called string interpolation using template literals. Template literals are enclosed by backticks (`) and allow us to embed expressions inside the string using ${} syntax.
// console.log(`${firstName} ${lastname}`);
// using this it become clean and more readable and we can easily embed any expression inside the string without worrying about the concatenation and spacing.

// String Methods:
// JavaScript provides several built-in methods for manipulating strings. Some of the commonly used string methods are:
//1. length: returns the length of the string.
// console.log(firstName.length); // Output: 5

//2. toUpperCase(): converts the string to uppercase.
// console.log(lastname.toUpperCase());

//3. toLowerCase(): converts the string to lowercase.
// console.log(lastname.toLowerCase());

// 4. indexOf(): returns the index of the first occurrence of a specified value in the string.
// console.log(firstName.indexOf("d"));

//5. slice(): extracts a section of the string and returns it as a new string.
// console.log(firstName.slice(1, 4)); // Output: "ode"

//6. replace(): replaces a specified value with another value in the string.
// console.log(firstName.replace("c", "C")); // Output: "Coder"

//7. split(): splits the string into an array of substrings based on a specified separator.
const fullName = "John Doe";
const nameParts = fullName.split(" ");
// console.log(nameParts); // Output: ["John", "Doe"]

//8. trim(): removes whitespace from both ends of the string.
const stringWithWhitespace = "   Hello, World!   ";
// console.log(stringWithWhitespace);

const trimmedString = stringWithWhitespace.trim();
// console.log(trimmedString); // Output: "Hello, World!"

//9. includes(): checks if a string contains a specified value and returns true or false.
console.log(fullName.includes("John")); // Output: true
