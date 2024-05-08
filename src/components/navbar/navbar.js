export function navbar() {
  const navbarContent = ` 
    <nav class="navbar bg-white h-20 px-4 flex items-center justify-between">
    <!-- Tittle -->
    
    <div class="text-indigo-950 flex align-center text-3xl font-semibold"><i class='bx bx-menu-alt-right' id="btn"></i></div>

    <div class="flex gap-4 items-center"> 

      <!-- Search input -->
      <div class="flex justify-between py-3 px-6"> 
        <form action="">
          <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <ion-icon name="search" class="absolute ml-3"></ion-icon>
            <input type="text" name="search" placeholder="Search for something" autocomplete="off"
              class="pr-3 pl-10 py-2 rounded-full bg-slate-100 outline-none focus:outline-none ring-0 focus:ring-0" />
          </div>
        </form>
      </div>

      <!-- Notifications -->
      <div class="relative z-10">
      <button id="notificationBtn" class="h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-lime-400 hover:to-green-500 focus:outline-none focus:bg-gradient-to-b focus:from-lime-400 focus:to-green-500 focus:text-white">
      <ion-icon name="notifications" class="text-xl hover:text-white"></ion-icon>
      </button>
        <div id="notificationMenu" class="absolute right-0 mt-2 w-96 min-h-56 bg-white rounded-lg shadow-lg hidden">
          <div class="py-2 px-4 bg-gradient-to-r from-indigo-950 to-green-500 text-white text-lg font-semibold rounded-t-lg">Notifications</div>
          <ul class="py-1">
            <li class="px-4 py-2 hover:bg-slate-100">
              <div class="font-bold">New request</div> 
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada hendrerit fringilla</p>
            </li>
            <li class="px-4 py-2 hover:bg-slate-100">
              <div class="font-bold">New request</div> 
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada hendrerit fringilla</p> 
            </li>
            <li class="px-4 py-2 hover:bg-slate-100">
              <div class="font-bold">New request</div> 
              <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada hendrerit fringilla</p>
            </li>
          </ul>
        </div>
      </div>
      

      <!-- Profile -->
      <div class="relative z-10">
        <button id="profileButton" class="flex items-center rounded-full px-3 py-2">
          <div class="h-10 w-10 flex justify-center items-center rounded-full">
            <img src="/public/assets/img/client-pics-05.png" class="w-full h-full rounded-full" alt="Profile Picture" />
          </div>
          <div class="flex flex-col justify-start ml-2 text-left">
            <h1 class="font-semibold">User Name</h1>
            <h4 class="text-sm text-gray-500 -mt-1">Admin</h4>
          </div>
          
        </button>
      
        <div id="profileDropdownMenu" class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg hidden">
          <ul class="py-1 text-indigo-950">
            <li class="px-4 py-2 hover:bg-slate-100 flex items-center"> 
              <ion-icon name="person" class="text-indigo-950 text-lg mr-2"></ion-icon> Profile
            </li>
            <li class="px-4 py-2 hover:bg-slate-100 flex items-center"> 
              <ion-icon name="document" class="text-indigo-950 text-lg mr-2"></ion-icon> Request
            </li>
            <li class="px-4 py-2 hover:bg-slate-100 flex items-center "> 
              <ion-icon name="log-out" class="text-indigo-950 text-xl mr-2"></ion-icon> Log Out
            </li>
          </ul>
        </div>          
      </div>
      
    </div>
  </nav> `;

  // Obtener elementos del DOM
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".navbar");

  navbar.innerHTML = navbarContent;

  const closeBtn = document.querySelector("#btn");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    BtnChange();
  });

  // Función para cambiar el icono del botón
  function BtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  // Llamar a BtnChange inicialmente para asegurarse de que el botón tenga el estado correcto al inicio
  BtnChange();

  const profileButton = document.getElementById("profileButton");
  const profileDropdownMenu = document.getElementById("profileDropdownMenu");

  profileButton.addEventListener("click", () => {
    profileDropdownMenu.classList.toggle("hidden"); // Change the visibility of the menu
  });

  document.addEventListener("click", (e) => {
    if (
      !profileButton.contains(e.target) &&
      !profileDropdownMenu.contains(e.target)
    ) {
      profileDropdownMenu.classList.add("hidden"); // Close menu
    }
  });
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
}
