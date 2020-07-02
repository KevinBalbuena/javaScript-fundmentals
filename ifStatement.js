// if(something) {
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to
// if (id == 100) {
//   console.log("true");
// } else {
//   console.log("not true");
// }

// // Not Equal to
// if (id != 101) {
//   console.log("true");
// } else {
//   console.log("not true");
// }

// // Equal to vaule and type
// if (id === 100) {
//   console.log("true");
// } else {
//   console.log("not true");
// }

// // Equal to value and type
// if (id !== 100) {
//   console.log("true");
// } else {
//   console.log("not true");
// }

// Test id undefined
// if (typeof id !== "undefined") {
//   console.log(`The ID id ${id}`);
// } else {
//   console.log("No ID");
// }

// Great or less than
// if (id > 200) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// If else

const color = "yellow";

// if (color === "red") {
//   console.log("red");
// } else if (color === "blue") {
//   console.log("blue");
// } else {
//   console.log("color is not red or blue");
// }

const name = "Steve";
const age = 25;

// And &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// Or ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? "Correct" : "Incorrect");
