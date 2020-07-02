//create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

//Gdet array length
val = numbers.length;
//Check id is array
val = Array.isArray(numbers);
// get a single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);

// Mutating array
// Add to end
// numbers.push(250);
// // Add to front
// numbers.unshift(200);
// //Take off from the end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

//use a 'compare function
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// //Reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

//find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
