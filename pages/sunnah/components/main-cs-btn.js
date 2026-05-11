const main_cs_btn = document.getElementById('main-cs-btn')

const main_cs_btn = document.getElementById('main-cs-btn');
let deferredPrompt;

// Masukkan HTML ke DOM
main_cs_btn.insertAdjacentHTML('afterbegin', `
  <button id="scrollToTop" class="scroll-to-top btn btn-sm btn-primary z-index-5 position-fixed"
    style="display: none; bottom: 60px; right: 20px; z-index: 999;">↑</button>

  <a id="pwa-install-btn" class="btn btn-primary btn-sm position-fixed text-light px-2 mt-2"
    style="display: none; bottom: 20px; right: 20px; z-index: 1000;" 
    href="javascript:void(0)" 
    data-bs-toggle="tooltip"
    data-bs-placement="top" title="Install App">
    <div class="d-flex align-items-center">
      <svg viewBox="0 0 24 24" class="icon-20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px; height:20px;">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span class="ms-1" style="font-size: 12px; font-weight: 500;">Install App</span>
    </div>
  </a>
`);

const pwaBtn = document.getElementById('pwa-install-btn');
const scrollBtn = document.getElementById('scrollToTop');

// 2. Logika Deteksi PWA
window.addEventListener('beforeinstallprompt', (e) => {
  // Simpan event agar bisa dipicu nanti
  e.preventDefault();
  deferredPrompt = e;
  
  // Tombol hanya akan muncul jika event install tersedia (biasanya saat scroll)
  handleScrollUI(); 
});

// 3. Logika Muncul Saat Scroll
const handleScrollUI = () => {
  if (window.scrollY > 200 && deferredPrompt) {
    pwaBtn.style.display = 'block';
    scrollBtn.style.display = 'block';
  } else {
    pwaBtn.style.display = 'none';
    if (window.scrollY <= 200) scrollBtn.style.display = 'none';
  }
};

window.addEventListener('scroll', handleScrollUI);

// 4. Aksi Saat Tombol Diklik
pwaBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User menerima instalasi');
      pwaBtn.style.display = 'none';
    }
    deferredPrompt = null;
  }
});

// Tambahan: Sembunyikan jika aplikasi sudah terinstall
window.addEventListener('appinstalled', () => {
  pwaBtn.style.display = 'none';
  deferredPrompt = null;
});
