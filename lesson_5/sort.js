//converts all the numbers to strings and compares them by their Unicode character codes. 
[2, 11, 9, 4, 107, 21, 1].sort(); //[ 1, 107, 11, 2, 21, 4, 9 ]

//When sort is called without arguments, it coerces all the array elements except those that are undefined to their string equivalents, then sorts them using string comparisons:

[null, 'a', true, 1].sort(); //[ 1, 'a', null, true ]

//undefined values are a special case when it comes to sorting. They are always placed at the end of the array no matter what the other values are:
[undefined, 11, 'z', 'x', 'y', undefined].sort(); //[ 11, 'x', 'y', 'z', undefined, undefined ]

//DESTRUCTIVE method 
let vowels = ['u', 'i', 'a', 'e', 'o']
vowels.sort(); //[ 'a', 'e', 'i', 'o', 'u' ]
vowels; //[ 'a', 'e', 'i', 'o', 'u' ]

//sort takes an optional callback argument. The return value of that callback determines the final sequence produced by the sort:

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]

// The sort function iterates over our array and supplies our callback function with two elements each time. It arranges the relative positions of the two elements using the following rules:

// If the callback returns a number less than 0, place a before b.
// If the callback returns a number greater than 0 place b before a.
// If the callback returns 0, leave the relative positions of a and b unchanged.

//Our callback function can be simplified a bit. We know that we want to return a negative number when a < b and a positive number when a > b. Looking at our logic, we can easily replace the whole if/else conditional with return a - b;:

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);

//You are allowed to write additional code in the block, as long as the block returns a number.

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});

//How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a,b) => a.length - b.length);

