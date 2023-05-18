const staticSyS = "solyservicios-v1";
const assets = [
  "/",
  "/index.html",
  "/assets/css/main.css",
  "/assets/js/app.js",
  "/images/banner.jpg",
  "/images/copybanner.png",
  "/images/gp-ds.png",
  "/images/pic01.png",
  "/images/pic02.jpg",
  "/images/pic03.jpg",
  "/images/pic04.jpg",
  "/images/icons/logo512x512.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSyS).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});