// Fibonacci question
// Need to print the first 10 digits of the fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let ans = 0;

// Your code here
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
ans = fib;
console.log(ans);

// Array length = 3 question
// Write a JavaScript function that takes in an array of length == 3 which 
// represents the 3 lengths of the three sides of a triangle.
// Need to calculate the area of the triangle, and return the area as a number

let ans2 = 0;

// Your code here
function areaOfTriangle(arr) {
  let s = (arr[0] + arr[1] + arr[2]) / 2;
  // Math.sqrt is used to calculate the square root of the value, and the formula
  // for the area of a triangle is used to calculate the area
  return Math.sqrt(s * (s - arr[0]) * (s - arr[1]) * (s - arr[2]));
}

// [3, 4, 5] is used as an example
ans2 = areaOfTriangle([3, 4, 5]);



console.log(ans2);