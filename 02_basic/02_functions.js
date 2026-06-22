//how to work with array and objects inputs wih functions.
// so lets say i have to pass multiple values to a function.
//traditional way
// function DisplayNumbers(num1, num2, num3, num4) {
//   return [num1, num2, num3, num4];
// }

// console.log(DisplayNumbers(100, 200, 300, 400));
// this method is length and required knowledge of arrays too which we will learn after this.
// in odern js we have es6 mthod rest adn spread operator both use same  ..., but depends on where it use they are named.

function DisplayNumbers(...num) {
  //since ... is used in function parameter it is called rest operator.
  return num;
}
// console.log(DisplayNumbers(100, 200, 300, 400));

//spread operator example
const original = [1, 2, 3];
const copy = [...original]; //spread operator.

console.log(copy); // Output: [1, 2, 3]
