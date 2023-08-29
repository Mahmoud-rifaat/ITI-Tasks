/**********Selecting Elements *************/
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

/**********Giving a translate to slider images*************/
slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
// document.querySelector(".slider").style.overflow = "visible";

/**********Dots*************/

// Dots Creation function
function createDots() {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
  //   console.log("Dots created!");
}

// A function to make the dot active fot the current slide
function activateDot(slide) {
  // First deactivate all dots
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  // The activate the current dot
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
  //   console.log(`Activating dot ${slide}`);
}

/**********Slider Logic*************/
let currentSlide = 0;
const maxSlide = slides.length;

// Go To Slide function
function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
  activateDot(slide);
}

// Next slide function
function nextSlide() {
  if (currentSlide == maxSlide - 1) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
}

// Prev slide function
function prevSlide() {
  if (currentSlide == 0) currentSlide = maxSlide - 1;
  else currentSlide--;

  goToSlide(currentSlide);
}

function init() {
  // Calling the function that creates the dots
  createDots();
  goToSlide(0);
}
init();

// For Automatic Sliding
setInterval(nextSlide, 2500);

/**********Event Handlers*************/

// Sliding by Left & Right arrow buttons
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// Sliding by left & right keyboard keys
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") prevSlide();
  if (e.key == "ArrowRight") nextSlide();
});

// Making dots Interactive
dotContainer.addEventListener("click", function (e) {
  // Using event Delegation
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
  }
});
