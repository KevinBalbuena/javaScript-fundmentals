// //  Log to console
// console.log("Hello World");
// console.log(123);
// console.log(true);
// var gretting = "Hello";
// console.log(gretting);
// console.log([1, 2, 3, 4]);
// console.log({ a: 1, b: 2 });
// console.table({ a: 1, b: 2 });

// console.error("This is some error");
// console.clear();
// console.warn("This is a warning ");
// console.time("Hello");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.timeEnd("Hello");
// console.clear();

// // var, let, const
// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// gretting = "Hello";
// console.log(gretting);

// // letters, numbers, _, $
// // Can not start with number
// // var _name = 'John'

// // Multi word vars
// var firstName = 'John' // Camel case

// Let
// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// Const
// const name = "john";
// console.log(name);
//  Can not resign
// name = "Sara";
// Have to assign a value
//
// const person = {
//   name: "John",
//   age: 30,
// };

// person.name = "Sara";
// person.age = 32;

// console.log(person);

// const numbers = [1, 2, 3, 4];
// numbers.push(6);
// console.log(numbers);

// Primitive

// // String
// const name = "John Doe";
// // Number
// const age = 45;
// // Boolean
// const hasKids = false;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();

// // Reference types - Objects
// // Array
// const hobbies = ["movies", "music"];
// // Object
// const address = {
//   city: "boston",
//   state: "MA",
// };
// // Date
// const today = new Date();
// console.log(today);

// console.log(typeof today);

// let val;

// //  Number to string
// val = String(5);
// val = String(4 + 4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1, 2, 3, 4]);

// // toString()
// val = (5).toString();
// val = true.toString();

// // String to Number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello");
// val = Number([1, 2, 3]);

// val = parseInt("100");
// val = parseFloat("100.30");

// // output
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbrs

// val = num1 + num2;
// val = num1 * num2;

// console.log(val);

const name = "John";
const age = "30";
const job = "Web Devloper";
const city = "Miami";
let html;

//eithout template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  " </li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

// With template strings (es6)
html = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>`;

document.body.innerHTML = html;
