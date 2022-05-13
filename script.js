"use strict";
function showMessage(input, message, type) {
  // get the small element and set the message
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  // update the class for the input
  input.className = type ? "success" : "error";
  return type;
}
function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

function validatePassword(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  alert(input.value);
  if (input.value.length < 8 || input.value.length > 16) {
    return showError(input, invalidMsg);
  }
  if (!passwordRegex.test(input.value)) {
    return showError(input, invalidMsg);
  } else {
    return true;
  }
}
function confirmPassword(input, confirmInput, invalidMsg) {
  if (input.value != confirmInput.value) {
    return showError(input, invalidMsg);
  } else {
    return true;
  }
}

const form = document.querySelector(".register-form");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const PASSWORD_REQUIRED = "Please enter a password";
const PASSWORD_INVALID =
  "The password needs to be between 8 and 16 characters, have a lovercase letter, a Capital letter, a number and a special character";
const PASSWORD_NOT_MATCHING = "Your passwords don't match";

form.addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();

  // validate the form
  let nameValid = hasValue(form.elements["user-name"], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  let passwordValid = validatePassword(
    form.elements["psw"],
    PASSWORD_REQUIRED,
    PASSWORD_INVALID
  );
  let passwordMatching = confirmPassword(
    form.elements["cpsw"],
    form.elements["psw"],
    PASSWORD_NOT_MATCHING
  );
  // if valid, submit the form.
  if (nameValid && emailValid && validatePassword && confirmPassword) {
    form.submit();
  }
});
