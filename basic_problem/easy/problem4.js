// 4. Convert String to Number
// Create:

//  price = "15000";
//  seats = "18";
// Convert both to numbers and calculate total billing.

let price = "15000";
let seats = "18";

//conversion
let numPrice = Number(price);
let numSeats = Number(seats);

let total = 0;
total += numPrice * numSeats;

console.log(`The converison of both are ${numPrice} and ${numSeats}`);
console.log(`The total bill is ${total}`);
