//  Importo el URLbase para no hacer tan largas las URLS y poder cambiar desde solo una parte la URL
import { URLbase } from './app.js';


//   Conjunto de selectores para que funcione el formulario de create
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
    const target = document.getElementById('target').value;
    const targetProgress = document.getElementById('targetProgress').value;

    const data = {
        userName,
        email,
        password,
        role,
        nit: parseInt(nit),
        address,
        phone: parseInt(phone),
        description,
        target,
        targetProgress
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


 // Conjunto de selectores y funciones para que funcione el renderizado de usuarios
 const tbody = document.querySelector("#tbodyUsers")

 //
 //  Eventos
 //
 
 //  Llamo la funcion para obtener las solicitudes. 
 getUsers()

 async function getUsers() {
     const response = await fetch(URLbase+`users`);
     const data = await response.json();
     
     console.log(data);
     renderUsers(data.content);
 }


 function renderUsers(users) {
     cleanTbody(tbody);
 
     users.forEach((user) => {
         tbody2.innerHTML += `
         <tr class="bg-gray-900 border-b border-gray-800">
                     <td class="w-4 p-4">
                         <div class="flex items-center">
                             <input id="checkbox-table-search-1" type="checkbox"
                                 class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                             <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                         </div>
                     </td>
                     <th scope="row"
                         class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                         <img class="w-10 h-10 rounded-full" src="/public/assets/img/client-pics-05.png"
                             alt="Jese image">
                         <div class="ps-3">
                             <div class="text-base font-semibold">Ken Castro</div>
                             <div class="font-normal text-gray-500">ken@greencycle.com</div>
                         </div>
                     </th>
                     <td class="px-6 py-4">
                         Client
                     </td>
                     <td class="px-6 py-4">
                         123 4567890
                     </td>
                     <td class="px-6 py-4">
                         #01001
                     </td>
                     <td class="px-6 py-4">
                         <!-- Modal toggle -->
                         <a href="#" type="button"
                             class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                     </td>
                 </tr>
         `;
     });
 
      // Re-initialize modals if Flowbite is available
      if (typeof Flowbite !== 'undefined') {
         document.querySelectorAll('[data-modal-toggle]').forEach(button => {
             const modalId = button.getAttribute('data-modal-toggle');
             const modal = document.getElementById(modalId);
             if (modal) {
                 button.addEventListener('click', () => {
                     modal.classList.toggle('hidden');
                 });
             }
         });
     }
 }
 //  Funciona para eliminar la informacion de los Tbody.
 function cleanTbody(body) {
     console.log(body)
     while (body.firstChild) {
         body.removeChild(body.firstChild)
     }
 }
