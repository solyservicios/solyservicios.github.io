// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "cool-cache";
const offlineFallbackPage = [
  "/",
  "/index.html",
  "/assets/css/main.css",
  "/images/icons/logo512x512.png",
  "/images/banner.jpg",
  "/images/copybanner.png",
  "/images/gp-ds.png",
  "/images/pic01.png",
  "/images/pic02.jpg",
  "/images/pic03.jpg",
  "/images/pic04.jpg",
  "/graphic-design.html",
  "/copywriting.html",
  "/contact-form.html" 
];  

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
