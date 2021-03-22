// A triangle is classified as follows:

// > Right: One angle is a right angle (exactly 90 degrees).
// > Acute: All three angles are less than 90 degrees.
// > Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.
function triangle(angle1, angle2, angle3) {
  const ANGLES = [angle1, angle2, angle3];

  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  const TOTAL_ANGLE = angles.reduce((total, angle) => total + angle);

  const ALL_NON_ZERO = angles.every(angle => angle > 0);

  return TOTAL_ANGLE === 180 && ALL_NON_ZERO;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return 'right';
  } else if (angles.every(testAcuteTriangle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

//mine

function triangleMINE(deg1, deg2, deg3) {
  if (((deg1 + deg2 + deg3) === 180) && ((deg1 > 0) && (deg2 > 0) && (deg3 > 0))) {
    return getTriangleTypeM(deg1, deg2, deg3);
  } else {
    return 'invalid';
  }
}

function getTriangleTypeM(deg1, deg2, deg3) {
  if (deg1 === 90 || deg2 === 90 || deg3 === 90) {
    return 'rigth';
  } else if (deg1 < 90 && deg2 < 90 && deg3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}