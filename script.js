"use strict";
//Задания 1, 2

// let chessTable = {
//   letters: ["A", "B", "C", "D", "E", "F", "G", "H"],
//   chessWhite: ["п", "К", "С", "Л", "Кр", "Ф"],
//   chessBlack: ["п", "К", "С", "Л", "Кр", "Ф"],
//   getChess() {
//     let square,
//       a = 0,
//       c = 0,
//       count = 0,
//       chessElem;
//     document.body.insertAdjacentHTML(
//       "afterend",
//       '<div class="container" id="div"></div>'
//     );
//     let container = document.querySelector(".container");
//     container.style.cssText = "display: flex; flex-wrap: wrap; width: 900px;";

//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if (i === 0 || j === 0) {
//           div.insertAdjacentHTML("beforeend", '<div class="one-row"></div>');
//         } else {
//           div.insertAdjacentHTML("beforeend", '<div class="block"></div>');
//           square = document.querySelectorAll(".block");

//           if (a === 0) {
//             square[c++].style.cssText =
//               "width: 100px; height: 100px; border: 1px solid black; box-sizing: border-box; text-align: center;";
//             a++;
//           } else {
//             square[c++].style.cssText =
//               "width: 100px; height: 100px; border: 1px solid black; box-sizing: border-box; background-color: black; text-align: center;";
//             a = 0;
//           }
//           count++;
//           if (count > 7) {
//             if (a === 0) {
//               a = 1;
//             } else a = 0;
//             count = 0;
//           }
//         }
//       }
//     }

//     square = document.querySelectorAll(".one-row");
//     for (let key = 0; key < 9; key++) {
//       if (key > 0) square[key].textContent = this.letters[key - 1];
//       square[key].style.cssText =
//         "width: 100px; height: 100px; box-sizing: border-box; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 10px";
//     }

//     for (let key = 9; key < 17; key++) {
//       square[key].style.cssText =
//         "width: 100px; height: 100px; box-sizing: border-box; display: flex; justify-content: flex-end; align-items: center; padding-right: 10px;";
//       square[key].textContent = key - 8;
//     }

//     square = document.querySelectorAll(".block");
//     for (let key in square) {
//       switch (Number(key)) {
//         case 0:
//         case 7:
//           chessElem = this.chessWhite[3];
//           break;
//         case 1:
//         case 6:
//           chessElem = this.chessWhite[1];
//           break;
//         case 2:
//         case 5:
//           chessElem = this.chessWhite[2];
//           break;
//         case 3:
//           chessElem = this.chessWhite[5];
//           break;
//         case 4:
//           chessElem = this.chessWhite[4];
//           break;
//         case 56:
//         case 63:
//           chessElem = this.chessBlack[3];
//           break;
//         case 57:
//         case 62:
//           chessElem = this.chessBlack[1];
//           break;
//         case 58:
//         case 61:
//           chessElem = this.chessBlack[2];
//           break;
//         case 59:
//           chessElem = this.chessBlack[5];
//           break;
//         case 60:
//           chessElem = this.chessBlack[4];
//           break;
//       }

//       if (key >= 0 && key < 8) {
//         if (key % 2 === 0) {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_black">' + chessElem + "</div>"
//           );
//         } else {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_white">' + chessElem + "</div>"
//           );
//         }
//       }
//       if (key > 7 && key < 16) {
//         if (key % 2 === 0) {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_white">' + this.chessWhite[0] + "</div>"
//           );
//         } else {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_black">' + this.chessWhite[0] + "</div>"
//           );
//         }
//       }

//       if (key > 55 && key < 64) {
//         if (key % 2 === 0) {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_white">' + chessElem + "</div>"
//           );
//         } else {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_black">' + chessElem + "</div>"
//           );
//         }
//       }
//       if (key > 47 && key < 56) {
//         if (key % 2 === 0) {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_black">' + this.chessBlack[0] + "</div>"
//           );
//         } else {
//           square[key].insertAdjacentHTML(
//             "beforeend",
//             '<div class="chess_white">' + this.chessBlack[0] + "</div>"
//           );
//         }
//       }

//       let chess = document.getElementsByClassName("chess_white");
//       for (let i = 0; i < chess.length; i++) {
//         chess[i].style.cssText =
//           "color: white; font-size: 64px; height: 100%; width: 64px; margin: 0 auto;";
//       }
//       chess = document.getElementsByClassName("chess_black");
//       for (let i = 0; i < chess.length; i++) {
//         chess[i].style.cssText =
//           "font-size: 64px; height: 100%; width: 64px; margin: 0 auto;";
//       }
//     }
//   },
// };

// chessTable.getChess();

// Задание 3

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
// let out = document.querySelector(".cartBlock");
// function countBasketPrice(obj) {
//   let sum = 0;
//   let n = 0;
//   for (const i in obj) {
//     sum += obj[i].price * obj[i].quantity;
//     n++;
//   }
//   if (obj.length == 0 || obj == undefined)
//     return (out.innerHTML = "Корзина пуста");
//   else
//     return (out.innerHTML = `В корзине: ${n} товар(а/ов) на сумму ${sum} рублей`);
// }

// countBasketPrice(cart);

// out.style.cssText =
//   "width: 800px; height: 100px; box-sizing: border-box; display: flex; flex-wrap: wrap; background-color: pink; align-items: center; font-size: 30px; color: blue; text-align: center; justify-content: center;";
