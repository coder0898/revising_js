//functions are kind of wrapper under which we wrapped some code/ instruction so it can be reuse anywhere by executing this functions.
//In javascript functions are first class citizens.
// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// to create a function given below is the example.
function addTwoNumbers() {
  console.log(3 + 4);
}

//in the above syntax, function is keyword use followed by function name then braces then block under which we write or wrap our code.
// now to call this above function we do following
// addTwoNumbers();

//function also can takes some inputs they are called paramenters and arguments, where parameter is used in function declaration and arguments are values passed during function execution.

// function SumOfNumbers(num1, num2) {
//   // here num1 and num2 are function parameters.
//   console.log(`result: ${num1 + num2}`);
// }

// SumOfNumbers(3, 4); //here 3 and 4 are functions arguments.

// as said above function takes some input and after processing give some outputs. To do this we use return keyword.
function SumOfNumbers(num1, num2) {
  return `result: ${num1 + num2}`;
}

// now to execute it we can go by 2 way
// direct console.log()
// console.log(SumOfNumbers(3, 4));

//display  as variable.
const result = SumOfNumbers(3, 4);
console.log(result);
