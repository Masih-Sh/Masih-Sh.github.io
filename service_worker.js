var cacheName = 'masih-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/push.css',
  '/js/script.js',
  '/Audio/Gordon1.wav',
  '/Audio/Gordon2.wav',
  '/Audio/Gordon3.wav',
  '/Audio/Gordon4.wav',
  '/Audio/Gordon5.wav'
];

/* Cache contents when Offline See Cache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline, examine Cache Storage */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});