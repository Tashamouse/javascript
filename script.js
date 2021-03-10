"use strict";
// Задание 1
const catalog = {
  goods: [
    { id: 1, name: "Монитор", price: 15000, id_inp: "i1" },
    { id: 2, name: "Процессор", price: 20000, id_inp: "i2" },
    { id: 3, name: "Видеокарта", price: 18000, id_inp: "i3" },
  ],
};

let cart = [];

catalog.goods.forEach((item) => {
  products.insertAdjacentHTML(
    "beforeend",
    "<p>" +
      item.name +
      ": " +
      item.price +
      ' руб. Количество: <input type="number" style="width: 40px;" id="' +
      item.id_inp +
      '" value="0"> <button id="' +
      item.id +
      '">Купить</button></p>'
  );
  products.style.cssText = "background-color: azure;";

  document.getElementById(item.id).addEventListener("click", getCart);

  function getCart() {
    let result = cart.find((item2) => item2.id === item.id);
    if (!result) {
      let qnt = +document.getElementById(item.id_inp).value;
      if (
        qnt !== 0 &&
        qnt > 0 &&
        Number.isInteger(qnt) === true &&
        qnt <= 1000
      ) {
        let sum = item.price * qnt;
        cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          sumobj: sum,
          quantity: qnt,
        });
      }
    }

    if (result) {
      let qnt = +document.getElementById(item.id_inp).value;
      if (
        qnt !== 0 &&
        qnt > 0 &&
        Number.isInteger(qnt) === true &&
        qnt <= 1000
      ) {
        let sum = item.price * qnt;
        let result2 = cart.find((item3) => item3.id === item.id);
        result2.sumobj += sum;
        result2.quantity += qnt;
        console.log(result2.sumobj, result2.quantity);
      }
    }

    let sumCart = cart.reduce((s, cur) => s + cur.sumobj, 0);
    basket.innerHTML = `В корзине: <b>${cart.length}</b> наим. товаров на сумму <b>${sumCart}</b> руб. <br><br><br>`;
    basket.style.cssText = "background-color: aliceblue;";

    cart.forEach((item3) =>
      basket.insertAdjacentHTML(
        "beforeend",
        `<b>${item3.name}</b>  кол-во: ${item3.quantity} шт., на сумму: ${item3.sumobj} руб. <br><br>`
      )
    );

    if (cart.length !== 0) clearButton.style.display = "block";
  }
});

function clearCart() {
  cart.splice(0, cart.length);
  clearButton.style.display = "none";
  basket.innerHTML = "Корзина пуста";
}

document.getElementById("clearButton").addEventListener("click", clearCart);
if (cart.length === 0) {
  basket.innerHTML = "Корзина пуста";
  clearButton.style.display = "none";
}
