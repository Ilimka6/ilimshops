
let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  alert(item + " добавлен в корзину!");
}

function openCart() {
  let cartWindow = window.open("", "Cart", "width=400,height=600");
  let html = "<h2>Корзина</h2><ul>";
  let total = 0;
  cart.forEach(({ item, price }) => {
    html += "<li>" + item + " - " + price + "₽</li>";
    total += price;
  });
  html += "</ul><p>Итого: " + total + "₽</p>";
  html += '<a href="https://www.donationalerts.com/r/hughes01_" target="_blank"><button>Оплатить</button></a>';
  html += "<p>После оплаты ваш ключ:</p>";
  html += "<b>" + Math.random().toString(36).substr(2, 10).toUpperCase() + "</b>";
  html += '<br><br><button onclick="window.close()">⬅ Назад</button>';
  cartWindow.document.write(html);
}
