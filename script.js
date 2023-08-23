document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  const cartItemsCount = document.getElementById("cart-items-count");
  const checkoutForm = document.getElementById("checkout-form");
  const clearCartButton = document.getElementById("clear-cart-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  let cartItems = 0;

  // Load cart item count on page load
  loadCartItemCount();

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItems++;
      updateCart();
      animateAddToCart();
    });
  });

  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    if (cartItems > 0 && name && email) {
      alert(`Thank you, ${name}! Your order has been placed.`);
      cartItems = 0;
      updateCart();
    } else {
      alert("Please add items to the cart and provide your name and email.");
    }
  });

  clearCartButton.addEventListener("click", () => {
    clearCart();
    updateCart();
  });

  function clearCart() {
    cartItems = 0;
    localStorage.removeItem("cartItems");
  }

  function loadCartItemCount() {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems !== null) {
      cartItems = parseInt(storedCartItems);
      updateCart();
    }
  }

  function updateCart() {
    cartItemsCount.textContent = cartItems;
    if (cartItems === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else {
      cartLink.textContent = `View Cart (${cartItems} items)`;
    }
    // Update local storage
    localStorage.setItem("cartItems", cartItems);
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
