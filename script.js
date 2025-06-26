// Select password fields
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Function to validate password format
function validatePassword(password) {
  // At least 8 characters, 1 number, 1 uppercase, 1 lowercase
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

// Add validation on password input
password.addEventListener("input", function () {
  if (!validatePassword(this.value)) {
    this.setCustomValidity(
      "Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter."
    );
  } else {
    this.setCustomValidity("");
  }
});

// Add validation on confirm password input
confirmPassword.addEventListener("input", function () {
  if (!validatePassword(this.value)) {
    this.setCustomValidity(
      "Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter."
    );
  } else {
    this.setCustomValidity("");
  }
});
