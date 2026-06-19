// Shopping Discount Calculator
// Example:
// Purchase > 5000 => 20% discount
// Purchase > 2000 => 10% discount
// Otherwise => No discount
// Calculate final amount.

let inputAmount = 5400;
let discountVal = 0;
let finalAmount = 0;
if (Number(inputAmount) > 5000) {
  discountVal = Number(inputAmount) * 0.2;
  finalAmount = Number(inputAmount) - discountVal;
} else if (Number(inputAmount) > 2000 && Number(inputAmount) <= 5000) {
  discountVal = Number(inputAmount) * 0.1;
  finalAmount = Number(inputAmount) - discountVal;
} else {
  finalAmount = Number(inputAmount);
}

console.log(`finalAmount: ${finalAmount}`);
