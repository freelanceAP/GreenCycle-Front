const profileButton = document.getElementById('profileButton');
const profileDropdownMenu = document.getElementById('profileDropdownMenu');

profileButton.addEventListener('click', () => {
    profileDropdownMenu.classList.toggle('hidden'); // Change the visibility of the menu
});

document.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target) && !profileDropdownMenu.contains(e.target)) {
        profileDropdownMenu.classList.add('hidden'); // Close menu
    }
});
