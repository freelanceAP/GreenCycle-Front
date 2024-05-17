document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

AOS.init({
  duration: 1000, // Duración de la animación
  easing: "ease-in-out", // Efecto de suavizado
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  const links = document.querySelectorAll(".loading-link"); // Seleccionar todos los enlaces con la clase 'loading-link'

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevenir acción por defecto
      loadingOverlay.classList.remove("hidden"); // Mostrar pantalla de carga
      const href = link.getAttribute("href");
      setTimeout(() => {
        window.location.href = href; // Redirigir después de 1 segundo
      }, 1000); // Esperar 1 segundo antes de redirigir
    });
  });
});
