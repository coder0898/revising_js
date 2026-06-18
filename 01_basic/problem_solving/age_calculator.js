// 2. Age Category Calculator

// Input age and output:

// 0-12   => Child
// 13-19  => Teenager
// 20-59  => Adult
// 60+    => Senior

let age = 25;

if (age >= 0 && age <= 12) {
  console.log(`The person is a Child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`The person is a Teenager.`);
} else if (age >= 20 && age <= 59) {
  console.log(`The person is an Adult.`);
} else {
  console.log(`The person is a Senior.`);
}
