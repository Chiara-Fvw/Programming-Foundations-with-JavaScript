//Question 1

//Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

//NO. I think that the first return will return hi there while the second no because after return enter.

/* BOOK: 
These functions do not return the same thing. The function first() returns the expected value of "hi there", but second() returns undefined without throwing any errors.

The reason for this odd behavior is that semicolons, in JavaScript, are technically optional. However, when you omit them, the JavaScript engine inserts them where it thinks you need them. In second, it inserts a semicolon after the word return, so the function returns undefined. No errors are thrown since the rest of the code is valid, even though it never gets executed.

Some developers rely on this behavior and write JavaScript code without semicolons. However, most developers consider it poor practice since you're relying on the engine to make decisions for you, and those decisions may not be what you intended.
*/

//QUESTION 2

//What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);  //(? first: [1] ERRROR) ==> first: [1,2]

//Try to answer without running the code or looking at the solution.
/* 

Since numArray is a reference to the original array, [1], numArray.push(2) modifies this array. Thus, the original object referenced by object is changed. If, instead of modifying the original object, we want to modify numArray but not object, we have two options:

We can declare and initialize numArray with a reference to a copy of the original array: */

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

//We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

let object = { first: [1] };
let numArray = object["first"].concat();
numArray.push(2);


//Question 3

//Given the following similar sets of code, what will each code snippet print?

//A)
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);      //  one is one
console.log(`two is: ${two}`);      // two is two
console.log(`three is: ${three}`);  // three is three

//B)
function messWithVars(one, two, three) {
  one = ["two"]; 
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);    // one is one
console.log(`two is: ${two}`);    // two is two
console.log(`three is: ${three}`); // three is three

//C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); //one is two
console.log(`two is: ${two}`); //two is three
console.log(`three is: ${three}`); //three is one


//Explanation

function messWithVars(one, two, three) {
  // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
 one = two; // this is reassignment, from now on local variable one is pointing to the object that local variable two was pointing t two  (at the moment one and two point to the same object). Note that global variable one still points to the same object `["one"]` as we didn't change anywhere what it references
 two = three; // as this is also reassignment, local variable two is now pointing to the same object as variable three and now local variables two and three point to the same object. Note that global variable two still points to the same object `["two"]` as we didn't change anywhere what it references
 three = two; // again, reassignment, local variable three points to the same object as local variable one, which is `["two"]` (we reassigned it up above) . And, global variable three wasn't changed so it still points to the same object.
}

function messWithVars(one, two, three) {
  // here on line 2 both local variable one and global variable one reference to the same array object. Same goes for variables two and three
  one = ["two"]; // we are reassigning local variable one to point to a completely new array object with the value ["two"]. This is not the same object that variable two is pointing to. Again, we are reassigning local variable one, so global variable one remains unchanged.
// ... same thing happens in other 2 lines of code
}

function messWithVars(one, two, three) {
  // as before, here both local variables one and global variable one point to the same object. Same goes for other variables.
  one.splice(0, 1, "two"); // we are calling mutating method `splice` on the object that local variable one is pointing to. We are mutating this object and since global variable one is pointing to the same object it is mutated as well.
  two.splice(0, 1, "three"); // same thing here, we are calling mutating method `splice` on the object that local variable two is pointing to. We are mutating this object and since global variable two is pointing to the same object it is mutated as well.
  three.splice(0, 1, "one"); // same as above
}

//Question 4

//Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions. Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      };
      return true;
    };
  };

  return 'Invalid input';  
}

//Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

//Help Ben fix his code.

//Helpful code: Here's Alyssa's isAnIpNumber function so you can test your code:

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

//The call to /^\d+$/.test(str) (/\d+$/ is a regular expression) returns a truthy value if str is a string of digits. If it is, we convert it to a number then check whether the number is in the appropriate range (0-255).

//If str is not a string of digits, we return false.

isDotSeparatedIpAddress('233.45.65.45');
