document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  const cartItemsCount = document.getElementById("cart-items-count");
  const checkoutForm = document.getElementById("checkout-form");
  const clearCartButton = document.getElementById("clear-cart-btn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  updateCart();

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
    if (cartItemsCount > 0 && name && email) {
      alert(`Thank you, ${name}! Your order has been placed.`);
      clearCart();
      updateCart();
    } else {
      alert("Please add items to the cart and provide your name and email.");
    }
  });

  clearCartButton.addEventListener("click", () => {
    clearCart();
    updateCart();
  });

  function addToCart(itemIndex) {
    const cart = getSessionCart();
    cart.push(itemIndex);
    setSessionCart(cart);
    updateCart();
  }

  function clearCart() {
    setSessionCart([]);
    cartItemsCount.textContent = 0; // Reset cart items count to 0
  }

  function getSessionCart() {
    const cartJSON = sessionStorage.getItem("cartItems");
    return cartJSON ? JSON.parse(cartJSON) : [];
  }

  function setSessionCart(cart) {
    const cartJSON = JSON.stringify(cart);
    sessionStorage.setItem("cartItems", cartJSON);
  }

  function updateCart() {
    const cart = getSessionCart();
    const cartItemCount = cart.length;
    cartItemsCount.textContent = cartItemCount;
    if (cartItemCount === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else {
      cartLink.textContent = `View Cart (${cartItemCount} items)`;
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
