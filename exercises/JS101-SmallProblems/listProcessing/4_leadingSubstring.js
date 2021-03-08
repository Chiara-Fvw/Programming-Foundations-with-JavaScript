//Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }

  console.log(substrings);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//Rewrite leadingSubstrings using list processing functions. That is, convert the string into an array of some sort and use functions like map, filter, or reduce to get the desired substrings. (You will also need to use join.) Try not to use forEach as that is too similar to the for loop approach.

function leadingSubstringList(string) {
   
}

leadingSubstringList('abc');      // ["a", "ab", "abc"]