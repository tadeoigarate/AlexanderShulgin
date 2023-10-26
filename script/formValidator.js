document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const emailInput = form.querySelector("#email");
  const nameInput = form.querySelector("#name");
  const messageInput = form.querySelector("#message");

  function showError(inputElement, message) {
    inputElement.classList.add("error");
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;

    const existingError =
      inputElement.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    inputElement.parentElement.appendChild(errorElement);
  }

  function clearError(inputElement) {
    inputElement.classList.remove("error");
    const errorElement =
      inputElement.parentElement.querySelector(".error-message");
    if (errorElement) {
      errorElement.remove();
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  emailInput.addEventListener("input", function () {
    // Borra el mensaje de error existente
    clearError(emailInput);

    const emailValue = emailInput.value.trim();
    if (emailValue !== "") {
      if (!isValidEmail(emailValue)) {
        showError(
          emailInput,
          "Por favor, ingresa una dirección de correo electrónico válida."
        );
      }
    }
  });

  nameInput.addEventListener("input", function () {
    clearError(nameInput);

    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      showError(nameInput, "Este campo es obligatorio.");
    }
  });

  messageInput.addEventListener("input", function () {
    clearError(messageInput);

    const messageValue = messageInput.value.trim();
    if (messageValue === "") {
      showError(messageInput, "Este campo es obligatorio.");
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isValid = isValidForm();

    if (isValid) {
      form.submit();
    }
  });

  function isValidForm() {
    let isValid = true;

    const nameValue = nameInput.value.trim();
    if (nameValue === "") {
      showError(nameInput, "Este campo es obligatorio.");
      isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, "Este campo es obligatorio.");
      isValid = false;
    } else {
      if (!isValidEmail(emailValue)) {
        showError(
          emailInput,
          "Por favor, ingresa una dirección de correo electrónico válida."
        );
        isValid = false;
      }
    }

    const messageValue = messageInput.value.trim();
    if (messageValue === "") {
      showError(messageInput, "Este campo es obligatorio.");
      isValid = false;
    }

    return isValid;
  }
});
