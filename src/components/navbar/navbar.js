export function navbar() {
  const navbarContent = `<nav class="navbar bg-white h-20 px-4 flex items-center justify-between">
  <!-- Título -->
  <div class="text-indigo-950 flex align-center text-3xl font-semibold">
    <i class='bx bx-menu-alt-right' id="btn"></i>
  </div>

  <div class="flex gap-4 items-center"> 
    <!-- Entrada de búsqueda -->
    <div class="flex justify-between py-3 px-6"> 
      <form action="">
        <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <ion-icon name="search" class="absolute ml-3"></ion-icon>
          <input
            type="text"
            name="search"
            placeholder="Search for something"
            autocomplete="off"
            class="pr-3 pl-10 py-2 rounded-full bg-slate-100 outline-none focus:outline-none ring-0 focus:ring-0"
          />
        </div>
      </form>
    </div>

    <!-- Notificaciones -->
    <div class="relative z-10">
    <button
        id="notificationBtn"
        class="h-10 w-10 rounded-full bg-slate-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-lime-400 hover:to-green-500 focus:outline-none focus:bg-gradient-to-b focus:from-lime-400 focus:to-green-500"
      >
        <ion-icon id="notificationIcon" name="notifications" class="text-xl text-indigo-950 hover:text-white"></ion-icon>
      </button>
      
      <div
        id="notificationMenu"
        class="absolute right-0 mt-2 w-96 min-h-56 bg-white rounded-lg shadow-lg hidden"
      >
        <div class="py-2 px-4 bg-gradient-to-r from-indigo-950 to-green-500 text-white text-lg font-semibold rounded-t-lg">
          Notifications
        </div>
        <ul class="py-1">
          <li class="px-4 py-2 hover:bg-slate-100">
            <div class="font-bold">New request</div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada hendrerit fringilla.</p>
          </li>
          <li class="px-4 py-2 hover:bg-slate-100">
            <div class="font-bold">New request</div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada hendrerit fringilla.</p>
          </li>
          <li class="px-4 py-2 hover:bg-slate-100">
            <div class="font-bold">New request</div>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada hendrerit fringilla.</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Perfil -->
    <div class="relative z-10">
      <button
      id="profileButton"
        class="flex items-center rounded-full px-3 py-2"
      >
        <div class="h-10 w-10 flex justify-center items-center rounded-full">
          <img
            src="/public/assets/img/client-pics-05.png"
            class="w-full h-full rounded-full"
            alt="Profile Picture"
          />
        </div>
        <div class="flex flex-col justify-start ml-2 text-left">
          <h1 class="font-semibold">User Name</h1>
          <h4 class="text-sm text-gray-500 -mt-1">Admin</h4>
        </div>
      </button>

      <div
        id="profileDropdownMenu"
        class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg hidden">
        <ul class="py-1 text-indigo-950">
          <li class="px-4 py-2  hover:bg-slate-100 flex items-center" id="openModal">
            <ion-icon name="person" class="text-indigo-950 text-lg mr-2"></ion-icon> 
            Profile
          </li>
          <li class="px-4 py-2 hover:bg-slate-100 flex items-center">
            <ion-icon name="document" class="text-indigo-950 text-lg mr-2"></ion-icon> 
            Request
          </li>
          <li class="px-4 py-2 hover:bg-slate-100 flex items-center">
            <ion-icon name="log-out" class="text-indigo-950 text-xl mr-2"></ion-icon> 
            Log Out
          </li>
        </ul>

        <!-- Superposición (overlay) y Modal de registro -->
        <!-- Modal structure -->
        <div id="overlay" class="fixed inset-0 bg-gray-900 bg-opacity-50 modal-overlay hidden"></div>

        <div id="registration-modal" class="hidden fixed inset-0 flex items-center justify-center modal-content modal-hidden" >
          <div class="bg-white p-6 rounded-lg shadow-lg w-[46rem]">
  <h2 class="text-2xl font-bold mb-4 text-indigo-950">Create / Edit Profile</h2>
  <form action="" class="flex flex-col gap-6">
    <div class="flex mt-6">
      <div class="w-2/12 mr-28">
        <div class="h-36 w-36 mt-3 ml-10 rounded-full overflow-hidden">
          <img
            src="/public/assets/img/client-pics-05.png"
            class="w-full h-full"
            alt="Profile Picture"
          />
        </div>
      </div>
      <div class="w-8/12">
        <!-- Primera fila -->
        <div class="flex gap-4 mb-4">
          <div class="w-1/2">
            <label class="block text-indigo-950 font-medium mb-2">First Name</label>
            <input type="text" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
          <div class="w-1/2">
            <label class="block text-indigo-950 font-medium mb-2">Last Name</label>
            <input type="text" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
        </div>

        <!-- Segunda fila -->
        <div class="flex gap-4 mb-4">
          <div class="w-1/2">
            <label class="block text-indigo-950 font-medium mb-2">Email</label>
            <input type="email" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
          <div class="w-1/2">
            <label class="block text-indigo-950 font-medium mb-2">Phone Number</label>
            <input type="number" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
        </div>

        <!-- Tercera fila -->
        <div class="flex gap-4 mb-4">
          <div class="w-1/4">
            <label class="block text-indigo-950 font-medium mb-2">ID Number</label>
            <input type="number" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
          <div class="w-1/4">
            <label class="block text-indigo-950 font-medium mb-2">City</label>
            <input type="text" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
          <div class="w-1/2">
            <label class="block text-indigo-950 font-medium mb-2">Address</label>
            <input type="text" class="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-100 text-indigo-950" placeholder="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Botones -->
    <div class="flex justify-end gap-4">
      <button
        type="submit"
        class="bg-gradient-to-t from-indigo-900 to-indigo-950 text-white font-medium py-2 px-4 rounded-lg w-34"
      >
        Save Changes
      </button>
      <button
        type="button"
        class="bg-white text-indigo-950 border-indigo-950 font-medium border py-2 px-4 rounded-lg w-28"
        id="closeModal"
      >
        Cancel
      </button>
    </div>
  </form>
</div>

        </div>
      </div>
    </div>
  </div>
</nav>
`;
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".navbar");

  navbar.innerHTML = navbarContent;

  const closeBtn = document.querySelector("#btn");
  const closeModalbtn = document.querySelector("#closeModal");
  const btnopenModal = document.querySelector("#openModal");
  btnopenModal.addEventListener("click", () => {
    openModal();
    console.log("object");
  });

  closeModalbtn.addEventListener("click", () => {
    closeModal();
    console.log("object");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    BtnChange();
  });

  function BtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
  BtnChange();

  const profileButton = document.getElementById("profileButton");
  const profileDropdownMenu = document.getElementById("profileDropdownMenu");

  profileButton.addEventListener("click", () => {
    profileDropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !profileButton.contains(e.target) &&
      !profileDropdownMenu.contains(e.target)
    ) {
      profileDropdownMenu.classList.add("hidden");
    }
  });
  const notificationBtn = document.getElementById("notificationBtn");
  const notificationMenu = document.getElementById("notificationMenu");

  notificationBtn.addEventListener("click", () => {
    notificationMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (
      !notificationBtn.contains(e.target) &&
      !notificationMenu.contains(e.target)
    ) {
      notificationMenu.classList.add("hidden");
    }
  });

  // Función para abrir el modal
  function openModal() {
    const overlay = document.getElementById("overlay");
    const registrationModal = document.getElementById("registration-modal");

    console.log(overlay);
    overlay.classList.remove("modal-hidden");
    overlay.classList.remove("hidden");
    registrationModal.classList.remove("modal-hidden");
    registrationModal.classList.remove("hidden");
  }

  function closeModal() {
    console.log("object");
    const overlay = document.getElementById("overlay");
    const registrationModal = document.getElementById("registration-modal");

    overlay.classList.add("modal-hidden");
    overlay.classList.add("hidden");
    overlay.classList.add("modal-hidden");
    registrationModal.classList.add("hidden");
  }
}
