// For loop

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favorite number");
//     continue;
//   }
//   if (i === 5) {
//     break;
//   }
//   console.log(`Numbers ${i}`);
// }

// While loop

// let i = 0;

// while (i <= 10) {
//   console.log(`Number ${i}`);
//   i++;
// }

//DO while

// let i = 0;

// do {
//   console.log(`Numbers ${i}`);
//   i++;
// } while (i <= 10);

//Loop Through array
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// For Each
cars.forEach(function (car, index) {
  console.log(`${index}: ${car}`);
});

// Map
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Karen" },
//   { id: 4, name: "Steve" },
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 49,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
