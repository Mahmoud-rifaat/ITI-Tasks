/********* Products Data ***********/

// Data Array
const products = [
  {
    name: "cotton shirt for men",
    price: 15,
    category: "men's fashion",
    img: "men-cotton-shirt.jpg",
  },
  {
    name: "men skinny blue jeans",
    price: 90,
    category: "men's fashion",
    img: "men-skinny-blue-jeans.webp",
  },
  {
    name: "cotton o neck men t-shirt",
    price: 30,
    category: "men's fashion",
    img: "men-o-neck-t-shirt.jpg",
  },
  {
    name: "cotton pullover sweatshirt women",
    price: 100,
    category: "women's fashion",
    img: "women-cotton-pullover.jpg",
  },
  {
    name: "women shoes",
    price: 45,
    category: "women's fashion",
    img: "women-shoes.webp",
  },
  {
    name: "women collar winter coat",
    price: 120,
    category: "women's fashion",
    img: "women-collar-winter-coat.webp",
  },
  {
    name: "running sneaker",
    price: 200,
    category: "bags & shoes",
    img: "running-sneakers.jpg",
  },
  {
    name: "men casual shoes",
    price: 100,
    category: "bags & shoes",
    img: "men-casual-shoes.jpg",
  },
  {
    name: "leather matt black casual boot",
    price: 250,
    category: "bags & shoes",
    img: "leather-matt-black-boots.webp",
  },
  {
    name: "waterproof fitness racker sports watch",
    price: 140,
    category: "jewelry & watches",
    img: "waterproof-fitness-racker-sports-watch.jpg",
  },
  {
    name: "bracelet blood pressure smartwatch",
    price: 120,
    category: "jewelry & watches",
    img: "bracelet-blood-pressure-sport-fitness-smartwatch.jpg",
  },
  {
    name: "Sceptre curved 2xHDMI DP monitor",
    price: 149,
    category: "computers",
    img: "spectre-curved-monitor.webp",
  },
  {
    name: "ASUS FHD Eye Care Gaming Monitor",
    price: 159,
    category: "computers",
    img: "ASUS-eye-care-monitor.webp",
  },
  {
    name: "iphone 13 pro black color 512gb storage",
    price: 999,
    category: "phone & tablets",
    img: "iphone-13-pro-max-color-black.jpg",
  },
  {
    name: "Octa Core 10 Inch Android Tablet",
    price: 700,
    category: "phone & tablets",
    img: "10-inch-tablet.jpg",
  },
  {
    name: "RGB Gaming Chair with Speakers",
    price: 600,
    category: "home & furniture",
    img: "RGB-gaming-chair.webp",
  },
  {
    name: "Bed Storage Leather Sofa Luxury",
    price: 750,
    category: "home & furniture",
    img: "bed-storage-leather-sofa.jpg",
  },
  {
    name: "electrical maintenance tools kit box",
    price: 90,
    category: "tools & hardware",
    img: "electrical-maintainance-toolkit.webp",
  },
  {
    name: "Drill Toolkit Powerful Multifunction Drill",
    price: 70,
    category: "tools & hardware",
    img: "drill-tool-set.jpg",
  },
  {
    name: "heart rate monitor gps fitness smartwatch",
    price: 200,
    category: "jewelry & watches",
    img: "heart-rate-monitor-smartwatch.webp",
  },
];

// Adding incrementing productIDs
let id = 0;
products.forEach((product) => {
  product.id = id++;
});

// Auto generating random rates 1 to 5 stars
products.forEach((product) => {
  product.rate = Math.floor(Math.random() * 5 + 1);
});

// Adding Complete Img path (instead of writing the full path in each src)
products.forEach((product) => {
  // product.img = "../img/products/" + product.img;

  // For github src path resolving
  product.img = "JS-Fundamentals-Project/img/products/" + product.img;
});

/********* Categories Data ***********/

// Auto generating categories
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) categories.push(product.category);
});

/********* Favorites Data ***********/
const productsInFavorite = [];

/********* Cart Data ***********/
let productsInCart = [];
if (localStorage.getItem("products_in_cart")) {
  productsInCart = JSON.parse(localStorage.getItem("products_in_cart"));
}
