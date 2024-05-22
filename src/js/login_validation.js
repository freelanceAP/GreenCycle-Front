// Función para verificar si el usuario está autenticado
function isAuthenticated() {
  const token = localStorage.getItem('token');
  return token !== null;
}

// Función para redirigir al usuario a la página de inicio de sesión si no está autenticado
function protectRoute() {
  if (!isAuthenticated()) {
    window.location.href = '/public/assets/pages/login.html'; // Ruta a tu página de inicio de sesión
  }
}

// Proteger rutas llamando a esta función en las páginas que deseas proteger


// Lógica de inicio de sesión
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', handleLogin);

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password-input').value;

  const formData = {
    email: email,
    password: password
  };

  try {
    const response = await fetch('http://localhost:5000/v1/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Inicio de sesión exitoso');
      const data = await response.json();
      const token = data.accessToken;
      const user = data.user;

      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));

      // Verificar el role del usuario
      if (user && user.role) {
        if (user.role === 'admin') {
          window.location.href = '/public/assets/pages/dashboard.html';
        } else if (user.role === 'user') { // Asumiendo que 'user' corresponde al cliente
          window.location.href = '/public/assets/pages/dashboardClient.html';
        } else {
          console.error('Role de usuario no reconocido');
        }
      } else {
        console.error('Información del usuario no disponible o no válida');
      }
    } else {
      console.error('Error en el inicio de sesión');
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
  }
}
