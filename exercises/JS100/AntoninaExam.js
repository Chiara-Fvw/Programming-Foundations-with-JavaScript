//1
//Examine the code example below. The last line outputs the string 'Hi' rather than the string 'Hello'.
//Explain what is happening here and identify the underlying principle that this demonstrates.
let greeting = 'Hello';
while (true) {
  greeting = 'Hi';
  break;
}
console.log(greeting); // => Hi
//2
let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}
//3
function appendTo(str, otherStr) {
  for (let index = 0; index < otherStr.length; ++index) {
    str += otherStr[index];
  }
  return str;
}
//4
let a = "Hello";
if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}
//5
function anyNegatives(arr) {
  arr.forEach(num => {
    if (num < 0) return true;
  });
}
let numbers = [1, 2, 3, -5, 4];
if (anyNegatives(numbers)) {
  console.log("The array contains at least one negative number!");
} else {
  console.log("The array contains no negatives!");
}
//What is output to console, and why? What concepts are illustrated?
//6
let greeting = ["Hello"];
function test(arr) {
  arr = arr.concat("World!");
  return arr;
}
test(greeting);
console.log(greeting);
//7
//What will this code output and why?
let nums = [1, 2, 3];
let numbers = nums;
nums = [1, 2, 3];
nums.shift();
console.log(numbers);
//8
// What does this code return and why.
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
//9
//How many elements does this array have?
//[1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2];
//10
[1,3,1,5].filter(el => 'hello world');
//11
['ant', 'bear'].map(elem => {
  if (elem.length > 3) { return elem; }
});
//12
let ceo = "David";
let manager;
if (ceo === "David Wallace") {
  manager = 'Michael';
} else {
  manager = 'Andy';
}
console.log(manager);
//13
let animal = "dog";
const speak = animal => {
  if (animal === undefined) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};
speak();
//14
let greeting = "Hello";
const test = str => {
  str.concat(" World!");
  str = str.toLowerCase();
  return str;
}
test(greeting);
console.log(greeting);
//15
function capitalizeFirstLetter(word) {
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}
let word = "javascript";
capitalizeFirstLetter(word); // returns "Javascript"
word; // returns "javascript"
//16
let name = "nina";
function outer() {
  let name = "jill";
  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }
  return inner();
}
outer();
name;
//17
//What does the code below output and why?
function doubleArray(array) {
  return array.map(num => double(num));
}
let double = num => num * num;
let arr = [2, 4, 5];
doubleArray(arr);
console.log(arr);
//18
let num = 4;
function evens(num) {
  num = "hi";
  return num;
}
let number = 5;
console.log(evens(number));
//19
const hottestTemps = [
  {continent : "Africa", country: "Tunisia", temp: 55},
  {continent : "Asia", country: "Iran", temp : 54},
  {continent : "North America", country: "USA", temp : 56.7},
  {continent : "South America", country: "Argentina", temp: 48.9},
  {continent : "Europe", country: "Greece", temp : 49},
  {continent : "Oceania", country: "Australia", temp : 50.7}
];
function toFahrenheit(tempsArr) {
  let newTempsArr = tempsArr.slice();
  newTempsArr.forEach(obj => {
    obj.temp = (obj.temp * 9 / 5) + 32;
  });
}
const hottestTempsInF = toFahrenheit(hottestTemps);
console.log(hottestTempsInF);
console.log(hottestTemps);
//20
//What will this code output and why?
const nums = [1, 2, 3];
let numbers = nums;
nums = [2, 3, 4];
console.log(numbers);