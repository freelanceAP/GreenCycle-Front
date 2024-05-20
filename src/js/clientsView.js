//  Importo el URLbase para no hacer tan largas las URLS y poder cambiar desde solo una parte la URL
import { URLbase } from './app.js';

console.log(document.getElementById('userForm'))
document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const nit = document.getElementById('nit').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    const data = {
        userName,
        email,
        password,
        role,
        nit: parseInt(nit),
        address,
        phone: parseInt(phone),
        description,
        target: 4, // Suponiendo que 'target' y 'targetProgress' sean valores estáticos o los puedas obtener de algún lado
        targetProgress: 3
    };

    try {
        const response = await fetch('https://greencycle-back-production.up.railway.app/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // El usuario se ha creado/actualizado correctamente
            const result = await response.json();
            console.log('User created/updated:', result);
        } else {
            // Hubo un error al crear/actualizar el usuario
            const error = await response.json();
            console.error('Error:', error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
