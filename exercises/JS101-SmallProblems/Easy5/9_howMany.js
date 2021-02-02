//1.crear un object
//2. usar el value de array como key y cada vez que  haya uno se añade. luego 
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(list) {
let object = {};

for (let idx = 0; idx < list.length; idx++) {
    if (object[list[idx]]) {
      object[list[idx]] += 1;
  } else {
    object[list[idx]] = 1;
  }
}
logOccurrences(object);
}

function logOccurrences(object) {
  for(let vehicle in object) {
    console.log(`${vehicle} => ${object[vehicle]}`);
  }
}

countOccurrences(vehicles);


/* 
console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2 
*/