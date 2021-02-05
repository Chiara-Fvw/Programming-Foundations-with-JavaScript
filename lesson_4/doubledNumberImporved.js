// Continuing with the idea of building generic functions, let's update our doubleNumbers function so that it not only can double the numbers in an array but can also multiply them by any other number. For instance, let's create a function called multiply that can take an additional argument to determine the transformation criterion.

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, multiplicator) {
  let resultNumber = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    resultNumber.push(currentNumber * multiplicator);
  }

  return resultNumber;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

//Try coding a function that lets you multiply every array item by a specified value: