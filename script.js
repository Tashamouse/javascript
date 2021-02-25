"use strict";
//Задание 1
// var a = 1,
//   b = 1,
//   c,
//   d;
// c = ++a;
// alert(c); // 2: ++a означает что мы к переменной а прибавляем единицу
// d = b++;
// alert(d); // 1: ++a означает что мы к переменной а прибавляем единицу
// c = 2 + ++a;
// alert(c); // 5: т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 2. В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5
// d = 2 + b++;
// alert(d); // 4: т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 2.В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4
// alert(a); // 3: прибавили единицу в примере 1 и примере 3
// alert(b); // 3: прибавили единицу в примере 2 и примере 4

//Задание 2
// var a = 2;
// var x = 1 + (a *= 2); // x = 5, т.к. оператор (*=) это сокращенный оператор, полностью выражение будет выглядеть так: x = 1 + (a = a * 2 )

//Задание 3
// let a = +prompt("Введите целое число a: ");
// let b = +prompt("Введите целое число b: ");

// if (a >= 0 && b >= 0) {
//   alert(a - b);
// } else if (a < 0 && b < 0) {
//   alert(a * b);
// } else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
//   alert(a + b);
// }

//Задание 4
// let a = 10;
// switch (a) {
//   case 10:
//     alert(a++);
//   case 11:
//     alert(a++);
//   case 12:
//     alert(a++);
//   case 13:
//     alert(a++);
//   case 14:
//     alert(a++);
//   case 15:
//     alert(a++);
// }

//Задание 5
// function getSum(a, b) {
//   return a + b;
// }
// function getSub(a, b) {
//   return a - b;
// }
// function getMul(a, b) {
//   return a * b;
// }
// function getDiv(a, b) {
//   return a / b;
// }
// console.log(getSum(5, 3));
// console.log(getSub(5, 3));
// console.log(getMul(5, 3));
// console.log(getDiv(5, 3));

//Задание 6
// function mathOperation(arg1, arg2, operation) {
//   switch (operation) {
//     case "addition":
//       return arg1 + arg2;
//       break;
//     case "subtraction":
//       return arg1 - arg2;
//       break;
//     case "multiplication":
//       return arg1 * arg2;
//       break;
//     case "division":
//       return arg1 / arg2;
//       break;
//   }
// }
// console.log(mathOperation(15, 3, "division"));

//Задание 7
// alert(null > 0); // (1) false
// alert(null == 0); // (2) false
// alert(null >= 0); // (3) true

// Результат последнего сравнения говорит о том, что "null больше или равно нулю", тогда результат одного из сравнений выше должен быть true, но они оба ложны.

// Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.

// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.

//Задание 8
// function power(val, pow) {
//   if (val == 0) return 0;
//   else if (pow == 0) return 1;
//   else if (pow < 0) return power(1 / val, -pow);
//   else return val * power(val, pow - 1);
// }
// console.log(power(5, 3));
