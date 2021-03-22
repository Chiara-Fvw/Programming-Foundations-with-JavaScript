/* 
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F' 
*/

function getGrade(a, b, c) {
  let average = (a + b + c) / 3;

  if ((average < 100) && (average > 90)) {
    return 'A';
  } else if ((average < 90) && (average > 80)) {
    return 'B';
  } else if ((average < 80) && (average > 70)) {
    return 'C';
  } else if((average < 70) && (average > 60)) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"