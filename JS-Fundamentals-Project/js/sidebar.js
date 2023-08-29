/***********Selecting Elements*************/
const sideBarEl = document.querySelector(".side-bar");
const categoriesFilterEls = sideBarEl.querySelector(
  ".side-bar__categories-filters"
);
const priceFilterEl = document.querySelector(".side-bar__price-filter");
const minPriceEl = document.querySelector(".side-bar__price-filter__min-price");
const minPriceInput = document.querySelector(
  ".side-bar__price-filter__price-range"
);

/***********Listing Categories*************/
categories.forEach((category) => {
  categoriesFilterEls.insertAdjacentHTML(
    "beforeend",
    `<label class="side-bar__categories-filters__category-filter-selection">
            <input type="checkbox" name="category-filter" value="${category}"/>
            ${category}
    </label>
    `
  );
});

/***********Filtration Logic*************/
const selectedCategories = [];
let minPrice = 0;
let minRate = 0;
// let foundAProduct = false;

// By default all categories are selected
function selectAllCategories() {
  categories.forEach((category) => selectedCategories.push(category));
}

function renderAfterSearch(query) {
  // Once we select a category, all the shown products are cleared first
  clearProducts();
  // if (selectedCategories.length == 0) selectAllCategories();
  products.forEach((product) => {
    if (product.name.includes(query)) {
      renderProduct(product);
    }
  });

  if (productsContainerEl.textContent == "") noProducts();
}

function renderAfterFiltration() {
  // Once we select a category, all the shown products are cleared first
  clearProducts();
  if (selectedCategories.length == 0) selectAllCategories();
  products.forEach((product) => {
    if (
      selectedCategories.includes(product.category) &&
      product.price >= minPrice &&
      product.rate >= minRate
    ) {
      renderProduct(product);
    }
  });

  if (productsContainerEl.textContent == "") noProducts();
}

// Category Filtration

function checkOnAllCategories() {
  // We clear all the selected categories first:
  selectedCategories.splice(0, selectedCategories.length);
  // then we refill it:
  categoriesFilterEls.querySelectorAll("label").forEach((categoryFilterEl) => {
    const categoryName = categoryFilterEl.textContent.trim();
    categoryFilterEl.querySelector("input").checked
      ? selectedCategories.push(categoryName)
      : 1;
  });
}

// Listen for a category selection
categoriesFilterEls.querySelectorAll("label").forEach((categoryFilterEl) => {
  const categoryName = categoryFilterEl.textContent.trim();
  categoryFilterEl
    .querySelector("input")
    .addEventListener("change", function () {
      checkOnAllCategories();
      renderAfterFiltration();
    });
});

// Price Filtration

minPriceInput.addEventListener("change", function () {
  //   console.log(this.value);
  minPriceEl.textContent = "$" + minPriceInput.value;
  minPrice = minPriceInput.value;
  renderAfterFiltration();
});
