//Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

function rotateArray(array) {
  if(!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                    // [1, 2, 3, 4]

// Input
// > an array
// Output
// > a new array, since we can't mutate the original array
// Rules
// > if the input is not an array, return undefined
// > if the input is an empty array, return []
// > for a non-empty array, slice off the first element and append it to the end of the array


//my solution

/* function rotateArray(array) {
  if (Array.isArray(array)) {
    if (array.length <= 0) return [];
    let newArray = array.slice(0);
    newArray.push(newArray.shift());
    return newArray;
  } else {
    return undefined;
  }
} */