// Selecting elements
const nameField = document.querySelector("#name-field");
const emailField = document.querySelector("#email-field");
const passwordField = document.querySelector("#password-field");
const genderBtns = document.getElementsByName("gender");
const countryDropdown = document.querySelector("#country-dropdown");
const formField = document.querySelector(".form-container");

const resetBtn = document.querySelector(".reset-btn");

const nameAlert = document.querySelector("#name-alert");
const emailAlert = document.querySelector("#email-alert");
const passwordAlert = document.querySelector("#password-alert");
const genderAlert = document.querySelector("#gender-alert");
const countryAlert = document.querySelector("#country-alert");

// Validation array
const validationArray = [0, 0, 0, 0, 0];

// Name validation
nameField.addEventListener("input", function () {
  if (nameField.value && isNaN(nameField.value)) {
    nameField.classList.add("verified");
    nameAlert.style.display = "none";
    validationArray[0] = true;
  } else {
    nameField.classList.remove("verified");
    nameAlert.style.display = "block";
    validationArray[0] = false;
  }
});

// Email validation
emailField.addEventListener("input", function () {
  if (emailField.value && emailField.value.match(/^[A-Za-z0-9+_.-]+@(.+)$/g)) {
    emailField.classList.add("verified");
    emailAlert.style.display = "none";
    validationArray[1] = true;
  } else {
    emailField.classList.remove("verified");
    emailAlert.style.display = "block";
    validationArray[1] = false;
  }
});

// Password validation
passwordField.addEventListener("input", function () {
  if (passwordField.value.length > 8) {
    passwordField.classList.add("verified");
    passwordAlert.style.display = "none";
    validationArray[2] = true;
  } else {
    passwordField.classList.remove("verified");
    passwordAlert.style.display = "block";
    validationArray[2] = false;
  }
});

// Gender validation
document
  .querySelector(".gender-choices")
  .addEventListener("click", function () {
    if (genderBtns[0].checked || genderBtns[1].checked) {
      genderAlert.style.display = "none";
      validationArray[3] = true;
    } else {
      genderAlert.style.display = "block";
      validationArray[3] = false;
    }
  });

// Country validation
document
  .querySelector(".country-container")
  .addEventListener("click", function () {
    if (countryDropdown.value != countryDropdown.firstElementChild.value) {
      console.log("valid");
      countryAlert.style.display = "none";
      validationArray[5] = true;
    } else {
      countryAlert.style.display = "block";
      validationArray[5] = false;
    }
  });

function submitFun(e) {
  e.preventDefault();
  let validationArraySum = 0;
  validationArray.forEach((i) => (validationArraySum += i));
  if (validationArraySum == 5) {
    // formField.classList.add("verified");
    toastr.success("We got your info and will contact you soon.");
  }
}

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("reset");
  formField.reset();

  const paragraphs = document.getElementsByTagName("p");

  const newArr = new Array(...paragraphs);

  newArr.forEach((p) => (p.style.display = "none"));
});
