document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  const cartItemsCount = document.getElementById("cart-items-count");
  const checkoutForm = document.getElementById("checkout-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  let cartItems = 0;

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

  function updateCart() {
    cartItemsCount.textContent = cartItems;
    if (cartItems === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else {
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
