//What does this code return and why.


[[1, 2], [3, 4]].map(arr => console.log(arr[0]));


/*`map` is called on the array `[[1, 2], [3, 4]]`. 
`map` iterates through each element of the array, passing it in turn, to its callback function. Elements are assigned to parameter `arr` which will then be used to reference the first element of each subarray.
This reference is passed to console.log as argument, therefore `1` and `2` will be logged on the console.
As the return value of the callback is `undefined` on each iteration, (console.log returns `undefined` ), the return value of `map` is a new array [undefined, undefined]. 
This code demonstrate the use of `map`. It iterates through each element of the calling array and returns a new array with the same number of elements of the original one. `map` uses its callback return values to modify the elements and populate its new returned array.
*/


//******************************************

// **Example 1:** What does the following code return? What does it output? Why? What concept does it demonstrate?

function fix(value) {
  value.toUpperCase(); 
  value.concat('!'); 
  return value; 
}

const s = 'hello'; 
const t = fix(s); 

// What values do `s` and `t` have? why? 

/*

The code will return `undefined` because variable declaration return `undefined`.

Value of `s` is `hello`.
Value of `t`is `hello`.

On line 8, the return value of the function `fix` invoked passing the value of variable `s` as argument, is stored on variable `t`.

In this case, we pass the string `hello` to the function `fix`, which assign the string to the parameter `value`.

Inside the body of the function, the method `toUpperCase()` is called on value’s value.
In the following line `!` is concatenated to the value’s value.
As both methods are non destructive, because they return a new string, the parameter value is not modified when returned by the function on line 5.

The function then explicitly returns the value of variable `value`, which  is still `hello`. This value is assigned to `t` constant declared on line 8.

This code demonstrate how primitive values are inmutable and how they are passed by value.
*/

// *********************************************

//**Example 2:** What does the following code return? What does it output? Why? What concept does it demonstrate?


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

numbers.filter(num => num % 2 === 0)

console.log(numbers); 

/*
On line 3 `filter` method is called on the `numbers`variable, which has been declared on line 1 and initialized to an array literal.

 `filter`  returns a new array which contains only the even numbers of the `numbers` array. `filter` iterates through the array on which it is called on, passing each element as argument to its callback function. 
If after executing the callback function with the current element the return is a truthy value, the element is pushed to the new array returned by filter.

However, as `filter` returns a new array, `numbers` remain unchanged, therefore when its value is passed to the console.log invocation as an argument, `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` is printed.

This code demonstrates how using non-destructive methods does not modify the array on which they have been called on.
*/