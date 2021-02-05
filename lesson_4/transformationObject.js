let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(object) {
  let newObject = {};

  for (let item in produce) {
    if (produce[item] === 'Fruit') {
      newObject[item] = 'Fruit';
    }
  }
  return newObject;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// input: object
// output: object
// I have to return only the pairs which value is fruit.

//loop through the keys to accces the values.

//Book solution

// function selectFruit(produceList) {
//   let produceKeys = Object.keys(produceList);
//   let selectedFruits = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     if (currentValue === 'Fruit') {
//       selectedFruits[currentKey] = currentValue;
//     }
//   }

//   return selectedFruits;
// }