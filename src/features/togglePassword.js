function togglePassword() {
  // Obtener el campo de entrada y el ícono
  const passwordInput = document.getElementById("password-input");
  const toggleButton = document.getElementById("toggle-password");

  // Alternar el tipo de entrada entre 'password' y 'text'
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML =
      '<ion-icon name="eye" class="text-white"></ion-icon>';
    // Cambiar ícono
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML =
      '<ion-icon name="eye-off" class="text-white"></ion-icon>';
    // Cambiar ícono
  }
}
