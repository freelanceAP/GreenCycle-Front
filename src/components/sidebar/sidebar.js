

export function sidebar() {

    const sidebarContent = `  <div class="logo-details">
    <img class="bx bxl-c-plus-plus icon" src="/public/assets/img/Logo verde-blanco.svg" alt="">

    </div>
    <div class="title_cont">
    <h5 class="title">Menu</h5>
    </div>
    <li>
      <a href="#">
        <i >
          <ion-icon name="layers"></ion-icon>
        </i>
        <span class="links_name">Dashboard</span>
      </a>
      <span class="tooltip">Dashboard</span>
    </li>
    
    <li>
      <a href="#">
        <i>
          <ion-icon name="file-tray"></ion-icon>
        </i>
        <span class="links_name">Admin</span>
      </a>
      <span class="tooltip">Admin</span>
    </li>
    
    <li>
      <a href="#">
        <i>
          <ion-icon name="briefcase"></ion-icon>
        </i>
        <span class="links_name">Clients</span>
      </a>
      <span class="tooltip">Clients</span>
    </li>
    
    <li>
      <a href="#">
        <i>
          <ion-icon name="bookmarks"></ion-icon>
        </i>
        <span class="links_name">Requests</span>
      </a>
      <span class="tooltip">Requests</span>
    </li>
    
    <li>
      <a href="#">
        <i >
          <ion-icon name="document-text"></ion-icon>
        </i>
        <span class="links_name">Certificates</span>
      </a>
      <span class="tooltip">Certificates</span>
    </li>
    
    </ul>`


    // Obtener elementos del DOM
    const sidebar = document.querySelector(".sidebar");
    

    sidebar.innerHTML = sidebarContent

    
}
