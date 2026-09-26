const CACHE_NAME = "family-tree-cache-v4";
const ASSETS = [
  "./index.html",
  "./family-tree.manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  // cache.addAll() fetches with the browser's normal HTTP caching rules,
  // which can silently hand back an already-stale index.html straight from
  // the browser's own HTTP cache even though THIS install (a new SW
  // version) is meant to pick up whatever is actually live right now.
  // {cache: "reload"} forces each asset to be re-fetched from the network.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(ASSETS.map((url) =>
        fetch(url, { cache: "reload" }).then((response) => cache.put(url, response))
      ))
    )
  );
  // Don't self.skipWaiting() here — a new SW stays "waiting" until the page
  // asks it to take over (see the message listener below), so the page can
  // show an "update available" banner first instead of silently swapping
  // the app out from under whatever the person is doing.
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
