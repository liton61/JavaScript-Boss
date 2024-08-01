// add
function add(a, b) {
  return a + b;
}
// console.log(add(50, 30));

// find average number
function averageMarks(assignment1, assignment2, assignment3) {
  var sum = assignment1 + assignment2 + assignment3;
  var average = sum / 3;
  return average;
}
var result = averageMarks(60, 58, 55);
// console.log(result.toFixed(2));

// find the max number
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(27, 97));
