// BMI Calculator
// Formula:
// BMI = weight / (height * height)
// Output category:
// Underweight
// Normal
// Overweight
// Obese

// | BMI            | Category    |
// | -------------- | ----------- |
// | Less than 18.5 | Underweight |
// | 18.5 to 24.9   | Normal      |
// | 25 to 29.9     | Overweight  |
// | 30 or more     | Obese       |

let inputWeight = 70; // in kilograms
let inputHeight = 1.75; // in meters
let bmiValue = 0;
bmiValue = Number(inputWeight) / (Number(inputHeight) * Number(inputHeight));

let bmiCategory = "";

if (bmiValue > 30) {
  bmiCategory = "Obese";
} else if (bmiValue >= 25 && bmiValue <= 29.9) {
  bmiCategory = "Overweight";
} else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
  bmiCategory = "Normal";
} else {
  bmiCategory = "Underweight";
}
console.log(`BMI:${bmiCategory}, ${bmiValue}`);
