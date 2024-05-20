//  Importo el URLbase para no hacer tan largas las URLS y poder cambiar desde solo una parte la URL
import { URLbase } from './app.js';


//   Conjunto de selectores para que funcione el formulario de create
document.addEventListener('DOMContentLoaded', function() {
    // Aquí va tu código JavaScript
    document.getElementById('userForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

        userName = document.getElementById('userName').value;
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
            userName: userName,
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
        console.log(document.getElementById('userName'))
        try {
            console.log(data)
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
         tbody.innerHTML += `
         <tr class="bg-gray-900 border-b border-gray-800">
                     <th scope="row"
                         class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                         <img class="w-10 h-10 rounded-full" src="/public/assets/img/client-pics-05.png"
                             alt="Jese image">
                         <div class="ps-3">
                             <div class="text-base font-semibold">${user.userName}</div>
                             <div class="font-normal text-gray-500">${user.email}</div>
                         </div>
                     </th>
                     <td class="px-6 py-4">
                         ${user.role}
                     </td>
                     <td class="px-6 py-4">
                        ${user.phone}
                     </td>
                     <td class="px-6 py-4">
                         #${user.nit}
                     </td>
                     <td class="px-6 py-4">
                         <!-- Modal toggle -->
                         <a href="#" type="button" data-modal-target="editUserModal-${user.id}" data-modal-show="editUserModal-${user.id}"
                             class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                     </td>
                 </tr>


                 <!-- Edit user modal -->
                <div id="editUserModal-${user.id}" tabindex="-1" aria-hidden="true"
                    class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <form id="userForm" class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                            <!-- Modal header -->
                            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit User
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="createUserModal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-6 space-y-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="username"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="text" name="username" id="userName"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Username" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="email" name="email" id="email"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="example@domain.com" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="*********" required>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="role"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                        <select name="role" id="role"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required="">
                                            <option value="ADMINISTRATOR">Admin</option>
                                            <option value="CLIENT">Client</option>
                                        </select>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="nit"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIT</label>
                                        <input type="text" name="nit" id="nit"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="NIT" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="address"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                        <input type="text" name="address" id="address"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Address" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="phone"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                        <input type="text" name="phone" id="phone"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Phone" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="target"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target</label>
                                        <input type="number" name="target" id="target"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Target" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-2">
                                        <label for="targetProgress"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target
                                            Progress</label>
                                        <input type="number" name="targetProgress" id="targetProgress"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Target Progress" required="">
                                    </div>
                                    <div class="col-span-6">
                                        <label for="description"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <textarea name="description" id="description"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Description" required=""></textarea>
                                    </div>
                                </div>
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="submit"
                                    class="text-white bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 ">Save
                                    all</button>
                            </div>
                        </form>
                    </div>
                </div>
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
