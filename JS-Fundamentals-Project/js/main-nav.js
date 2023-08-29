/*************Logout logic************/
// Clear forward and backward navigation history
// function clearNavigationHistory() {
//   const currentState = history.state;
//   console.log(currentState);
//   const newUrl = window.location.href.split("#")[0]; // Remove URL fragment if present

//   history.replaceState(currentState, "", newUrl);
// }

// // Call the function when navigating to a new page

function logout() {
  localStorage.removeItem("login");
  location.replace("../index.html");
}
