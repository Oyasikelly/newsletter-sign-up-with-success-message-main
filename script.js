const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");
const submittedEmail = document.getElementById("submittedEmail");
const dismissButton = document.getElementById("dismissButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    showSuccess(email);
  } else {
    showError();
  }
});

dismissButton.addEventListener("click", () => {
  successMessage.style.display = "none";
  document.querySelector(".form-section").style.display = "block";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError() {
  emailInput.style.borderColor = "var(--red)";
  errorMessage.style.display = "block";
}

function showSuccess(email) {
  submittedEmail.textContent = email;
  document.querySelector(".form-section").style.display = "none";
  successMessage.style.display = "flex";
  emailInput.style.borderColor = "var(--grey)";
  errorMessage.style.display = "none";
}
