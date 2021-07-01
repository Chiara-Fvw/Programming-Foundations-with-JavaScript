/* 
Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Input: positive integer.
Output: triangle rigth - each rigth side has n stars.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Data structure
numbers
strings

Algorithm
loop that ends when the num is met.
  space (num - 1) star (1)      (-1) / (+1)
  space (num -2) + star (2)     (-1) / (+1)
  space (num - 3) + star (3)    (-1) / (+1)



*/

function triangle(num) {

  let space = num - 1;
  let star = 1;
  while (star <= num) {
    console.log(' '.repeat(space) + '*'.repeat(star));
    space -= 1;
    star += 1;
  }

}

triangle(5);
triangle(9);