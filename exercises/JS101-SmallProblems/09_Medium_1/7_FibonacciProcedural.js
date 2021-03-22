//Rewrite your recursive fibonacci function so that it computes its results without using recursion.

function fibonacci(num) {
  let previousTwo = [1, 1];

  for (let nth = 3; nth <= num; nth++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

//Note that JavaScript can accurately compute intergers up to 16 digits long; this means that fibbonacci(78) is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.

