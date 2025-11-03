const body_sidebar = document.getElementById('body-sidebar')
body_sidebar.insertAdjacentHTML('beforeend', `
  <div class="sidebar-header d-flex align-items-center justify-content-start">
      <div class="navbar-brand" style="pointer-events: none">
        <div class="logo-main">
          <div class="logo-normal">
            <img src="../../assets/logo.png" height="40px" alt="" />
          </div>
          <div class="logo-mini">
            <img src="../../assets/logo.png" height="40px" alt="" />
          </div>
        </div>
        <h5 class="logo-title">ISLAMIAH</h5>
      </div>
      <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
        <i class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </i>
      </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar" data-scrollbar="true" tabindex="-1"
      style="overflow: hidden; outline: none">
      <div class="scroll-content">
        <div class="sidebar-list">
          <!-- Sidebar Menu Start -->
          <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
            <li class="nav-item static-item">
              <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">Home</span>
                <span class="mini-icon">-</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../dashboard.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/menu.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Beranda</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../alquran.html">
                <i class="icon fw-lighter">
                  <img class="icon-20" src="../../assets/icon/sidebar/quran.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Al-Quran</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../hadist.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/hadits.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Hadits Pilihan</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../sunnah.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/sunah.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Sunnah Nabi</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../maulid.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/muhammad.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Maulid Nabi</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../doa.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/doa.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Doa Doa</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../sholawat.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/sholawat.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Sholawat</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../praktek_ibadah.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/praktek.png" style="opacity: 70%;">
                </i>
                <span class="item-name">Praktek Ibadah</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../jadwal_solat.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/jadwal.png" style="opacity: 70%;">
                </i>
                <span class="item-name">Waktu Sholat</span>
              </a>
            </li>
            <li>
              <hr class="hr-horizontal" />
            </li>
            <li class="nav-item static-item">
              <a class="nav-link static-item disabled" href="#" tabindex="-1">
                <span class="default-icon">Lainnya</span>
                <span class="mini-icon">-</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../tentang.html">
                <i class="icon">
                  <img class="icon-20" src="../../assets/icon/sidebar/tentang.png" style="opacity: 70%" />
                </i>
                <span class="item-name">Tentang Kami</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="scrollbar-track scrollbar-track-x" style="display: none">
        <div class="scrollbar-thumb scrollbar-thumb-x" style="width: 259px; transform: translate3d(0px, 0px, 0px)">
        </div>
      </div>
      <div class="scrollbar-track scrollbar-track-y" style="display: none">
        <div class="scrollbar-thumb scrollbar-thumb-y" style="height: 537px; transform: translate3d(0px, 0px, 0px)">
        </div>
      </div>
    </div>
    <div class="sidebar-footer"></div>
    `)
