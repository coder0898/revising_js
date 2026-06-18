// Password Strength Checker

// Check a password string.

// Example rules:

// Length < 6 => Weak
// Length 6-10 => Medium
// Length > 10 => Strong

let password = "myPassword123";

let pwdLength = password.length;

if (pwdLength < 6) {
  console.log(`The password is Weak.`);
} else if (pwdLength >= 6 && pwdLength <= 10) {
  console.log(`The password is Medium.`);
} else {
  console.log(`The password is Strong.`);
}
