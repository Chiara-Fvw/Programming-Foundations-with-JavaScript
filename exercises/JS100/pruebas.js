/* let object = {
    dog: 'Nana',
    fish: 'Shifu',
    snail: 'Luciano'
}

let array = [1, 2, 3];

let string = 'hello';

let number = 1984;

function changing(thing) {
 
} */

// console.log(changing(object));
// console.log(object);
// console.log(changing(array));
// console.log(array);
// console.log(changing(string));
// console.log(string);

//**************

function objectHasProperty(object, property) {
    return obj.hasOwnProperty(property) ? 1 : 2;
  }
  
  let obj = {
    something: 3,
    enabled: false,
    result: undefined,
  };
  
  console.log(objectHasProperty(obj, 'something')); // returns 1
  console.log(objectHasProperty(obj, 'active'));    // returns 2
