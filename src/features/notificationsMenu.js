const notificationBtn = document.getElementById("notificationBtn");
const notificationMenu = document.getElementById("notificationMenu");

notificationBtn.addEventListener("click", () => {
  notificationMenu.classList.toggle("hidden"); // Alterna la visibilidad del menú
});

document.addEventListener("click", (e) => {
  if (
    !notificationBtn.contains(e.target) &&
    !notificationMenu.contains(e.target)
  ) {
    notificationMenu.classList.add("hidden"); // Cierra el menú al hacer clic fuera
  }
});
