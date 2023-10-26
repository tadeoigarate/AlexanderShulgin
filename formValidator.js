document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al formulario y a los campos
    const form = document.querySelector(".contact-form");
    const emailInput = form.querySelector("#email");
    const nameInput = form.querySelector("#name");
    const messageInput = form.querySelector("#message");
  
    // Función para agregar una clase de error y mostrar un mensaje
    function showError(inputElement, message) {
      inputElement.classList.add("error");
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.textContent = message;
  
      // Elimina mensajes de error anteriores para este campo
      const existingError = inputElement.parentElement.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }
  
      inputElement.parentElement.appendChild(errorElement);
    }
  
    // Función para eliminar la clase de error y ocultar el mensaje
    function clearError(inputElement) {
      inputElement.classList.remove("error");
      const errorElement = inputElement.parentElement.querySelector(".error-message");
      if (errorElement) {
        errorElement.remove();
      }
    }
  
    // Función para verificar si una dirección de correo electrónico es válida
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    // Event listener para el campo de correo electrónico
    emailInput.addEventListener("input", function () {
      // Borra el mensaje de error existente
      clearError(emailInput);
  
      const emailValue = emailInput.value.trim();
      if (emailValue !== "") {
        if (!isValidEmail(emailValue)) {
          showError(emailInput, "Por favor, ingresa una dirección de correo electrónico válida.");
        }
      }
    });
  
    // Event listener para el campo de nombre
    nameInput.addEventListener("input", function () {
      // Borra el mensaje de error existente
      clearError(nameInput);
  
      const nameValue = nameInput.value.trim();
      if (nameValue === "") {
        showError(nameInput, "Este campo es obligatorio.");
      }
    });
  
    // Event listener para el campo de mensaje
    messageInput.addEventListener("input", function () {
      // Borra el mensaje de error existente
      clearError(messageInput);
  
      const messageValue = messageInput.value.trim();
      if (messageValue === "") {
        showError(messageInput, "Este campo es obligatorio.");
      }
    });
  
    // Agrega un evento 'submit' al formulario
    form.addEventListener("submit", function (event) {
      // Evita que el formulario se envíe automáticamente
      event.preventDefault();
  
      // Realiza la validación aquí para otros campos si es necesario
      const isValid = isValidForm();
  
      // Si el formulario es válido, puedes enviarlo
      if (isValid) {
        form.submit();
      }
    });
  
    // Función para verificar si el formulario es válido
    function isValidForm() {
      let isValid = true;
  
      // Verifica si el campo de nombre está vacío
      const nameValue = nameInput.value.trim();
      if (nameValue === "") {
        showError(nameInput, "Este campo es obligatorio.");
        isValid = false;
      }
  
      // Verifica si el campo de correo electrónico no está vacío
      const emailValue = emailInput.value.trim();
      if (emailValue === "") {
        showError(emailInput, "Este campo es obligatorio.");
        isValid = false;
      } else {
        if (!isValidEmail(emailValue)) {
          showError(emailInput, "Por favor, ingresa una dirección de correo electrónico válida.");
          isValid = false;
        }
      }
  
      // Verifica si el campo de mensaje está vacío
      const messageValue = messageInput.value.trim();
      if (messageValue === "") {
        showError(messageInput, "Este campo es obligatorio.");
        isValid = false;
      }
  
      return isValid;
    }
  });