function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* Primitive parameters (such as a number) are passed to functions **by value**; the value is passed to the function, but if the function changes the value of the parameter, **this change is not reflected globally or in the calling function**.

If you pass an object (i.e. a non-primitive value, such as `[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)` or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:
 */
// recibo 2 arrays 
// los devuelvo unidos en uno sin valores repetidos.
// de un array, creo otro al que le añado los items de uno en uno comprobando antes si ya están dentro o no.

function unionMio(firstArray, secondArray) {
  let mergedArray = firstArray;
  for (idx = 1; idx < secondArray.length; idx++) {
    if (mergedArray.includes(secondArray[idx])) {
      continue;
    } else {
      mergedArray.push(secondArray[idx]);                     //Mi solución no vale porque no comprueba que no haya repes en 
    }                                                               //el array original.
  }
  return mergedArray;
}



