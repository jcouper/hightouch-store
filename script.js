document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  let cartItems = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItems++;
      updateCart();
    });
  });

  function updateCart() {
    cartLink.textContent = `Cart (${cartItems})`;
  }
});
