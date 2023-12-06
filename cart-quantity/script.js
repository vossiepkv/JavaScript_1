let cartQuantity = 0



document.getElementById("button").onclick = function () {
  console.log(`Cart Quantity: ${cartQuantity}`);
};

document.getElementById("button2").onclick = function () {
  cartQuantity++;
  console.log(`Cart Quantity: ${cartQuantity}`);
};

document.getElementById("button3").onclick = function () {
  cartQuantity += 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
};

document.getElementById("button4").onclick = function () {
  cartQuantity += 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
};

document.getElementById("button5").onclick = function () {
  console.log('Cart was reset');
  cartQuantity = 0;
  console.log(`Cart Quantity: ${cartQuantity}`);
};