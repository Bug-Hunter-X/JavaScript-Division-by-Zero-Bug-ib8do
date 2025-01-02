function foo(a, b) {
  if (a === 0 && b === 0) { 
    return Infinity; // Handle the case where both a and b are 0
  } else if (b === 0) {
    return Infinity; // Handle division by zero
  } else {
    return a / b;
  }
}

//Alternatively, we can use a try...catch block
function foo2(a,b){
  try{
    return a/b
  } catch(e){
    if(e instanceof TypeError){
      return Infinity
    }
    throw e
  }
}

console.log(foo(0,0)); // Returns Infinity
console.log(foo(10,2)); // Returns 5
console.log(foo(5,0)); // Returns Infinity
console.log(foo2(0,0)); // Returns Infinity
console.log(foo2(10,2)); // Returns 5
console.log(foo2(5,0)); // Returns Infinity