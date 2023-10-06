const emailField = document.getElementById("email_field");
const emailLabel = document.getElementById("email_label");
const emailError = document.getElementById("email_error");

function validateEmail() {
  emailLabel.style.bottom = "45px";
  if (
// todo REGEX EXP
      !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please enter a valid email address";
    emailField.style.borderBottomColor = "red";
    emailError.style.top = "120%";

    return false;
  }

  emailError.innerHTML = "";
  emailField.style.borderBottomColor = "#10d54b";
  emailError.style.top = "100%";
  return true;
}
