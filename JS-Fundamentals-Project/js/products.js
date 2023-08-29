/************Selecting Elements****************/
const productsContainerEl = document.querySelector(".products-container");

/************Displaying the products***********/

function clearProducts() {
  productsContainerEl.innerHTML = "";
}

function renderProduct(product) {
  productsContainerEl.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product-card">
        <img src="${product.img}" />
        <span class="product-card__add-to-favorites" onclick="addToFavorites(event)">
            <i class="fa-regular fa-heart"></i>
        </span>
        <div class="product-card__product-details">
            <p class="product-card__product-details__product-id">${product.id}</p>
            <p class="product-card__product-details__product-name">${product.name}</p>
            <span class="product-card__product-details__product-rate">${product.rate} stars</span>
            <p class="product-card__product-details__product-price">$${product.price}</p>
        </div>
        <button class="btn product-card__add-to-cart-btn" onclick="addToCart(event)">Add to cart</button>
    </div>
    `
  );
}

// Default Display
products.forEach((product) => renderProduct(product));

// If theres no products
function noProducts() {
  productsContainerEl.insertAdjacentHTML(
    "afterbegin",
    `<p style="font-size: 1.5rem; display:block">No Products found!</p>`
  );
}

if (productsContainerEl.innerHTML == "") {
  noProducts();
}

/************Adding to cart & Favorites***********/

// Add to cart functionality
function addToCart(event) {
  const productID = event.target.parentNode.querySelector(
    ".product-card__product-details__product-id"
  ).textContent;

  if (
    productsInCart.filter((productInCart) => productInCart.id === productID)
      .length === 0
  ) {
    productsInCart.push({ id: productID, count: 1 });
    localStorage.setItem("products_in_cart", JSON.stringify(productsInCart));
  }

  // Display an info toast with no title
  toastr.success("Product added to cart successfully");
}

// Add to favorites functionality
function addToFavorites(event) {
  const productID = event.target.parentNode.parentNode.querySelector(
    ".product-card__product-details__product-id"
  ).textContent;

  productsInFavorite.push(productID);

  if (
    productsInFavorite.filter(
      (productInCart) => productsInFavorite.id === productID
    ).length === 0
  ) {
    productsInFavorite.push({ id: productID, count: 1 });
  }

  event.target.parentNode.innerHTML = `<i class="fa-solid fa-heart"></i>`;
}
