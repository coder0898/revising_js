//Scope determine the accessbility of variable in the program. In JavaScript there are 3 level of scrope: global,local/functional,block

// difference in var, let and const.
var c = 300;
if (true) {
  const a = 10;
  let b = 20;
  var c = 30;
}

// console.log(a);//it shows that the const is block scope that means it is accessible ony within block[{}]
// console.log(b); // like const, let also has block scope.
// console.log(c);
//here despite declare in if block the var is still displayed. this means var deosn't have block scope.
//now dispite declaring another var variable outside if block it still display value from block var. this means var has global scope and can be redefined as done above this is the reason why var is not used as it caused unexpected result.

//scope level.
function one() {
  let a = 20;

  if (true) {
    let b = 10;
    console.log(a); // it is accessible as a is having function scope that is it is accessible within function one.
  }

  //   console.log(b); // it is giving error as the b variable is having block scope that is it is accessible within if.
}

one();

// Hoisting it is behaviour of js to move up all variable and function declaration to the top of the program.
//example
a = 20;
var a;
// console.log(a); //20
// as you see even if the variable is declare after initialization it is still printing value this caused unexpected bugs in the program and hence var is not used now.
// to overcome this let and const are used.
b = 20;
// let b;
// console.log(b); //refernce error, as variable is assign before declaration.
