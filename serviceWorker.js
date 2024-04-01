const todoAssets = "todo-assets"
const assets = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    "/assets/icons/raj.jpg"
]
self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(todoAssets).then(cache => cache.addAll(assets))
    )
})
self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})