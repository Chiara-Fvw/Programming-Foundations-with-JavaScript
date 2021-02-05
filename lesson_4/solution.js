function sumEvenNumberRow(rowNumber) {
  const ROWS = [];
  let startInteger = 2;
  
  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum++) {
    let row = createRow(startInteger, currentRowNum);
    ROWS.push(row);

    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = ROWS.pop();
  
  return finalRow.reduce((a, b) => a + b); // to do : sum final row and return the sum.
}

function createRow(startInteger, rowLength) {
  const ROW = [];
  let currentInteger = startInteger;
  
  while (ROW.length < rowLength) {
    ROW.push(currentInteger);
    currentInteger += 2;
  }
  return ROW;
}

// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); //2
console.log(sumEvenNumberRow(2)); //10
console.log(sumEvenNumberRow(4)); //68

console.log(sumEvenNumberRow(68));

// **Algorithm** Principal

// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' array and it to the overall 'rows' array
// 3. Repeat step 2 until all the necessary rows have been created
// 	- All rows have been created when the length of the rows array is
// 		 equal to the input integer
// 4. Sum the final row
// 5. Return the sum of the final row

// [
// 	[2],
// 	[4, 6],
// 	[8, 10, 12],
// 	[14, 16, 18, 20],
// 	...
// ]

// Calculating the starting integer:
// rule: The first integer of a row is equal to last integer preciding row + 2
//Alogrithm: 
//    - get the preciding row (is the last row from the rows array)
//    - get the last integer of that row and 
//    - add 2 to the integer


// *********************AUXILIARY FUNCTION ************************************************************

// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// Auxiliary Algorithm: 
// 	1. create an empty row array to contain the integers
// 	2. Add the starting integer
// 	3. Increment the starting integer by 2 to the next integer in the sequence
// 	4. Repeat step 2 and 3 until the array has reached the second input
// 	5. Return the row array

      //Start the loop
      //  - Add start integer to the row Array
      //  - Increment start integer by 2 to take the next integer in the sequence
      //  - Break out the loop if the row length equals rowLength