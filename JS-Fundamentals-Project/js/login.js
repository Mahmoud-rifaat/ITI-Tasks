localStorage.setItem("username", "Mahmoud_Refaat");
localStorage.setItem("password", "12345");

const loginFormEl = document.querySelector(".login-form");
const userNameEl = document.querySelector("#username");
const passwordEl = document.querySelector("#password");

// location.href = "";

function login() {
  if (userNameEl.value && passwordEl.value) {
    if (
      localStorage.getItem("username") == userNameEl.value &&
      localStorage.getItem("password") == passwordEl.value
    ) {
      // Login logic
      localStorage.setItem("login", true);
      location.replace("html/home.html");
    } else {
      loginFormEl.insertAdjacentHTML(
        "afterbegin",
        `<p style="color:red">Invalid username or password!</p>`
      );
    }
  }
}
