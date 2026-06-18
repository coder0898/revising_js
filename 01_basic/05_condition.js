// In programming, conditions are used to perform different actions based on different situations. The most common conditional statements in JavaScript are if, else if, and else statements.

// if: if statement is used to execute a block of code if a specified condition is true.

let age = 8;

// if (age >= 18) {
//   console.log("Your are eligible to vote.");
// }

// if..else: if..else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.

if (age >= 18) {
  console.log("Your are eligible to vote.");
} else {
  console.log("Your are not eligible to vote.");
}

// if..else if..else: if..else if..else statement is used to execute one block of code if a specified condition is true, another block of code if another specified condition is true, and a final block of code if none of the conditions are true.

let marks = 75;

if (marks >= 90) {
  console.log("You got A grade.");
} else if (marks >= 80) {
  console.log("You got B grade.");
} else if (marks >= 70) {
  console.log("You got C grade.");
} else if (marks >= 60) {
  console.log("You got D grade.");
} else {
  console.log("You got F grade.");
}

// switch: switch statement is used to perform different actions based on different conditions. It is an alternative to if..else if..else statement.

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// ternary operator: ternary operator is a shorthand way of writing an if..else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result); // Even
