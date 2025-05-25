const CACHE_NAME = "pomodoro-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico", // optional
  "/icon.png", // optional
  "/icon.png", // optional
];

// Install: cache files
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: cleanup old caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() =>
          new Response("Offline mode: content not cached", {
            headers: { "Content-Type": "text/plain" },
          })
        )
      );
    })
  );
});
