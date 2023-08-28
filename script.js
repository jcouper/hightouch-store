document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartLink = document.getElementById("cart");
  let cartItemsCount = 0;

  updateCart();

function product_added() {
  hightouchevents.track('Product Added', {
    name: document.getElementById("product-title").innerHTML,
    price: document.getElementById("product-price").innerHTML
  });
}

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartItemsCount++;
      updateCart();
      animateAddToCart();
    });
  });

  function updateCart() {
    if (cartItemsCount === 1) {
      cartLink.textContent = `View Cart (1 item)`;
    } else {
      cartLink.textContent = `View Cart (${cartItemsCount} items)`;
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


