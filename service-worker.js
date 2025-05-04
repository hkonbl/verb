const CACHE_NAME = 'verb-cache-v1';
const urlsToCache = [
  '/verb/',
  '/verb/index.html',
  '/verb/manifest.json',
  '/verb/icon-192.png',
  '/verb/icon-512.png'
];

// Legg til flere filer om du har f.eks. CSS eller JS-eksternt

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
