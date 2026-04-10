const CACHE_NAME = 'ofertas-v1';
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(response => response)
      .catch(() => caches.match(event.request))
  );
});