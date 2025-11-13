// Beri nama cache baru (ubah v1 jadi v2) agar browser tahu ada pembaruan
const CACHE_NAME = 'islamiah-cache-v2';

// Daftar file yang ingin Anda simpan untuk mode offline
const urlsToCache = [
  // --- File Utama (dari folder root) ---
  '/',
  '/index.html',
  '/manifest.json',
  '/ads.txt',
  '/robots.txt',
  '/sitemap.xml',

  // --- Semua halaman HTML Anda di folder 'pages' ---
  // Pastikan path-nya benar, dimulai dengan /pages/
  '/pages/alquan.html',
  '/pages/dashboard.html',
  '/pages/doa.html',
  '/pages/hadist.html',
  '/pages/jadwal_solat.html',
  '/pages/maulid.html',
  '/pages/praktek_ibadah.html',
  '/pages/sholawat.html',
  '/pages/stream.html',
  '/pages/sunnah.html',
  '/pages/tentang.html',

  // --- File JavaScript Anda di folder 'pages' ---
  '/pages/01-button-contoller.js',
  '/pages/02-connection.js',

  // --- PENTING: Tambahkan file-file lain di sini! ---
  // ---------------------------------------------------
  // 1. SEMUA Ikon Anda dari 'assets/icons/'
  '/assets/icons/icon-48.webp',
  '/assets/icons/icon-72.webp',
  '/assets/icons/icon-96.webp',
  // (Tambahkan SEMUA ukuran ikon yang Anda punya)

  // 2. File CSS atau JS dari folder 'components/'
  // (Anda harus cek sendiri nama filenya di folder itu)
  // Contoh:
  // '/components/style.css',
  // '/components/app.js',

  // 3. File di dalam sub-folder pages (alquan, doa, dll)
  // (Anda juga harus menambahkannya jika ada)
  // Contoh:
  // '/pages/alquan/style.css',
  // '/pages/doa/gambar.webp'
];

// --- Mulai dari sini, kodenya sama dengan sebelumnya ---

// 1. Event 'install': Menyimpan file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache dibuka');
        // addAll akan gagal jika SALAH SATU file saja gagal di-download
        // Pastikan semua path di atas sudah benar
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Gagal caching saat install:', err);
      })
  );
});

// 2. Event 'fetch': Menyajikan file dari cache (jika ada)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Ambil dari cache
        }
        return fetch(event.request); // Ambil dari internet
      }
    )
  );
});

// 3. Event 'activate': Menghapus cache lama (INI KODE BARU)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        // Filter dan hapus semua cache yang namanya BUKAN CACHE_NAME terbaru
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
});
