//Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

function buyFruit(list) {
  let flatList = [];
  list.forEach(subArray => {
    for (let counter = 0; counter < subArray[1]; counter++) {
      flatList.push(subArray[0]);
    }
  });
  
  console.log(flatList);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
