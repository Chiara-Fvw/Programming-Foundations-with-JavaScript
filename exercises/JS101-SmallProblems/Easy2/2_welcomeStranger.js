/* 
Create a function that takes 2 arguments: 
    an array 
      2 or more elements > name
    an object 
      two keys, "title" and "occupation", and the appropriate values
    
Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

//Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings(array, object) {
  return `Hello, ${array.join(" ")}! Nice to have a ${object["title"]} ${object["occupation"]} around.`;
}