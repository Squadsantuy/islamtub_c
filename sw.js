// Nama cache Anda (ganti 'v1' jika ada pembaruan)
const CACHE_NAME = 'islamiah-cache-v1';

// Daftar file yang ingin Anda simpan untuk mode offline
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Tambahkan file CSS, JS, dan gambar penting lainnya
  // Pastikan path-nya sesuai dengan struktur folder Anda
  // '/components/main.js', 
  // '/pages/home.css',
  '/assets/icons/icon-96.webp' // Tambahkan ikon utama
];

// 1. Event 'install': Menyimpan file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache dibuka');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. Event 'fetch': Menyajikan file dari cache (jika ada)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jika file ada di cache, kembalikan dari cache
        if (response) {
          return response;
        }
        // Jika tidak, ambil dari network (internet)
        return fetch(event.request);
      }
    )
  );
});
