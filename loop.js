// while loop
var count = 1;
while (count <= 5) {
  // console.log(count);
  count++;
}

// for loop
for (count = 1; count <= 10; count++) {
  // console.log(count);
}

// for loop reverse
for (i = 10; i > 0; i--) {
  // console.log(i);
}

// find even number 0 to 10
for (var i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// find even number 1 to 10
for (var i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}

// loop for each element
var numbers = [10, 20, 30, 40, 50, 60, 70];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  // console.log(number);
}

// loop for each element
var items = ["pen", "mouse", "mobile", "tab", "keyboard", "laptop"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  // console.log(item);
}

// break
for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}
