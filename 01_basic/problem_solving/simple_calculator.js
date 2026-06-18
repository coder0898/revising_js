// Simple Calculator:+,-,*,/,%
let num1 = 10;
let num2 = 5;

let operator = "+";

switch (operator) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`The result of ${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`The result of ${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    console.log(`The result of ${num1} / ${num2} = ${num1 / num2}`);
    break;
  case "%":
    console.log(`The result of ${num1} % ${num2} = ${num1 % num2}`);
    break;
  default:
    console.log(`Invalid operator`);
}
