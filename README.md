# JavaScript Division by Zero Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to division by zero. The `foo` function attempts to handle cases where either `a` or `b` is 0, but it incorrectly returns 0 instead of throwing an error or returning `Infinity` as mathematically expected.

## Bug Description
The `foo` function contains a flaw in its error handling. When either `a` or `b` is 0, it returns 0, which is not the correct mathematical behavior. Dividing by zero is undefined, and the function should either explicitly throw an error or return `Infinity` (for positive divided by zero) or `-Infinity` (for negative divided by zero), depending on the context of the application.

## Solution
The solution addresses this issue by providing more robust error handling. We use a `try...catch` block to catch the error and return `Infinity` as a result.  This better reflects the expected mathematical outcome of dividing by zero.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript editor.
3. Run the scripts in your Node.js environment or a web browser's console.