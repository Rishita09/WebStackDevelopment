// Function to validate the full name
function validateName() {
  const fullName = document.getElementById("full-name").value.trim();
  const nameValidation = document.getElementById("name-validation");

  if (fullName.length < 3 || !/^[a-zA-Z\s]+$/.test(fullName)) {
    nameValidation.textContent =
      "Full name must be at least 3 characters and contain only alphabetic characters and spaces.";
    return false;
  } else {
    nameValidation.textContent = "";
    return true;
  }
}

// Function to validate the email address
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailValidation = document.getElementById("email-validation");

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailValidation.textContent = "Invalid email format.";
    return false;
  } else {
    emailValidation.textContent = "";
    return true;
  }
}

// Function to validate the password
function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordValidation = document.getElementById("password-validation");

  if (password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d).+$/.test(password)) {
    passwordValidation.textContent =
      "Password must be at least 8 characters and contain both letters and numbers.";
    return false;
  } else {
    passwordValidation.textContent = "";
    return true;
  }
}

// Function to validate password confirmation
function validatePasswordConfirmation() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const confirmPasswordValidation = document.getElementById(
    "confirm-password-validation"
  );

  if (password !== confirmPassword) {
    confirmPasswordValidation.textContent = "Passwords do not match.";
    return false;
  } else {
    confirmPasswordValidation.textContent = "";
    return true;
  }
}

// Function to validate date of birth and calculate age
function validateDOB() {
  const dobInput = document.getElementById("date-of-birth");
  const dobValidation = document.getElementById("dob-validation");
  const dobValue = dobInput.value.trim();
  const dobDate = new Date(dobValue);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - dobDate.getFullYear();

  if (isNaN(dobDate.getTime()) || dobValue.length !== 10 || age < 18) {
    dobValidation.textContent =
      "Please enter a valid date of birth (YYYY-MM-DD) and be at least 18 years old.";
    document.getElementById("submit-button").disabled = true;
    return false;
  } else {
    dobValidation.textContent = "";
    document.getElementById("submit-button").disabled = false;
    return true;
  }
}

// Function to update the validation status icon
function updateValidationStatus(inputId, isValid) {
  const validationIcon = document.getElementById(inputId + "-validation-icon");
  if (isValid) {
    validationIcon.textContent = "✓"; // Green checkmark
    validationIcon.classList.remove("invalid");
    validationIcon.classList.add("valid");
  } else {
    validationIcon.textContent = "✗"; // Red "x"
    validationIcon.classList.remove("valid");
    validationIcon.classList.add("invalid");
  }
}

// Event listeners for real-time validation
document.getElementById("full-name").addEventListener("input", function () {
  const isValid = validateName();
  updateValidationStatus("full-name", isValid);
});

document.getElementById("email").addEventListener("input", function () {
  const isValid = validateEmail();
  updateValidationStatus("email", isValid);
});

document.getElementById("password").addEventListener("input", function () {
  const isValid = validatePassword();
  updateValidationStatus("password", isValid);
});

document
  .getElementById("confirm-password")
  .addEventListener("input", function () {
    const isValid = validatePasswordConfirmation();
    updateValidationStatus("confirm-password", isValid);
  });

document.getElementById("date-of-birth").addEventListener("input", function () {
  const isValid = validateDOB();
  updateValidationStatus("date-of-birth", isValid);
});

// Form submission validation
document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    if (
      !validateName() ||
      !validateEmail() ||
      !validatePassword() ||
      !validatePasswordConfirmation() ||
      !validateDOB()
    ) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
