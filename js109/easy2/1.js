/* Welcome Stranger

Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.

Example:

Copy Code
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

Problem:
Input: array and object.
output: string: greeting persosn full name and person title.

DataStrucure:

Array, object, string

Algorithm:

- Define a function that takes in two argumnets: array and object.
- declare var. name: 
    join the array with spaces to make the complete name
- Declare a profession variable: 
    put toghether title and occupation. reference the values:
      by bracket notation or create an array with values and join them with space.
- Return the string with string interpolation.


 */

function greetings(array, object) {
  let name = array.join(' ');
  let profession = object.title + ' ' + object.occupation;

  return `Hello, ${name}! Nice to have a ${profession} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);