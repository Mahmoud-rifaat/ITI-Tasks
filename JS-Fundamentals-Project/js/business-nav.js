// Selecting the cart btn
const cartBtn = document.querySelector(".show-cart-btn");
const cart = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseCart = document.querySelector(".close-modal");
const cartSumSection = document.querySelector(".cart-total-sum");
const cartTotalPrice = document.querySelector(".cart-total-sum__text");
const checkOutBtn = document.querySelector(".checkout-btn");
const searchBar = document.querySelector(".search-bar input");

// The function to open the cart

const openModal = function () {
  // Clear cart UI first
  cart.querySelectorAll(".product-in-cart").forEach((item) => item.remove());
  // Showing the products in cart
  productsInCart.forEach((productInCart) => {
    const product = products.filter(
      (product) => product.id == productInCart.id
    )[0];
    const html = `
    <div class="product-in-cart">
        <img
            class="product-in-cart__img"
            src="${product.img}"
        />
        <div class="product-in-cart__details">
            <p class="product-in-cart__id" style="display:none">${product.id}</p>
            <p class="product-in-cart__name">${product.name}</p>
            <p class="product-in-cart__price">$${product.price}</p>
        </div>
        <div class="product-in-cart__count-control">
            <button
                class="btn product-in-cart__count-control__increment"
                onclick="incrementCount(event)"
            >
            +
            </button>
            <p class="product-in-cart__count-control__count">${productInCart.count}</p>
            <button
                class="btn product-in-cart__count-control__decrement"
                onclick="decrementCount(event)"
            >
            -
            </button>
        </div>
    </div>`;
    const productToAdd = document.createElement("div");
    productToAdd.innerHTML = html;

    cart.insertBefore(productToAdd, cartSumSection);
    updateCartSum();
  });

  //   In case the cart is empty
  if (productsInCart.length === 0) {
    const html = `
    <div class="product-in-cart">Your cart is empty for now</div>`;
    const emptyText = document.createElement("div");
    emptyText.innerHTML = html;

    cart.insertBefore(emptyText, cartSumSection);
  }

  cart.classList.remove("hidden");
  cart.classList.add("flex-modal");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  cart.classList.add("hidden");
  cart.classList.remove("flex-modal");
  overlay.classList.add("hidden");
  //   console.log("Close modal");
};

document.querySelector(".show-cart-btn").addEventListener("click", openModal);
// Different ways to close the cart
btnCloseCart.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !cart.classList.contains("hidden")) {
    closeModal();
  }
});

// Reflect Changes on carts sum
function updateCartSum() {
  // Total Price Sum In cart
  let totalPriceSum = 0;
  productsInCart.forEach((productInCart) => {
    const productPrice = products.find(
      (product) => product.id == productInCart.id
    ).price;
    totalPriceSum += productInCart.count * productPrice;
  });
  cartTotalPrice.textContent = `$${totalPriceSum}`;
}

// Increase & Decrease count in cart
function getTriggeredItemId(e) {
  return e.target.parentNode.parentNode.querySelector(".product-in-cart__id")
    .textContent;
}

function incrementCount(e) {
  const triggeredItemId = getTriggeredItemId(e);
  productsInCart.forEach((productInCart) => {
    if (productInCart.id == triggeredItemId) {
      productInCart.count++;
      e.target.parentNode.querySelector(
        ".product-in-cart__count-control__count"
      ).textContent = productInCart.count;
    }
  });
  localStorage.setItem("products_in_cart", JSON.stringify(productsInCart));

  updateCartSum();
}

function decrementCount(e) {
  const triggeredItemId = getTriggeredItemId(e);
  productsInCart.forEach((productInCart, index) => {
    if (productInCart.id == triggeredItemId) {
      productInCart.count--;
      if (productInCart.count <= 0) {
        e.target.parentNode.parentNode.remove();
        productsInCart.splice(index, 1);
        return;
      }
      e.target.parentNode.querySelector(
        ".product-in-cart__count-control__count"
      ).textContent = productInCart.count;
    }
  });
  localStorage.setItem("products_in_cart", JSON.stringify(productsInCart));

  updateCartSum();
}

// To show the Checkout message
function checkOut() {
  if (productsInCart.length != 0) toastr.success("Order placed successfully");
  else toastr.error("There is no products in your cart!");
}

searchBar.addEventListener("keyup", function (e) {
  renderAfterSearch(e.target.value);
  console.log(e.target.value);
});
