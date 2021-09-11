"use strict";

// get elements by variables
const form = document.getElementById(`form`);
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
// showError function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// showSuccess function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// regex code for Email
function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// eventHandler function
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Enter a username");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Enter a Email");
  } else if (!checkEmail(email.value)) {
    showError(email, "Enter a valid Email");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Enter a password");
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === "") {
    showError(confirmPassword, "Please Confirm your Password");
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, `Both Passwords don't match`);
  } else {
    showSuccess(confirmPassword);
  }
});
