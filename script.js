document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  const cartItemsCount = document.getElementById("cart-items-count");
  const checkoutForm = document.getElementById("checkout-form");
  const clearCartButton = document.getElementById("clear-cart-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const cart = [];

  // Load cart item count on page load
  updateCartCount();

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      addToCart(index);
      animateAddToCart();
    });
  });

  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    if (cart.length > 0 && name && email) {
      alert(`Thank you, ${name}! Your order has been placed.`);
      clearCart();
      updateCartCount();
    } else {
      alert("Please add items to the cart and provide your name and email.");
    }
  });

  clearCartButton.addEventListener("click", () => {
    clearCart();
    updateCartCount();
  });

  function addToCart(itemIndex) {
    cart.push(itemIndex);
    updateCartCount();
  }

  function clearCart() {
    cart.length = 0;
  }

  function updateCartCount() {
    cartItemsCount.textContent = cart.length;
    if (cart.length === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else {
      cartLink.textContent = `View Cart (${cart.length} items)`;
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
