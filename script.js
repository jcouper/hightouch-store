document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  const cartItemsCount = document.getElementById("cart-items-count");
  let cartItems = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItems++;
      updateCart();
      animateAddToCart();
    });
  });

  function updateCart() {
    cartLink.textContent = `View Cart`;
    cartItemsCount.textContent = cartItems;
    if (cartItems === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else if (cartItems > 1) {
      cartLink.textContent = `View Cart (${cartItems} items)`;
    }
  }

  function animateAddToCart() {
    const addedText = document.createElement("span");
    addedText.textContent = "Added to Cart!";
    addedText.classList.add("added-to-cart");
    document.body.appendChild(addedText);

    setTimeout(() => {
      addedText.remove();
    }, 2000);
  }
});
