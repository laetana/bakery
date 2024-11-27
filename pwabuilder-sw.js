// This is the "Offline copy of pages" service worker

// const CACHE = "pwabuilder-offline";

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });

// workbox.routing.registerRoute(
//   new RegExp('/*'),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: CACHE
//   })
// );

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll(['/index.html']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});