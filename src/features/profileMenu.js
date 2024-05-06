const profileButton = document.getElementById('profileButton');
const profileDropdownMenu = document.getElementById('profileDropdownMenu');

// Alternar visibilidad del menú de perfil al hacer clic
profileButton.addEventListener('click', () => {
    profileDropdownMenu.classList.toggle('hidden'); // Alternar la clase 'hidden'
});

// Cerrar el menú de perfil al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target) && !profileDropdownMenu.contains(e.target)) {
        profileDropdownMenu.classList.add('hidden'); // Ocultar el menú si el clic es fuera del área del botón o del menú
    }
});
