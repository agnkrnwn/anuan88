// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('boldssd-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/js/app2.js',
          '/js/app3.js',
          '/js/jquery-3.6.0.min.js',
          '/js/pdfmake.min.js',
          '/js/vfs_fonts.js',
          '/css/all.min.css',
          '/css/full.css',
          '/css/output.css',
          '/manifest.json',
          '/icon.png',
          '/service-worker.js',
          '/webfonts/fa-solid-900.ttf',
          '/webfonts/fa-solid-900.woff2',

        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  
