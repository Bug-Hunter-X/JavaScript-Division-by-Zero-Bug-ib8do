function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect! It should handle the case where both a and b are 0
  } else {
    return a / b;
  }
}

console.log(foo(0,0)); //This will return 0, but it should throw an error or return Infinity
console.log(foo(10,2)); //This will return 5
console.log(foo(5,0));// This will return 0, but it should throw an error or return Infinity