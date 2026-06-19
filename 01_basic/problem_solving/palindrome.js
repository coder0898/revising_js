// Palindrome Checker (Good Challenge)
// Input:
// madam
// Output:
// Palindrome

let inputString = "pratik";
let reversedString = inputString.split("").reverse().join("");
if (inputString === reversedString) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}
