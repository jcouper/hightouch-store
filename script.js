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

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  let cartItems = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItems++;
      updateCart();
      animateAddToCart();
    });
  });

  function updateCart() {
    cartLink.textContent = `Cart (${cartItems})`;
  }

  function animateAddToCart() {
    const addedText = document.createElement("span");
    addedText.textContent = "Item Added to Cart!";
    addedText.classList.add("added-to-cart");
    document.body.appendChild(addedText);

    setTimeout(() => {
      addedText.remove();
    }, 2000); // Remove the added text after 2 seconds
  }
});
