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
       await console.log(data)
      const token = await data.accessToken;
      const user =await awaitdata.user;
      
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));

      // Verificar el role del usuario
      if (user && user.role) {
        if (user.role === 'admin') {
          window.location.href = '../../public/assets/pages/dashboardAdmin.html';
        } else if (user.role === 'user') { // Asumiendo que 'user' corresponde al cliente
          window.location.href = '../../public/assets/pages/dashboardClient.html';
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
