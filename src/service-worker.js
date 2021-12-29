var CACHE_NAME = "telescope-cache-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/imageCarousel001.jpg",
  "/imageCarousel002.jpg",
  "/imageCarousel003.jpg",
  "/telescopeIcon.png",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
