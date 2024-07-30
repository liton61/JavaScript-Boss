// array declaration
var arrNumber = [1, 2, 3, 4, 5, 6, 7];
var arrString = ["Dog", "Car", "Bird", "Rat"];

// find the length of an array
var number1 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
result1 = number1.length;
// console.log(result1);

// find the indexOf an element
var number2 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
result2 = number2.indexOf(80);
// console.log(result2);

// get the value by index
var number3 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
result3 = number3[2];
// console.log(result3);

// set the value by index
var number4 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
number4[3] = 100;
// console.log(number4);

// Add an element to the end of the array
var number5 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
number5.push(100);
console.log(number5);

// remove an element to the end of the array
var number6 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
number6.pop();
// console.log(number6);

// Add an element to the beginning of the array
var number7 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
number7.unshift(0);
// console.log(number7);

// Add an element to the beginning of the array
var number8 = [10, 12, 45, 56, 23, 71, 78, 74, 80];
number8.shift();
console.log(number8);
