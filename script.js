"use strict";
//Задание 1

// function numToObj(num) {
//   let numArr = num.split("");
//   let obj = {};
//   while (numArr.length < 3) {
//     numArr.unshift(0);
//   }
//   if (numArr.length > 3) {
//     console.log("Число превышает 999");
//     return obj;
//   }
//   obj.hundreds = +numArr[0];
//   obj.tens = +numArr[1];
//   obj.identities = +numArr[2];
//   return obj;
// }
// let num = prompt("Введите число от 0 до 999: ");
// console.log(numToObj(num));

// Задание 2

// const cart = [
//   {
//     name: "item1",
//     price: 120,
//     quantity: 5,
//   },
//   {
//     name: "item2",
//     price: 78,
//     quantity: 10,
//   },
//   {
//     name: "item3",
//     price: 460,
//     quantity: 3,
//   },
// ];

// function countBasketPrice(obj) {
//   let sum = 0;
//   for (const i in obj) {
//     sum += obj[i].price * obj[i].quantity;
//   }
//   return console.log(sum);
// }

// countBasketPrice(cart);
