// 3. Grade Calculator

// Input marks (0-100).

// 90+ => A
// 80+ => B
// 70+ => C
// 60+ => D
// Below 60 => F

let marks = 75;

if (marks >= 90 && marks <= 100) {
  console.log(`The grade is A.`);
} else if (marks >= 80 && marks < 90) {
  console.log(`The grade is B.`);
} else if (marks >= 70 && marks < 80) {
  console.log(`The grade is C.`);
} else if (marks >= 60 && marks < 70) {
  console.log(`The grade is D.`);
} else {
  console.log(`The grade is F.`);
}
