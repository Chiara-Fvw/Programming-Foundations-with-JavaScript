//PP1

// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi'); 
//return: [1, 2, 3]
//because the filter method return the values that return truthiness to the callback. All elements will be truthy.
  

//book: filter performs selection based on the truthiness of the callback's return value. In this case, the return value is always 'hi', which is truthy. Therefore filter will return a new array containing all of the elements in the original array.



//PP2

//What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined] because there is a bracket function but no return.
// book: map looks at the return value of the callback function to decide the elements in the returned array. Each element in the original array is replaced by what the callback returns for that element. In this case, there's no explicit return statement in the callback function, which means that the callback returns undefined each time.


//Practice Problem 3

//The following code differs slightly from the above code. What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);

//[1, 4, 9] in this kind of fuction there is no requiremnt of the word return.
//book: Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value. In this case, the callback returns 1, 4, and 9 on the 3 iterations.


//Practice Problem 4

//What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length
//X (1 because length is called on pop function which returns the last value of the array in which it is called.)
// book: it is called on 'caterpillar' which is a string with 11 words. That is why the length will return 11.

//Practice Problem 5

//What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

//callback's return value is 2, 4, 6 + the return value of every is (false) TRUE
//book: The return values of the callback will be 2, 4, and 6 on the respective iterations. The expression num = num * 2 is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values, every will return true.



//Practice Problem 6

//How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// it will modify the array by changing the elements in the positions given as parameters 2 and 3 into the first given parameter. Yes. Reading documentation or calling arr.

//Practice Problem 7

//What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// MAL ['bear'] > because it will return only the elements which strings are longer than 3
//BOOK: [undefined, 'bear'] > There are some interesting things to point out here. First, the return value of map is an array, which is the collection type that map always returns. Second, where did we get that undefined value? If we look at the if condition (elem.length > 3), we'll notice that it evaluates to true when the length of the element is greater than 3. In this case, the only value with a length greater than 3 is 'bear'. Thus, for the first element, 'ant', the condition evaluates to false and elem isn't returned. When a function doesn't explicitly return something, it implicitly returns undefined. That's why we see undefined as the first element of the returned array.

//Practice Problem 8

//Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let newObject = {};
flintstones.forEach((element, index) => newObject[element] = index);

//Practice Problem 9

//Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = 0;
Object.values(ages).forEach(years => sum += years);

//book: pro: Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174

// Practice Problem 10

//Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = Object.values(ages).sort().reverse().pop();

//book solution
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10


// Practice Problem 11

//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

//The output will look something like the following:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
let characters = statement.split('').filter(char => char !== ' ');
let objectFrequency = {};
characters.forEach(letter => {
  if (objectFrequency[letter]) {
    objectFrequency[letter] += 1;
  } else {
    objectFrequency[letter] = 1;
  };
});

//book solution:
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

result;

//or 

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});

//Note that we don't have to convert the string to an array to solve the problem. We're doing so here only so that we can use the forEach method. We could've used a simple for loop to iterate over the string directly:

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}