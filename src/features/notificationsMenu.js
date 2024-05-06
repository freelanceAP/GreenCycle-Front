const notificationBtn = document.getElementById("notificationBtn");
const notificationMenu = document.getElementById("notificationMenu");

notificationBtn.addEventListener("click", () => {
  notificationMenu.classList.toggle("hidden"); // Change the visibility of the menu
});

document.addEventListener("click", (e) => {
  if (
    !notificationBtn.contains(e.target) &&
    !notificationMenu.contains(e.target)
  ) {
    notificationMenu.classList.add("hidden"); // Close menu
  }
});
